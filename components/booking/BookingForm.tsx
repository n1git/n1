"use client";

import { useState, type FormEvent } from "react";
import { withBasePath } from "@/app/base-path";
import {
  contact,
  scaleOptions,
  services,
  startOptions,
} from "@/app/content";
import {
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
    "Halo N⁻¹ Labs, saya sudah mengisi booking.",
    `Kode: ${data.bookingId}`,
    `Nama: ${data.name}`,
    `Layanan: ${data.service}`,
    `Skala: ${data.scale}`,
    `Target mulai: ${data.start}`,
    `Kebutuhan: ${data.description}`,
    "",
    "Saya ingin konsultasi awal.",
  ];
  return `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
}

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "scale" | "start" | "description" | "agreed", string>>;

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [scale, setScale] = useState("");
  const [start, setStart] = useState("");
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<BookingPayload | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: BookingPayload = {
      bookingId: generateBookingId(),
      name: name.trim(),
      email: email.trim(),
      phone: normalizePhone(phone),
      business: business.trim(),
      service,
      scale,
      start,
      description: description.trim(),
    };

    const next: Errors = {};
    if (!data.name) next.name = "Tulis nama Anda.";
    if (!data.email) next.email = "Tulis alamat email Anda.";
    else if (!EMAIL_PATTERN.test(data.email)) next.email = "Tulis email dengan format nama@domain.com.";
    if (!data.phone) next.phone = "Tulis nomor WhatsApp Anda.";
    else if (data.phone.length < 10 || data.phone.length > 15) next.phone = "Nomor WhatsApp harus 10 sampai 15 angka.";
    if (!data.service) next.service = "Pilih layanan yang Anda butuhkan.";
    if (!data.scale) next.scale = "Pilih skala proyek.";
    if (!data.start) next.start = "Pilih target mulai.";
    if (data.description.length < MIN_DESCRIPTION) {
      next.description = `Ceritakan kebutuhan Anda minimal ${MIN_DESCRIPTION} karakter (sekarang ${data.description.length}).`;
    }
    if (!agreed) next.agreed = "Centang persetujuan untuk melanjutkan.";

    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`bf-${first}`)?.focus();
      return;
    }

    sendBooking(data, honeypot);
    setSubmitted(data);
  }

  const count = Object.keys(errors).length;

  function field(key: keyof Errors) {
    return {
      id: `bf-${key}`,
      "aria-invalid": errors[key] ? (true as const) : undefined,
      "aria-describedby": errors[key] ? `bf-${key}-e` : undefined,
    };
  }

  function error(key: keyof Errors) {
    return errors[key] ? (
      <span className="field__error" id={`bf-${key}-e`}>
        {errors[key]}
      </span>
    ) : null;
  }

  if (submitted) {
    return (
      <div className="book-done" role="status">
        <h2>Booking diterima</h2>
        <p className="book-code">{submitted.bookingId}</p>
        <p>Belum ada pembayaran yang perlu Anda lakukan sekarang. Langkah berikutnya:</p>
        <ol>
          <li>Kami menghubungi Anda lewat WhatsApp dalam satu hari kerja untuk konsultasi awal gratis.</li>
          <li>Anda menerima penawaran tertulis dengan harga tetap per tahap.</li>
          <li>
            DP dibayar setelah Anda menyetujui penawaran, dan dikembalikan penuh jika hasil tahap awal
            tidak Anda terima.
          </li>
        </ol>
        <a className="btn btn--primary" href={buildWhatsAppUrl(submitted)} target="_blank" rel="noopener noreferrer">
          Chat via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label className="field">
        <span className="l">Nama *</span>
        <input {...field("name")} type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={100} />
        {error("name")}
      </label>
      <label className="field">
        <span className="l">Nama usaha</span>
        <input id="bf-business" type="text" value={business} onChange={(e) => setBusiness(e.target.value)} autoComplete="organization" maxLength={100} />
      </label>
      <label className="field">
        <span className="l">Email *</span>
        <input {...field("email")} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={200} />
        {error("email")}
      </label>
      <label className="field">
        <span className="l">Nomor WhatsApp *</span>
        <input {...field("phone")} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" maxLength={30} />
        {error("phone")}
      </label>
      <label className="field full">
        <span className="l">Layanan *</span>
        <select {...field("service")} value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Pilih layanan</option>
          {services.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {error("service")}
      </label>
      <label className="field">
        <span className="l">Skala proyek *</span>
        <select {...field("scale")} value={scale} onChange={(e) => setScale(e.target.value)}>
          <option value="">Pilih skala</option>
          {scaleOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {error("scale")}
      </label>
      <label className="field">
        <span className="l">Target mulai *</span>
        <select {...field("start")} value={start} onChange={(e) => setStart(e.target.value)}>
          <option value="">Pilih target</option>
          {startOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {error("start")}
      </label>
      <label className="field full">
        <span className="l">Kebutuhan Anda *</span>
        <textarea {...field("description")} value={description} onChange={(e) => setDescription(e.target.value)} maxLength={1000} rows={5} />
        <span className="field__hint">Minimal {MIN_DESCRIPTION} karakter. Ceritakan proses bisnis yang ingin dibantu sistem.</span>
        {error("description")}
      </label>

      <input className="booking-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

      <div className="full">
        <label className="check">
          <input {...field("agreed")} type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          <span>
            Saya memahami DP dibayar setelah saya menyetujui penawaran tertulis, dan dikembalikan penuh jika
            hasil tahap awal tidak saya terima.
          </span>
        </label>
        {error("agreed")}
      </div>

      <p className="field__hint full">
        Data dipakai hanya untuk menindaklanjuti booking ini. <a href={withBasePath("/privacy")}>Kebijakan privasi</a>
      </p>

      <div className="full">
        <button type="submit" className="btn btn--primary booking-submit">
          Kirim booking
        </button>
        <p className="field__hint" role="status" style={{ marginTop: "var(--s-3)" }}>
          {count ? `${count} isian perlu diperbaiki sebelum booking dikirim.` : ""}
        </p>
      </div>
    </form>
  );
}
