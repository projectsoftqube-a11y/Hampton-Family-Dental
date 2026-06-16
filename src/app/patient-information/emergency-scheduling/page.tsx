"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, ShieldAlert, Calendar, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { practiceInfo } from "@/lib/navigation";

export default function EmergencySchedulingPage() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Emergency Scheduling" },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    symptom: "",
    message: "",
  });

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", symptom: "", message: "" });
    }, 4000);
  };

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-red-950 text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-800/20 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-3xl mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-red-400" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Immediate Support
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
              Emergency Scheduling
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              In pain or had a dental accident? Call our office immediately. We prioritize dental emergencies and offer same-day appointments during business hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Urgent Action Panel ─── */}
      <section className="py-20 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Immediate Call & Emergency Guide */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="bg-red-50 border border-red-200/50 p-8 rounded-3xl space-y-6 shadow-sm">
                <ShieldAlert className="w-10 h-10 text-red-600" />
                <h3 className="font-heading text-navy text-2xl font-bold">Call Us First</h3>
                <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                  For active bleeding, severe swelling, or broken teeth, immediate care is essential. Do not wait — call our direct office number right now.
                </p>
                <a
                  href={practiceInfo.phoneTel}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-widest uppercase shadow-md transition-all duration-300 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-white" />
                  Call (215) 357-2224
                </a>
              </div>

              {/* Quick Guide Card */}
              <div className="bg-white border border-navy/5 p-6 rounded-3xl shadow-md space-y-4">
                <h4 className="font-heading text-navy font-bold text-base">What to Do:</h4>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 font-bold text-red-700">1</span>
                    <span className="text-navy/70 leading-relaxed">
                      **Knocked-Out Tooth:** Keep the tooth moist in saliva or milk. Reach our clinic within 1 hour.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 font-bold text-red-700">2</span>
                    <span className="text-navy/70 leading-relaxed">
                      **Abscess or Swelling:** Rinse with warm salt water. Call us immediately for diagnostic x-rays and antibiotics.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 font-bold text-red-700">3</span>
                    <span className="text-navy/70 leading-relaxed">
                      **Severe Toothache:** Take over-the-counter anti-inflammatories. Do not place aspirin directly on the gums.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Same-Day Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-navy/5 p-6 md:p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleEmergencySubmit}
                      className="space-y-4"
                    >
                      <h4 className="font-heading text-navy text-lg font-bold flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-red-600" />
                        Request Same-Day Emergency Slot
                      </h4>
                      <p className="text-navy/55 text-xs">
                        Fill out this request if you need immediate care. We monitor entries constantly during office hours.
                      </p>

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

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Primary Emergency Symptom</label>
                        <select
                          required
                          value={formData.symptom}
                          onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
                          className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select Primary Symptom</option>
                          <option value="severe-pain">Severe/Throbbing Tooth Pain</option>
                          <option value="swelling">Facial or Gum Swelling</option>
                          <option value="broken-tooth">Broken, Chipped or Cracked Tooth</option>
                          <option value="knocked-out">Knocked-Out or Loose Tooth</option>
                          <option value="broken-crown">Lost Crown or Filling</option>
                          <option value="other">Other Dental Emergency</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Detail of Issue (Optional)</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-beige-light/20 border border-navy/10 rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-primary transition-colors resize-none"
                          placeholder="Brief description of the pain or injury..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-widest uppercase shadow-md transition-all duration-300"
                      >
                        Request Emergency Slot
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
                      <div className="w-16 h-16 rounded-full bg-red-100 border border-red-500 flex items-center justify-center animate-pulse">
                        <CheckCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <h4 className="font-heading text-navy text-xl font-bold">Request Received</h4>
                      <p className="text-navy/60 text-xs max-w-sm leading-relaxed">
                        We have received your emergency request, **{formData.name}**. Our care coordinators will call you on **{formData.phone}** immediately to arrange your same-day slot.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
