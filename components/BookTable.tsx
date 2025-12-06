"use client";

import React, { useState, useEffect } from "react";
import { FaTimes, FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

interface BookTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookTableModal({
  isOpen,
  onClose,
}: BookTableModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmitMessage(
        "🎉 Reservation confirmed! We've sent a confirmation to your email."
      );

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "2",
          date: "",
          time: "",
          specialRequests: "",
        });
        setSubmitMessage("");
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <FaTimes className="text-gray-600 text-xl" />
        </button>

        <div className="bg-linear-to-r from-[#e05d44] to-[#c94d34] text-white p-5 rounded-t-2xl">
          <h2 className="text-3xl font-bold mb-2">Book a Table</h2>
          <p className="text-white/90">
            Reserve your spot at Mako - where great food meets great company
          </p>
        </div>

        <div className="p-8">
          {submitMessage && (
            <div
              className={`mb-6 p-4 rounded-lg border ${
                isSuccess
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-[#e05d44]/10 border-[#e05d44] text-[#e05d44]"
              }`}
            >
              <p className="font-medium">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaUser className="text-[#e05d44]" />
                Your Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                      placeholder="+234 123 456 7890"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-[#e05d44]" />
                Reservation Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[#e05d44] focus:ring-2 focus:ring-[#e05d44]/20 transition-all resize-none"
                    placeholder="Dietary restrictions, special occasions, seating preferences..."
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full bg-[#e05d44] hover:bg-[#c94d34] duration-300 py-4 rounded-lg text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting
                ? "Confirming Reservation..."
                : isSuccess
                ? "✓ Confirmed!"
                : "Confirm Reservation"}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By booking, you agree to our cancellation policy: 2 hours notice
              for changes
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
