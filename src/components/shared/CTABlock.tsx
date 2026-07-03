"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, Clock, MapPin, Mail, Sparkles, CheckCircle } from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSelect,
  isValid,
} from "@/lib/validation";
import { sendEnquiry } from "@/lib/sendEnquiry";

export default function CTABlock() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeOfDay: "",
    message: "",
    visitTypes: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => ({
    name: validateName(formData.name),
    phone: validatePhone(formData.phone),
    email: validateEmail(formData.email),
    timeOfDay: validateSelect(formData.timeOfDay, "a preferred time"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (!isValid(nextErrors)) return;
    setErrors({});
    setSending(true);
    setSubmitError("");
    const err = await sendEnquiry({
      formType: "Appointment Request",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      timeOfDay: formData.timeOfDay,
      visitTypes: formData.visitTypes,
      message: formData.message,
    });
    setSending(false);
    if (err) {
      setSubmitError(err);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", timeOfDay: "", message: "", visitTypes: [] });
    }, 4000);
  };

  return (
    <section className="py-16 md:py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-[9px] tracking-wider uppercase text-primary-light font-bold">
                  Schedule Today
                </span>
              </div>
              <h3 className="font-heading text-3xl font-bold leading-tight">
                Ready to Experience Southampton&apos;s Best Care?
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Contact our coordinators or submit the form. We will call you back to confirm your scheduling window.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href={practiceInfo.phoneTel}
                className="flex items-center gap-4 group p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-semibold">Call Directly</p>
                  <p className="text-sm font-semibold">{practiceInfo.phone}</p>
                </div>
              </a>

              <a
                href={practiceInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-semibold">Visit Our Office</p>
                  <p className="text-xs text-white/80 leading-tight">
                    {practiceInfo.address.street}, {practiceInfo.address.suite}
                    <br />
                    {practiceInfo.address.city}, {practiceInfo.address.state} {practiceInfo.address.zip}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary-light" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-semibold">Practice Hours</p>
                  <p className="text-xs text-white/80 leading-tight">
                    Mon: 8am–6pm | Wed: 9am–1pm
                    <br />
                    Tue & Thu: 8am–4pm | Fri–Sun Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <h4 className="font-heading text-lg font-bold flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary-light" />
                      Request Appointment
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary-light"
                          }`}
                          placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-400 text-[10px] font-semibold mt-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            errors.phone ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary-light"
                          }`}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-400 text-[10px] font-semibold mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary-light"
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-400 text-[10px] font-semibold mt-1">{errors.email}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">Preferred Time</label>
                        <select
                          value={formData.timeOfDay}
                          onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
                          className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-xs text-white/80 focus:outline-none transition-colors select-dark-arrow ${
                            errors.timeOfDay ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-primary-light"
                          }`}
                        >
                          <option value="" className="bg-navy-dark">Select Preferred Time</option>
                          <option value="morning" className="bg-navy-dark">Morning (8am – 12pm)</option>
                          <option value="afternoon" className="bg-navy-dark">Afternoon (12pm – 4pm)</option>
                          <option value="late-afternoon" className="bg-navy-dark">Late Afternoon (4pm – 6pm)</option>
                        </select>
                        {errors.timeOfDay && <p className="text-red-400 text-[10px] font-semibold mt-1">{errors.timeOfDay}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">I am interested in (select all that apply)</label>
                      <div className="grid grid-cols-1 gap-3 mt-2">
                        {[
                          { label: "New Patient Exam & Cleaning", desc: "(For first-time patients—includes exam, X-rays, and cleaning if applicable)" },
                          { label: "Routine Cleaning & Checkup", desc: "(For existing patients coming in for recall/maintenance)" },
                          { label: "Emergency Visit", desc: "(Pain, swelling, broken tooth, infection, etc.)" },
                          { label: "Treatment Visit", desc: "(Fillings, crowns, root canals, extractions, or scheduled procedures)" },
                          { label: "Consultation / Second Opinion", desc: "(Implants, Veneer, Invisalign)" },
                          { label: "Other / Not Sure", desc: "" }
                        ].map((type) => (
                          <label key={type.label} className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-5 h-5 rounded border border-white/20 bg-white/5 group-hover:border-primary-light transition-colors flex-shrink-0 mt-0.5">
                              <input
                                type="checkbox"
                                className="absolute opacity-0 cursor-pointer h-0 w-0"
                                checked={formData.visitTypes.includes(type.label)}
                                onChange={(e) => {
                                  const newTypes = e.target.checked
                                    ? [...formData.visitTypes, type.label]
                                    : formData.visitTypes.filter((t) => t !== type.label);
                                  setFormData({ ...formData, visitTypes: newTypes });
                                }}
                              />
                              {formData.visitTypes.includes(type.label) && (
                                <CheckCircle className="w-3.5 h-3.5 text-primary-light" />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-white/90 leading-none">{type.label}</span>
                              {type.desc && <span className="text-[11px] text-white/50 mt-1 leading-tight">{type.desc}</span>}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-white/45">Message or Notes</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary-light transition-colors resize-none"
                        placeholder="Any dental symptoms, specials claimed, or detail requests..."
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-xs font-semibold text-center bg-red-500/10 border border-red-500/30 rounded-xl py-2 px-3">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending..." : "Submit Booking Request"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-8 h-8 text-primary-light" />
                    </div>
                    <h4 className="font-heading text-xl font-bold">Request Submitted!</h4>
                    <p className="text-white/70 text-xs max-w-sm leading-relaxed">
                      Thank you, **{formData.name}**. Our care coordinators will review your submission and call you within a few business hours to finalize your appointment time.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
