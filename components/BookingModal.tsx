"use client";

import { useState, useEffect } from "react";
// Note: useEffect still needed for body scroll lock
import { motion, AnimatePresence } from "framer-motion";
import { TourPackage } from "@/data/packages";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: TourPackage | null;
}

interface BookingForm {
  name: string;
  whatsapp: string;
  date: string;
  participants: string;
  packageName: string;
  notes: string;
}

const packageOptions = [
  "Paket Lava Tour Sunrise",
  "Paket Lava Tour Short",
  "Paket Lava Tour Medium",
  "Paket Lava Tour Long",
];

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
}: BookingModalProps) {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    whatsapp: "",
    date: "",
    participants: "2",
    packageName: selectedPackage?.name ?? "",
    notes: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Halo, saya ingin memesan Jeep Lava Tour Merapi. 🚙\n\n` +
        `*Nama:* ${form.name}\n` +
        `*No. WhatsApp:* ${form.whatsapp}\n` +
        `*Paket:* ${form.packageName}\n` +
        `*Tanggal Tour:* ${form.date}\n` +
        `*Jumlah Peserta:* ${form.participants} orang\n` +
        `*Catatan:* ${form.notes || "-"}\n\n` +
        `Mohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/6282323337760?text=${message}`, "_blank");
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="booking-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="booking-modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header gradient */}
              <div className="bg-linear-to-br from-stone-900 via-stone-800 to-secondary px-6 pt-6 pb-7">
                <button
                  onClick={onClose}
                  aria-label="Tutup modal"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                    🚙
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      Pesan Jeep Lava Tour
                    </h3>
                    <p className="text-stone-400 text-sm mt-0.5">
                      Isi form → konfirmasi via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="booking-wa"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    No. WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="booking-wa"
                    name="whatsapp"
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>

                {/* Package */}
                <div>
                  <label
                    htmlFor="booking-package"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Paket Tour <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="booking-package"
                    name="packageName"
                    required
                    value={form.packageName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">-- Pilih Paket Tour --</option>
                    {packageOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Participants */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Tanggal Tour <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="booking-date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      min={today}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-participants"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Jumlah Peserta
                    </label>
                    <select
                      id="booking-participants"
                      name="participants"
                      value={form.participants}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} orang
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Catatan{" "}
                    <span className="text-stone-400 font-normal">
                      (opsional)
                    </span>
                  </label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Permintaan khusus, titik penjemputan, dll."
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Info notice */}
                <div className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <svg
                    className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Setelah klik tombol di bawah, Anda akan diarahkan ke
                    WhatsApp untuk konfirmasi ketersediaan dan pembayaran DP
                    bersama admin kami.
                  </p>
                </div>

                {/* Submit */}
                <button
                  id="booking-submit"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-green-500 px-6 py-4 text-sm font-semibold text-white hover:bg-green-600 active:scale-[0.98] transition-all shadow-lg shadow-green-500/25"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konfirmasi via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
