"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  ShieldAlert, 
  Calendar, 
  CheckCircle, 
  Clock, 
  MapPin, 
  ArrowRight,
  AlertTriangle,
  Heart
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { practiceInfo } from "@/lib/navigation";
import { validateName, validatePhone, validateSelect, isValid } from "@/lib/validation";
import { sendEnquiry } from "@/lib/sendEnquiry";

export default function EmergencySchedulingClient() {
  const breadcrumbs = [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Emergency Scheduling" },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    symptom: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => ({
    name: validateName(formData.name),
    phone: validatePhone(formData.phone),
    symptom: validateSelect(formData.symptom, "a primary symptom"),
  });

  const handleEmergencySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (!isValid(nextErrors)) return;
    setErrors({});
    setSending(true);
    setSubmitError("");
    const err = await sendEnquiry({
      formType: "Emergency Appointment Request",
      name: formData.name,
      phone: formData.phone,
      symptom: formData.symptom,
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
      setFormData({ name: "", phone: "", symptom: "", notes: "" });
    }, 5000);
  };

  const emergencySymptoms = [
    {
      title: "Severe or Throbbing Tooth Pain",
      desc: "Constant, radiating pain that wakes you up at night or does not respond to over-the-counter medication can indicate a deep infection or nerve damage."
    },
    {
      title: "Facial or Gum Swelling",
      desc: "Swelling in your cheeks, jaw, or gums is often a sign of a dental abscess. This requires immediate clinical diagnostics and antibiotic therapy."
    },
    {
      title: "Knocked-Out or Loose Tooth",
      desc: "A knocked-out tooth is a critical time-sensitive emergency. Re-implantation has the highest success rate if handled within 60 minutes of the injury."
    },
    {
      title: "Broken, Chipped, or Cracked Tooth",
      desc: "Cracks that extend deep into the tooth structures expose nerves, causing significant pain and leaving the tooth vulnerable to rapid bacterial decay."
    },
    {
      title: "Lost Crown, Bridge, or Filling",
      desc: "Losing a restoration leaves the underlying tooth structure exposed to temperature and pressure, causing immediate discomfort and potential fracture."
    }
  ];

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
              className="font-heading text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Same-Day Emergency Scheduling
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              If you are in pain or have experienced a dental injury, we are here to help. Reach a leading choice for a same day dentist southampton pa immediately.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── main Action Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Intro & Sincere Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-red-700 text-[10px] tracking-[0.25em] uppercase font-bold">Fast Pain Relief</span>
              </div>
              <h2 className="font-heading text-navy text-3xl font-bold leading-tight">
                We Keep Room in Our Daily Schedule for You
              </h2>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Dental emergencies don&apos;t wait, and neither should you. We keep room in our daily schedule for urgent care — call <a href={practiceInfo.phoneTel} className="text-primary hover:underline font-semibold">{practiceInfo.phone}</a> and we&apos;ll get you seen as quickly as possible.
              </p>
              <p className="text-navy/80 text-sm md:text-base leading-relaxed">
                Our front-office staff and clinical team coordinate rapidly to squeeze in patients experiencing toothaches, infections, or cosmetic breakage. When you call us, our experienced team will immediately guide you through basic first-aid instructions over the phone to stabilize your condition while you drive to our Southampton office.
              </p>
              
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 text-xs md:text-sm">
                <p className="font-bold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  When to Visit the Emergency Room (ER)
                </p>
                <p className="leading-relaxed">
                  If you are experiencing severe swelling that affects your ability to breathe or swallow, or if you have suffered major trauma to your head or jaw, please bypass our office and go directly to the nearest hospital emergency room or call 911 immediately.
                </p>
              </div>
            </div>

            {/* Right Column: Direct Contact & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-red-50/50 border border-red-200/50 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm text-center">
                <Phone className="w-10 h-10 text-red-600 mx-auto" />
                <h3 className="font-heading text-navy text-xl font-bold">Emergency Hotline</h3>
                <p className="text-navy/70 text-xs leading-relaxed">
                  Call our care coordinators immediately for fast scheduling.
                </p>
                <a
                  href={practiceInfo.phoneTel}
                  className="w-full text-center flex items-center justify-center gap-2 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-widest uppercase hover:scale-[1.01] transition-all duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call {practiceInfo.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── What Counts Section ─── */}
      <section className="py-20 md:py-24 bg-beige-light/20 border-y border-navy/[0.03]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
            <span className="text-red-700 text-[10px] tracking-[0.25em] uppercase font-bold">Symptom Guide</span>
            <h2 className="font-heading text-navy text-3xl font-bold">
              What Counts as a Dental Emergency?
            </h2>
            <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
              Not sure if you need same-day treatment? If you are experiencing any of the following, please call us to secure a slot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencySymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-navy text-lg font-bold">
                    {symptom.title}
                  </h3>
                  <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                    {symptom.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Read more card */}
            <div className="bg-navy-dark text-white rounded-3xl p-8 border border-white/10 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] rounded-full bg-primary/20 blur-2xl pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <h3 className="font-heading text-lg font-bold">Emergency First-Aid Instructions</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Need step-by-step guidance on handling a knocked-out tooth or lost filling right now? Access our detailed instructions.
                </p>
              </div>
              <div className="pt-6 relative z-10">
                <Link
                  href="/general-dentistry/emergency-dentistry"
                  className="inline-flex items-center gap-1 text-xs text-primary-light hover:text-white font-semibold uppercase tracking-wider"
                >
                  View First-Aid Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Online Appointment Request Form ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="bg-white border border-navy/5 p-6 md:p-10 rounded-3xl shadow-xl space-y-6 relative">
            <div className="space-y-3 text-center mb-8">
              <span className="text-red-700 text-[10px] tracking-[0.25em] uppercase font-bold">Online Intake</span>
              <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">Request Urgent Appointment Online</h2>
              <p className="text-navy/60 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
                If it is after office hours or you prefer to request online, fill out the form below. We monitor submissions constantly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleEmergencySubmit}
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
                        placeholder="Jane Smith"
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

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Primary Emergency Symptom</label>
                    <select
                      value={formData.symptom}
                      onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
                      className={`w-full bg-beige-light/10 border rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.symptom ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                      }`}
                    >
                      <option value="">Select Primary Symptom</option>
                      <option value="severe-pain">Severe/Throbbing Tooth Pain</option>
                      <option value="swelling">Facial or Gum Swelling</option>
                      <option value="broken-tooth">Broken, Chipped or Cracked Tooth</option>
                      <option value="knocked-out">Knocked-Out or Loose Tooth</option>
                      <option value="broken-crown">Lost Crown or Filling</option>
                      <option value="other">Other Dental Emergency</option>
                    </select>
                    {errors.symptom && <p className="text-red-600 text-[11px] font-semibold mt-1">{errors.symptom}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-navy/60">Detail of Pain or Injury (Optional)</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-beige-light/10 border border-navy/10 rounded-xl px-4 py-3 text-xs md:text-sm text-navy focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                      placeholder="Please briefly explain when the pain started or how the injury occurred to help our clinicians prepare."
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
                    className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-widest uppercase hover:scale-[1.01] shadow-md hover:shadow-lg transition-all duration-300 font-heading disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Request Same-Day Emergency Slot"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-50 border border-red-500 flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-heading text-navy text-xl font-bold">Request Successfully Transmitted</h4>
                  <p className="text-navy/70 text-xs md:text-sm max-w-sm leading-relaxed">
                    Thank you, **{formData.name}**. Our administrative staff will call you on **{formData.phone}** immediately to arrange your same-day emergency visit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
