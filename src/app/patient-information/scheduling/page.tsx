"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Heart, ShieldCheck, DollarSign, Clock, MapPin, FileText, ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function SchedulingPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Scheduling" },
  ];

  const [bookingPath, setBookingPath] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    insurance: "",
    specialClaimed: "",
    preferredTime: "",
    message: "",
  });

  const selectPath = (path: string) => {
    setBookingPath(path);
    setSubmitted(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBookingPath(null);
      setFormData({ name: "", phone: "", email: "", insurance: "", specialClaimed: "", preferredTime: "", message: "" });
    }, 4000);
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
                  Book an Appointment
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Scheduling & Appointments
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Choose your booking path below to schedule your cleaning, exam, or consultation with our Southampton team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── main Scheduling Panel ─── */}
      <section className="py-20 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Booking Path selector */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Path Buttons */}
              <div className="space-y-4">
                <h2 className="font-heading text-navy text-2xl font-bold">Please Select Your Profile:</h2>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => selectPath("existing")}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      bookingPath === "existing"
                        ? "bg-navy-dark text-white border-navy-dark shadow-lg"
                        : "bg-white text-navy border-navy/10 shadow-sm hover:border-primary"
                    }`}
                  >
                    <Heart className={`w-6 h-6 mb-4 ${bookingPath === "existing" ? "text-primary-light" : "text-primary"}`} />
                    <div>
                      <h4 className="font-heading font-bold text-sm">Existing Patient</h4>
                      <p className={`text-[10px] mt-1 ${bookingPath === "existing" ? "text-white/60" : "text-navy/55"}`}>Routine cleaning, checkups or restoration tune-up</p>
                    </div>
                  </button>

                  <button
                    onClick={() => selectPath("ppo")}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      bookingPath === "ppo"
                        ? "bg-navy-dark text-white border-navy-dark shadow-lg"
                        : "bg-white text-navy border-navy/10 shadow-sm hover:border-primary"
                    }`}
                  >
                    <ShieldCheck className={`w-6 h-6 mb-4 ${bookingPath === "ppo" ? "text-primary-light" : "text-primary"}`} />
                    <div>
                      <h4 className="font-heading font-bold text-sm">New Patient (PPO)</h4>
                      <p className={`text-[10px] mt-1 ${bookingPath === "ppo" ? "text-white/60" : "text-navy/55"}`}>First cleaning & exam covered under dental PPO</p>
                    </div>
                  </button>

                  <button
                    onClick={() => selectPath("no-insurance")}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                      bookingPath === "no-insurance"
                        ? "bg-navy-dark text-white border-navy-dark shadow-lg"
                        : "bg-white text-navy border-navy/10 shadow-sm hover:border-primary"
                    }`}
                  >
                    <DollarSign className={`w-6 h-6 mb-4 ${bookingPath === "no-insurance" ? "text-primary-light" : "text-primary"}`} />
                    <div>
                      <h4 className="font-heading font-bold text-sm">New Patient (Self-Pay)</h4>
                      <p className={`text-[10px] mt-1 ${bookingPath === "no-insurance" ? "text-white/60" : "text-navy/55"}`}>Uninsured, seeking specials or wellness membership</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Path Forms */}
              <div className="bg-white border border-navy/5 p-6 md:p-8 rounded-3xl shadow-lg min-h-[300px] flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  {!bookingPath ? (
                    <motion.div
                      key="select"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center p-8 space-y-4"
                    >
                      <Calendar className="w-12 h-12 text-primary/45 mx-auto" />
                      <h3 className="font-heading text-navy text-xl font-bold">Select a profile to start</h3>
                      <p className="text-navy/55 text-xs max-w-sm mx-auto leading-relaxed">
                        To help us prepare your check-in, select whether you are an existing patient, a new PPO patient, or a self-pay patient.
                      </p>
                    </motion.div>
                  ) : !submitted ? (
                    <motion.form
                      key={bookingPath}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-4"
                    >
                      <h3 className="font-heading text-navy text-lg font-bold">
                        {bookingPath === "existing" && "Existing Patient Booking"}
                        {bookingPath === "ppo" && "New PPO Patient Booking"}
                        {bookingPath === "no-insurance" && "Uninsured Patient Booking"}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                            placeholder="(215) 555-1234"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Preferred Scheduling Window</label>
                          <select
                            required
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="">Select Preferred Time</option>
                            <option value="morning">Morning (8am – 12pm)</option>
                            <option value="afternoon">Afternoon (12pm – 4pm)</option>
                            <option value="late-afternoon">Late Afternoon (4pm – 6pm)</option>
                          </select>
                        </div>
                      </div>

                      {bookingPath === "ppo" && (
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Dental PPO Insurance Carrier</label>
                          <input
                            type="text"
                            required
                            value={formData.insurance}
                            onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                            placeholder="Delta Dental, Aetna, Cigna, MetLife, etc."
                          />
                        </div>
                      )}

                      {bookingPath === "no-insurance" && (
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Offer Claimed / Membership Program</label>
                          <select
                            required
                            value={formData.specialClaimed}
                            onChange={(e) => setFormData({ ...formData, specialClaimed: e.target.value })}
                            className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="">Choose Special / Option</option>
                            <option value="welcome-special">$149 Welcome Cleaning, Exam & X-Rays Special</option>
                            <option value="free-exam">Free Complimentary First Exam & Consultation Special</option>
                            <option value="wellness-membership">Enroll in In-House Dental Wellness Plan</option>
                            <option value="other">General Self-Pay Checkup</option>
                          </select>
                        </div>
                      )}

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Brief Symptoms or Notes (Optional)</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors resize-none"
                          placeholder="Tell us what your smile needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary shadow-md transition-all duration-300"
                      >
                        Submit Appointment Request
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
                      <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary flex items-center justify-center animate-pulse">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-heading text-navy text-xl font-bold">Request Received!</h4>
                      <p className="text-navy/60 text-xs max-w-sm leading-relaxed">
                        Thank you, **{formData.name}**. Our Southampton care coordinators will call you within a few business hours to verify your insurance or claimed special and finalize your appointment time.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Right Column: Secure Intake Forms, Hours, Location Map */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Secure Intake Forms Card */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="font-heading text-navy text-lg font-bold">Secure HIPAA Onboarding</h3>
                <p className="text-navy/60 text-xs leading-relaxed">
                  Save 15 minutes in our lounge! Fill out your medical history and patient registry online securely before you arrive.
                </p>
                <button
                  onClick={() => alert("Digital forms link clicked - in production this opens a secure patient portal.")}
                  className="w-full text-center py-3 rounded-full bg-navy text-white text-xs font-semibold tracking-wider uppercase hover:bg-primary transition-colors shadow-sm"
                >
                  Fill Out Digital Intake Forms
                </button>
              </div>

              {/* Hours / Map Card */}
              <div className="bg-navy-dark text-white p-6 rounded-3xl shadow-lg space-y-4">
                <div className="space-y-3">
                  <h4 className="font-heading text-lg font-bold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-light" />
                    Office Hours
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Mon: 8:00 AM – 6:00 PM
                    <br />
                    Tue/Thu: 8:00 AM – 4:00 PM
                    <br />
                    Wed: 9:00 AM – 1:00 PM
                    <br />
                    <span className="text-white/40 font-semibold">Fri–Sun Closed</span>
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="font-heading text-lg font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-light" />
                    Our Address
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed">
                    283 Second Street Pike, Suite 140
                    <br />
                    Southampton, PA 18966
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=283+Second+Street+Pike,+Suite+140,+Southampton,+PA+18966"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-primary-light hover:text-white uppercase tracking-wider"
                  >
                    Open in Google Maps
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
