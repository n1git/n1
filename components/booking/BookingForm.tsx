"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  booking,
  budgetOptions,
  contact,
  services,
  startOptions,
} from "@/app/content";
import {
  formatRupiah,
  generateBookingId,
  normalizePhone,
  sendBooking,
  type BookingPayload,
} from "@/lib/booking/booking";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_DESCRIPTION = 30;
const WHATSAPP_URL = `https://wa.me/${contact.whatsapp}`;

function buildWhatsAppUrl(data: BookingPayload): string {
  const lines = [
    "Halo N⁻¹ Labs, saya sudah booking.",
    `Kode: ${data.bookingId}`,
    `Nama: ${data.name}`,
    `Layanan: ${data.service}`,
    `Anggaran: ${data.budget}`,
    `Target mulai: ${data.start}`,
    `Kebutuhan: ${data.description}`,
    "",
    "Bukti transfer DP saya lampirkan di chat ini.",
  ];
  return `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [start, setStart] = useState("");
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState<BookingPayload | null>(null);

  const { dpAmount, bank } = booking;

  if (!dpAmount || !bank) {
    return (
      <div className="panel booking-notice">
        <p>
          Pendaftaran booking online segera dibuka. Sementara itu, hubungi kami lewat WhatsApp untuk
          konsultasi kebutuhan Anda.
        </p>
        <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Hubungi via WhatsApp
        </a>
      </div>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: BookingPayload = {
      bookingId: generateBookingId(),
      name: name.trim(),
      email: email.trim(),
      phone: normalizePhone(phone),
      business: business.trim(),
      service,
      budget,
      start,
      description: description.trim(),
    };

    if (!data.name || !data.email || !data.phone || !data.service || !data.budget || !data.start) {
      setError("Lengkapi semua kolom yang bertanda wajib.");
      return;
    }
    if (!EMAIL_PATTERN.test(data.email)) {
      setError("Format email tidak valid.");
      return;
    }
    if (data.phone.length < 10 || data.phone.length > 15) {
      setError("Nomor WhatsApp tidak valid.");
      return;
    }
    if (data.description.length < MIN_DESCRIPTION) {
      setError(`Ceritakan kebutuhan Anda minimal ${MIN_DESCRIPTION} karakter.`);
      return;
    }
    if (!agreed) {
      setError("Centang persetujuan DP untuk melanjutkan.");
      return;
    }

    setError("");
    sendBooking(data, honeypot);
    setSubmitted(data);
  }

  if (submitted) {
    return (
      <div className="panel booking-done" role="status">
        <h2>Booking diterima</h2>
        <p className="booking-code">{submitted.bookingId}</p>
        <p>
          Booking baru berlaku setelah DP kami terima dan verifikasi. Selesaikan dua langkah berikut:
        </p>
        <ol>
          <li>
            Transfer DP <b>{formatRupiah(dpAmount)}</b> ke:
            <dl className="booking-bank">
              <dt>Bank</dt>
              <dd>{bank.name}</dd>
              <dt>No. rekening</dt>
              <dd>{bank.number}</dd>
              <dt>Atas nama</dt>
              <dd>{bank.holder}</dd>
            </dl>
          </li>
          <li>
            Kirim bukti transfer beserta kode <b>{submitted.bookingId}</b> lewat WhatsApp.
          </li>
        </ol>
        <a
          className="btn btn-primary"
          href={buildWhatsAppUrl(submitted)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kirim Bukti via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="booking-row">
        <label className="booking-field">
          Nama *
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            maxLength={100}
          />
        </label>
        <label className="booking-field">
          Nama usaha
          <input
            type="text"
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            autoComplete="organization"
            maxLength={100}
          />
        </label>
      </div>

      <div className="booking-row">
        <label className="booking-field">
          Email *
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength={200}
          />
        </label>
        <label className="booking-field">
          Nomor WhatsApp *
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
          />
        </label>
      </div>

      <label className="booking-field">
        Layanan *
        <select value={service} onChange={(event) => setService(event.target.value)}>
          <option value="">Pilih layanan</option>
          {services.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <div className="booking-row">
        <label className="booking-field">
          Perkiraan anggaran *
          <select value={budget} onChange={(event) => setBudget(event.target.value)}>
            <option value="">Pilih anggaran</option>
            {budgetOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="booking-field">
          Target mulai *
          <select value={start} onChange={(event) => setStart(event.target.value)}>
            <option value="">Pilih target</option>
            {startOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="booking-field">
        Kebutuhan Anda *
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={1000}
          rows={5}
        />
        <span className="booking-hint">
          Minimal {MIN_DESCRIPTION} karakter. Ceritakan proses bisnis yang ingin dibantu sistem.
        </span>
      </label>

      <input
        className="booking-honeypot"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />

      <label className="booking-check">
        <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
        <span>
          Saya memahami harga mulai {formatRupiah(booking.minPrice)} dan booking baru berlaku setelah
          DP {formatRupiah(dpAmount)} diterima.
        </span>
      </label>

      <p className="booking-hint">
        Data dipakai hanya untuk menindaklanjuti booking ini. <Link href="/privacy">Kebijakan privasi</Link>
      </p>

      {error && (
        <p className="booking-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary booking-submit">
        Kirim Booking
      </button>
    </form>
  );
}
