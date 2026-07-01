"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, Clock, MapPin, Calendar, Heart } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { practiceInfo } from "@/lib/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateRequired,
  isValid,
} from "@/lib/validation";
import { sendEnquiry } from "@/lib/sendEnquiry";

export default function ContactClient() {
  const breadcrumbs = [{ label: "Contact Us" }];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    message: validateRequired(formData.message, "Message"),
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
      formType: "Contact Enquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
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
      setFormData({ name: "", email: "", phone: "", message: "", visitTypes: [] });
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
                <Sparkles className="w-3.5 h-3.5 text-primary-light" />
                <span className="text-white/95 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Get in Touch
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
              Contact Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              We are here to help. Reach out directly by phone, visit our clinic in Southampton, or submit a message below.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Contact details & Form ─── */}
      <section className="py-20 bg-beige-light/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="font-heading text-navy text-2xl font-bold">Hampton Family Dental</h2>
                <p className="text-navy/60 text-xs md:text-sm leading-relaxed">
                  Located in the heart of Southampton, PA. Formerly Brenner Dental Group—same team, same location, continuing our commitment to clinical excellence.
                </p>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                  <h4 className="font-heading font-bold text-red-700 text-sm mb-1">Experiencing a Dental Emergency?</h4>
                  <p className="text-red-900/70 text-xs mb-3">We keep room in our schedule for urgent care and offer same-day appointments whenever possible.</p>
                  <Link href="/general-dentistry/emergency-dentistry" className="text-red-600 text-xs font-bold uppercase tracking-wider hover:text-red-800 transition-colors">
                    Learn about emergency care &rarr;
                  </Link>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-navy/10">
                <a
                  href={practiceInfo.phoneTel}
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-navy/40 uppercase font-semibold">Click-to-Call Direct Line</p>
                    <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors">{practiceInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={practiceInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-navy/40 uppercase font-semibold">Our Address</p>
                    <p className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">
                      {practiceInfo.address.full}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-navy/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-navy/40 uppercase font-semibold">Practice Hours</p>
                    <p className="text-xs font-bold leading-tight">
                      Mon: 8am–6pm | Wed: 9am–1pm
                      <br />
                      Tue & Thu: 8am–4pm | Fri–Sun Closed
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${practiceInfo.email}`}
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-navy/40 uppercase font-semibold">Support Email</p>
                    <p className="text-xs font-bold group-hover:text-primary transition-colors">{practiceInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-navy/5 p-6 md:p-8 rounded-3xl shadow-xl h-full flex flex-col justify-center relative">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center p-8 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                    <h4 className="font-heading text-navy text-xl font-bold">Message Sent!</h4>
                    <p className="text-navy/60 text-xs max-w-sm leading-relaxed">
                      Thank you, **{formData.name}**. Your message has been received. Our team will get back to you within a few business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <h3 className="font-heading text-navy text-lg font-bold flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Send Us a Message
                    </h3>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-beige-light/20 border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none transition-colors ${
                          errors.name ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-red-600 text-[10px] font-semibold mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-beige-light/20 border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none transition-colors ${
                            errors.phone ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                          }`}
                          placeholder="(215) 555-1234"
                        />
                        {errors.phone && <p className="text-red-600 text-[10px] font-semibold mt-1">{errors.phone}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-beige-light/20 border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none transition-colors ${
                            errors.email ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-600 text-[10px] font-semibold mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">I am interested in (Select all that apply)</label>
                      <div className="flex flex-col gap-3">
                        {[
                          { title: "New Patient Exam & Cleaning", desc: "(For first-time patients—includes exam, X-rays, and cleaning if applicable)" },
                          { title: "Routine Cleaning & Checkup", desc: "(For existing patients coming in for recall/maintenance)" },
                          { title: "Emergency Visit", desc: "(Pain, swelling, broken tooth, infection, etc.)" },
                          { title: "Treatment Visit", desc: "(Fillings, crowns, root canals, extractions, or scheduled procedures)" },
                          { title: "Consultation / Second Opinion", desc: "(Implants, Veneer, Invisalign)" },
                          { title: "Other / Not Sure", desc: "" }
                        ].map((option) => (
                          <label key={option.title} className="flex items-start gap-3 text-navy/80 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-5 h-5 rounded border border-navy/20 bg-beige-light/20 group-hover:border-primary transition-colors shrink-0 mt-0.5">
                              <input
                                type="checkbox"
                                className="absolute opacity-0 cursor-pointer h-0 w-0"
                                checked={formData.visitTypes.includes(option.title)}
                                onChange={(e) => {
                                  const newTypes = e.target.checked
                                    ? [...formData.visitTypes, option.title]
                                    : formData.visitTypes.filter((t) => t !== option.title);
                                  setFormData({ ...formData, visitTypes: newTypes });
                                }}
                              />
                              {formData.visitTypes.includes(option.title) && (
                                <Sparkles className="w-3.5 h-3.5 text-primary" />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-navy">{option.title}</span>
                              {option.desc && (
                                <span className="text-[10px] text-navy/60 leading-snug mt-0.5">{option.desc}</span>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-wider text-navy/45">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full bg-beige-light/20 border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none transition-colors resize-none ${
                          errors.message ? "border-red-500 focus:border-red-500" : "border-navy/10 focus:border-primary"
                        }`}
                        placeholder="Ask a question or request detail info..."
                      />
                      {errors.message && <p className="text-red-600 text-[10px] font-semibold mt-1">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-red-600 text-xs font-semibold text-center bg-red-50 border border-red-200 rounded-xl py-2 px-3">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3.5 rounded-full bg-navy text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Map Section ─── */}
      <section className="h-[400px] w-full bg-beige-light/40 relative">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=283%20Second%20Street%20Pike,%20Suite%20140,%20Southampton,%20PA%2018966+(Hampton%20Family%20Dental)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </section>
    </main>
  );
}
