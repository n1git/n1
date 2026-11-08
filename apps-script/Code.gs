const TICKETS_SHEET_NAME = "TICKETS";
const MESSAGES_SHEET_NAME = "MESSAGES";
const BOOKINGS_SHEET_NAME = "BOOKINGS";
const RATE_LIMIT_PER_MINUTE = 20;
const RATE_LIMIT_GLOBAL_PER_MINUTE = 120;
const RATE_LIMIT_BOOKING_PER_MINUTE = 10;
const MIN_BOOKING_DESCRIPTION = 30;
const MAX_TEXT_LENGTH = 2000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_PHONE_LENGTH = 30;
const MAX_REASON_LENGTH = 50;
const MAX_BOOKING_DESCRIPTION_LENGTH = 1000;

function doPost(e) {
  const response = handleRequest(e);
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function handleRequest(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return { ok: false, error: "bad_request" };
  }

  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return { ok: false, error: "invalid_json" };
  }

  if (body.honeypot) {
    return { ok: true };
  }

  if (!checkRateLimit("rl_global", RATE_LIMIT_GLOBAL_PER_MINUTE)) {
    return { ok: false, error: "rate_limited" };
  }

  if (body.action === "create_booking") {
    return createBooking(body);
  }

  const ticketId = sanitizeText(body.ticketId, 64);
  if (!ticketId) {
    return { ok: false, error: "missing_ticket_id" };
  }

  if (!checkRateLimit("rl_" + ticketId, RATE_LIMIT_PER_MINUTE)) {
    return { ok: false, error: "rate_limited" };
  }

  switch (body.action) {
    case "create_ticket":
      return createTicket(ticketId, body);
    case "add_message":
      return addMessage(ticketId, body);
    case "heartbeat":
      return heartbeat(ticketId);
    case "close_ticket":
      return closeTicket(ticketId, body);
    default:
      return { ok: false, error: "unknown_action" };
  }
}

function checkRateLimit(key, limit) {
  const cache = CacheService.getScriptCache();
  const count = Number(cache.get(key) || 0);
  if (count >= limit) {
    return false;
  }
  cache.put(key, String(count + 1), 60);
  return true;
}

function sanitizeText(value, maxLength) {
  if (typeof value !== "string") return "";
  const cleaned = value
    .replace(/<[^>]*>/g, "")
    .replace(/[\r\n\t]+/g, " ")
    .trim();
  const safe = /^[=+\-@]/.test(cleaned) ? "'" + cleaned : cleaned;
  return safe.slice(0, maxLength);
}

function notifyTeam(subject, body) {
  const to = PropertiesService.getScriptProperties().getProperty("NOTIFY_EMAIL");
  if (!to) return;
  try {
    MailApp.sendEmail(to, subject, body);
  } catch (err) {}
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getSheet(name, headers) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function ticketsSheet() {
  return getSheet(TICKETS_SHEET_NAME, [
    "ticketId",
    "name",
    "email",
    "phone",
    "status",
    "createdAt",
    "lastActivityAt",
    "closedAt",
  ]);
}

function messagesSheet() {
  return getSheet(MESSAGES_SHEET_NAME, ["ticketId", "sender", "text", "timestamp"]);
}

function bookingsSheet() {
  return getSheet(BOOKINGS_SHEET_NAME, [
    "bookingId",
    "createdAt",
    "status",
    "name",
    "email",
    "phone",
    "business",
    "service",
    "budget",
    "start",
    "description",
  ]);
}

function createBooking(body) {
  const bookingId = sanitizeText(body.bookingId, 20);
  const name = sanitizeText(body.name, MAX_NAME_LENGTH);
  const email = sanitizeText(body.email, MAX_EMAIL_LENGTH);
  const phone = sanitizeText(body.phone, MAX_PHONE_LENGTH);
  const business = sanitizeText(body.business, MAX_NAME_LENGTH);
  const service = sanitizeText(body.service, MAX_NAME_LENGTH);
  const budget = sanitizeText(body.budget, MAX_NAME_LENGTH);
  const start = sanitizeText(body.start, MAX_NAME_LENGTH);
  const description = sanitizeText(body.description, MAX_BOOKING_DESCRIPTION_LENGTH);

  if (
    !/^BK-[A-Z0-9]{6}$/.test(bookingId) ||
    !name ||
    !isValidEmail(email) ||
    !/^[0-9]{10,15}$/.test(phone) ||
    !service ||
    !budget ||
    !start ||
    description.length < MIN_BOOKING_DESCRIPTION
  ) {
    return { ok: false, error: "invalid_payload" };
  }

  if (!checkRateLimit("rl_booking", RATE_LIMIT_BOOKING_PER_MINUTE)) {
    return { ok: false, error: "rate_limited" };
  }

  const sheet = bookingsSheet();
  if (findTicketRow(sheet, bookingId) !== -1) {
    return { ok: true };
  }

  sheet.appendRow([
    bookingId,
    new Date(),
    "menunggu_dp",
    name,
    email,
    phone,
    business,
    service,
    budget,
    start,
    description,
  ]);

  notifyTeam(
    "Booking baru " + bookingId + " - " + service,
    [
      "Kode: " + bookingId,
      "Nama: " + name,
      "Usaha: " + business,
      "Email: " + email,
      "WhatsApp: " + phone,
      "Layanan: " + service,
      "Anggaran: " + budget,
      "Target mulai: " + start,
      "Kebutuhan: " + description,
      "",
      "Status: menunggu DP",
    ].join("\n"),
  );
  return { ok: true };
}

function findTicketRow(sheet, ticketId) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === ticketId) {
      return i + 1;
    }
  }
  return -1;
}

function createTicket(ticketId, body) {
  const name = sanitizeText(body.name, MAX_NAME_LENGTH);
  const email = sanitizeText(body.email, MAX_EMAIL_LENGTH);
  const phone = sanitizeText(body.phone, MAX_PHONE_LENGTH);

  if (!name || !email || !phone || !isValidEmail(email)) {
    return { ok: false, error: "invalid_payload" };
  }

  const sheet = ticketsSheet();
  if (findTicketRow(sheet, ticketId) !== -1) {
    return { ok: true };
  }

  const now = new Date();
  sheet.appendRow([ticketId, name, email, phone, "open", now, now, ""]);
  notifyTeam(
    "Tiket chat baru " + ticketId,
    ["Tiket: " + ticketId, "Nama: " + name, "Email: " + email, "Telepon: " + phone].join("\n"),
  );
  return { ok: true };
}

function addMessage(ticketId, body) {
  const sender = sanitizeText(body.sender, 20);
  const text = sanitizeText(body.text, MAX_TEXT_LENGTH);
  if (!text || (sender !== "visitor" && sender !== "bot")) {
    return { ok: false, error: "invalid_payload" };
  }

  messagesSheet().appendRow([ticketId, sender, text, new Date()]);
  touchTicket(ticketId);
  return { ok: true };
}

function heartbeat(ticketId) {
  touchTicket(ticketId);
  return { ok: true };
}

function closeTicket(ticketId, body) {
  const reason = sanitizeText(body.reason, MAX_REASON_LENGTH) || "unspecified";
  const sheet = ticketsSheet();
  const row = findTicketRow(sheet, ticketId);
  if (row === -1) {
    return { ok: false, error: "not_found" };
  }

  const now = new Date();
  sheet.getRange(row, 5).setValue("closed:" + reason);
  sheet.getRange(row, 7).setValue(now);
  sheet.getRange(row, 8).setValue(now);
  return { ok: true };
}

function touchTicket(ticketId) {
  const sheet = ticketsSheet();
  const row = findTicketRow(sheet, ticketId);
  if (row === -1) return;
  sheet.getRange(row, 7).setValue(new Date());
}
