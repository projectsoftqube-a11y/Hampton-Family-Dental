"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  FileText, 
  ArrowRight, 
  CheckCircle,
  Phone,
  AlertTriangle,
  Mail
} from "lucide-react";
import { practiceInfo } from "@/lib/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSelect,
  isValid,
} from "@/lib/validation";
import { sendEnquiry } from "@/lib/sendEnquiry";

export default function SchedulingClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Scheduling" },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
    notes: "",
    visitTypes: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => ({
    name: validateName(formData.name),
    phone: validatePhone(formData.phone),
    email: validateEmail(formData.email),
    preferredTime: validateSelect(formData.preferredTime, "a scheduling window"),
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
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
      phone: formData.phone,
      email: formData.email,
      preferredTime: formData.preferredTime,
      visitTypes: formData.visitTypes,
      notes: formData.notes,
    });
    setSending(false);
    if (err) {
      setSubmitError(err);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", preferredTime: "", notes: "", visitTypes: [] });
    }, 5000);
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-3xl mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Schedule Now
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Schedule Your Appointment
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Take the first step toward a healthy, beautiful smile. Submit an online request or call our Southampton staff directly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── main Scheduling Panel ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form & Intro Copy */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="bg-white border border-navy/5 p-6 md:p-10 rounded-3xl shadow-lg space-y-6">
                <div className="space-y-4">
                  <h2 className="font-heading text-navy text-2xl font-bold">Request an Appointment Online</h2>
                  <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                    Booking your visit is simple. Call us at <a href={practiceInfo.phoneTel} className="text-primary hover:underline font-semibold">{practiceInfo.phone}</a> or submit the form below and our team will call you back to confirm a time that works for you. 
                  </p>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                    Whether you need a routine checkup or want to <strong className="text-navy">book dentist appointment southampton</strong> for advanced restorative care, we make the process stress-free. Our care coordinators will reach out shortly to match you with a clinical slot.
                  </p>
                </div>

                <hr className="border-navy/5" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleBookingSubmit}
                      noValidate
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Full Name</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full bg-beige-light/10 border rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:bg-white transition-all duration-300 ${
                              errors.name ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                            }`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full bg-beige-light/10 border rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:bg-white transition-all duration-300 ${
                              errors.phone ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                            }`}
                            placeholder="(215) 357-2224"
                          />
                          {errors.phone && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Email Address</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full bg-beige-light/10 border rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:bg-white transition-all duration-300 ${
                              errors.email ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                            }`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Preferred Scheduling Window</label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className={`w-full bg-beige-light/10 border rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:bg-white transition-all duration-300 ${
                              errors.preferredTime ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                            }`}
                          >
                            <option value="">Select Preferred Time</option>
                            <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                            <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                            <option value="late-afternoon">Late Afternoon (4:00 PM – 6:00 PM)</option>
                          </select>
                          {errors.preferredTime && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.preferredTime}</p>}
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Reason for Visit (Select all that apply)</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {["New Patient Exam", "Routine Cleaning", "Emergency Exam", "Consultation"].map((type) => (
                            <label key={type} className="flex items-center gap-2 text-xs text-navy/80 cursor-pointer group">
                              <div className="relative flex items-center justify-center w-4 h-4 rounded border border-navy/20 bg-beige-light/10 group-hover:border-primary transition-colors">
                                <input
                                  type="checkbox"
                                  className="absolute opacity-0 cursor-pointer h-0 w-0"
                                  checked={formData.visitTypes.includes(type)}
                                  onChange={(e) => {
                                    const newTypes = e.target.checked
                                      ? [...formData.visitTypes, type]
                                      : formData.visitTypes.filter((t) => t !== type);
                                    setFormData({ ...formData, visitTypes: newTypes });
                                  }}
                                />
                                {formData.visitTypes.includes(type) && (
                                  <CheckCircle className="w-3 h-3 text-primary" />
                                )}
                              </div>
                              {type}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Brief Symptoms or Notes (Optional)</label>
                        <textarea
                          rows={4}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-beige-light/10 border border-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                          placeholder="Please share any preferred dates, treatments you are seeking, or if you have specific questions for our team."
                        />
                      </div>

                      {submitError && (
                        <p className="text-red-600 text-xs font-semibold text-center bg-red-50 border border-red-200 rounded-xl py-2 px-3">
                          {submitError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-4 rounded-full bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-light hover:scale-[1.01] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? "Sending..." : "Submit Appointment Request"}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary flex items-center justify-center animate-pulse">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-heading text-navy text-xl font-bold">Request Successfully Submitted!</h4>
                      <p className="text-navy/70 text-xs md:text-sm max-w-sm leading-relaxed">
                        Thank you, **{formData.name}**. Our care coordinators will review your preferred time window and call you shortly to confirm your scheduled appointment slot.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Emergency Callout Box */}
              <div className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="font-heading text-amber-900 text-xl font-bold">Need a Same-Day Emergency?</h2>
                  <p className="text-amber-800/80 text-xs md:text-sm leading-relaxed">
                    If you are experiencing severe dental pain, swelling, or a broken tooth, do not wait. We block out dedicated emergency time slots every day for patients in distress.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-4">
                    <Link
                      href="/general-dentistry/emergency-dentistry"
                      className="text-xs font-bold text-amber-900 hover:text-amber-700 underline"
                    >
                      Emergency Dentistry Services
                    </Link>
                    <Link
                      href="/patient-information/emergency-scheduling"
                      className="text-xs font-bold text-amber-900 hover:text-amber-700 underline"
                    >
                      Request Emergency Slot
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Secure Intake Forms, Hours, Location Map */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Phone contact */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <Phone className="w-8 h-8 text-primary" />
                <h3 className="font-heading text-navy text-lg font-bold">Call Us Directly</h3>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Have questions about insurance or want to schedule immediately? Speak with our receptionist.
                </p>
                <a
                  href={practiceInfo.phoneTel}
                  className="w-full text-center block py-3 rounded-full bg-navy text-white text-xs font-semibold tracking-wider uppercase hover:bg-primary transition-colors shadow-sm"
                >
                  Call {practiceInfo.phone}
                </a>
              </div>

              {/* Hours / Address Card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl shadow-lg space-y-4">
                <div className="space-y-3">
                  <h4 className="font-heading text-lg font-bold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-light" />
                    Office Hours
                  </h4>
                  <div className="text-white/70 text-xs md:text-sm space-y-1">
                    <p>Mon: 8:00 AM – 6:00 PM</p>
                    <p>Tue/Thu: 8:00 AM – 4:00 PM</p>
                    <p>Wed: 9:00 AM – 1:00 PM</p>
                    <p className="text-white/40 font-semibold">Fri–Sun: Closed</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="font-heading text-lg font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-light" />
                    Our Address
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    Hampton Family Dental
                    <br />
                    283 Second Street Pike, Suite 140
                    <br />
                    Southampton, PA 18966
                  </p>
                  <a
                    href={practiceInfo.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-primary-light hover:text-white uppercase tracking-wider"
                  >
                    Open in Google Maps
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Map block */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-navy/5 shadow-md bg-beige-light/35">
                <iframe
                  title="Hampton Family Dental Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.1979929255866!2d-75.02102148460917!3d40.245781979385315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ae4fc558eb6b%3A0xe67dbf5042456fd0!2s283+Second+Street+Pike+Suite+140%2C+Southampton%2C+PA+18966!5e0!3m2!1sen!2sus!4v1563284000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="border-0 absolute inset-0"
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
