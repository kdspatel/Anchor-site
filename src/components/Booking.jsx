"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const countryCodes = ["+91", "+1", "+44", "+61"];

export default function Booking({ eventType }) {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    code: "+91",
    event: eventType || "",
    date: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1 && !form.name) newErrors.name = "Please enter your name";

    if (step === 2) {
      if (!form.email) newErrors.email = "Email required";
      if (!form.phone) newErrors.phone = "Phone required";
    }

    if (step === 3) {
      if (!form.event) newErrors.event = "Event required";
      if (!form.date) newErrors.date = "Date required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/kspatel6709@gmail.com",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setStep(1);
          setForm(initialState);
        }, 3000);
      }
    } catch {}

    setLoading(false);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black"
      id="booking"
    >
      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden will-change-transform">

        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#070707] to-black" />

        {/* slow moving glow layers (OPTIMIZED) */}
        <motion.div
          className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[120px] rounded-full -top-40 -left-40 will-change-transform transform-gpu"
          animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 28, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] bg-orange-400/10 blur-[100px] rounded-full bottom-[-200px] right-[-200px] will-change-transform transform-gpu"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
        />

        {/* top light sweep (OPTIMIZED) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent will-change-transform transform-gpu"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      {/* TITLE */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-white text-center mb-4">
        Book <span className="text-yellow-400">Now !</span>
      </h1>

      <p className="relative z-10 text-gray-400 text-center mb-10">
        Available for events worldwide 🌍
      </p>

      <div className="relative z-10 w-full max-w-md">

        {/* Progress */}
        <div className="flex mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-[3px] flex-1 mx-1 rounded-full ${
                step >= s ? "bg-yellow-400" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl">

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
              >

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <h2 className="title">Your Name</h2>
                    <input name="name" value={form.name} onChange={handleChange} className="input" />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <h2 className="title">Contact Info</h2>

                    <input name="email" value={form.email} onChange={handleChange} className="input mb-3" />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <div className="flex gap-2">
                      <div className="relative w-[30%]" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setOpen(!open)}
                          className="input flex justify-between"
                        >
                          {form.code}
                          <span className="text-xs opacity-60">▾</span>
                        </button>

                        {open && (
                          <div className="absolute mt-1 w-full bg-black border border-white/10 rounded-lg">
                            {countryCodes.map((c) => (
                              <div
                                key={c}
                                onClick={() => {
                                  setForm({ ...form, code: c });
                                  setOpen(false);
                                }}
                                className="px-3 py-2 hover:bg-white/10 cursor-pointer"
                              >
                                {c}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input name="phone" value={form.phone} onChange={handleChange} className="input w-[70%]" />
                    </div>

                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <h2 className="title">Event Details</h2>

                    <input name="event" value={form.event} onChange={handleChange} className="input mb-3" />
                    {errors.event && <p className="error">{errors.event}</p>}

                    <input type="date" name="date" value={form.date} onChange={handleChange} className="input" />
                    {errors.date && <p className="error">{errors.date}</p>}
                  </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>{form.name}</p>
                    <p>{form.email}</p>
                    <p>{form.code} {form.phone}</p>
                    <p>{form.event}</p>
                    <p>{form.date}</p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                  {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}

                  {step < 4 ? (
                    <button
                      onClick={() => {
                        if (!validateStep()) return;
                        setStep(step + 1);
                      }}
                      className="btn ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="btn ml-auto">
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  )}
                </div>

              </motion.div>
            ) : (
              <div className="text-center">
                <div className="text-5xl">✨</div>
                <p className="text-white">Request Sent!</p>
                <p className="text-gray-400 text-sm">I will contact you shortly.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
        }

        .btn {
          background: #facc15;
          color: black;
          padding: 8px 16px;
          border-radius: 10px;
        }

        .title {
          color: white;
          margin-bottom: 12px;
        }

        .error {
          color: #f87171;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
}