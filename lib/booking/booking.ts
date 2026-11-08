const ENDPOINT = process.env.NEXT_PUBLIC_SUPPORT_CHAT_ENDPOINT ?? "";
const ID_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export type BookingPayload = {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  scale: string;
  start: string;
  description: string;
};

export function generateBookingId(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return `BK-${Array.from(bytes, (byte) => ID_ALPHABET[byte % ID_ALPHABET.length]).join("")}`;
}

export function formatRupiah(amount: number): string {
  return `Rp${new Intl.NumberFormat("id-ID").format(amount)}`;
}

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

export function sendBooking(payload: BookingPayload, honeypot: string): void {
  if (!ENDPOINT) return;
  try {
    fetch(ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "create_booking", honeypot, ...payload }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}
