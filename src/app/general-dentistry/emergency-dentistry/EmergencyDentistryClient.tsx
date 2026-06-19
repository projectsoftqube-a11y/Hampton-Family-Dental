"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Check,
  ShieldCheck,
  DollarSign,
  Calendar,
  Clock,
  ArrowUpRight,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import DoctorBlock from "@/components/shared/DoctorBlock";
import FAQBlock from "@/components/shared/FAQBlock";
import CTABlock from "@/components/shared/CTABlock";

export default function EmergencyDentistryClient() {
  const breadcrumbs = [
    { label: "General Dentistry", href: "/general-dentistry" },
    { label: "Emergency Dentistry", href: "/general-dentistry/emergency-dentistry" },
  ];

  const faqs = [
    {
      q: "What should I do if a tooth is knocked out?",
      a: "Find the tooth, handle it only by the crown (chewing surface), and gently rinse it. Try to place it back in the socket. If that's not possible, keep it moist in a cup of milk or saliva, and get to our office within 1 hour.",
    },
    {
      q: "How can I stop a toothache fast?",
      a: "Take an over-the-counter pain reliever like ibuprofen as directed, rinse with warm salt water, and use a cold compress on your cheek. Keep your head elevated. These ease the pain temporarily — call us so we can treat the cause.",
    },
    {
      q: "Is a dental abscess an emergency?",
      a: "Yes. An abscess is a bacterial infection that can spread, so it needs same-day care. Don't squeeze it; rinse with warm salt water and call us immediately for antibiotics or emergency treatment. Swelling that affects breathing or swallowing is a 911 emergency.",
    },
    {
      q: "What should I do for a broken or cracked tooth?",
      a: "Rinse with warm water, apply a cold compress to reduce swelling, and save any pieces. Avoid chewing on that side and call us right away — a cracked tooth can worsen quickly without treatment.",
    },
    {
      q: "How do I handle a tooth abscess?",
      a: "An abscess is a serious bacterial infection that can cause swelling, fever, and severe pain. Do not squeeze or pop it. Rinse with warm salt water and call our office immediately for antibiotics or emergency root canal treatment.",
    },
    {
      q: "Do you offer same-day emergency appointments?",
      a: "Yes. We reserve time each day for emergencies and do everything we can to see you the same day for severe pain, swelling, or a broken or knocked-out tooth. Call (215) 357-2224 and we'll guide you through first-aid and get you in.",
    },
    {
      q: "How much does an emergency dental visit cost?",
      a: "The cost depends on what's needed to relieve your pain and stabilize the tooth — we keep it clear and discuss it before treatment. Many emergency exams are covered by insurance, we accept CareCredit, and our membership plan helps patients without insurance.",
    },
    {
      q: "Should I go to the ER or a dentist for a dental emergency?",
      a: "For most dental emergencies, a dentist treats the problem fastest — ERs can manage pain and infection but usually can't repair the tooth. Go to the ER or call 911 for swelling that affects breathing or swallowing, a broken jaw, or uncontrolled bleeding.",
    },
  ];

  const relatedServices = [
    { label: "Root Canal Treatment", href: "/restorative-dentistry/root-canal" },
    { label: "Tooth Extraction", href: "/general-dentistry/tooth-extraction" },
    { label: "Dental Crowns", href: "/restorative-dentistry/dental-crowns" },
  ];

  const areasServedLine = "Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA";

  const emergencies = [
    {
      title: "Knocked-Out Tooth",
      text: "Pick up the tooth by the crown — never the root — and gently rinse it with water. Try to place it back in the socket and bite on gauze. If you can’t, store it in a cup of milk or saliva and get to us within an hour. The faster you act, the better the chance we can save it.",
    },
    {
      title: "Broken or Cracked Tooth",
      text: "Rinse your mouth with warm water and apply a cold compress to the outside of your cheek to reduce swelling. Save any pieces of the tooth. Avoid chewing on that side and call us right away — a cracked tooth can worsen quickly without treatment.",
    },
    {
      title: "Severe Toothache or Dental Abscess",
      text: "Rinse with warm salt water and take an over-the-counter pain reliever as directed. An abscess — a swelling or “pimple” on the gum, often with fever — is a serious infection: don’t squeeze it, and call us immediately. Untreated infections can spread, so this needs same-day attention.",
    },
    {
      title: "Lost Filling or Crown",
      text: "Keep the crown if you have it. You can cover the exposed tooth with dental cement from a pharmacy and avoid chewing on that side. It’s not usually as urgent as pain or trauma, but call us promptly so the tooth doesn’t get damaged or sensitive.",
    },
    {
      title: "Soft-Tissue Injury (lip, cheek, tongue, gums)",
      text: "Clean the area gently and apply gauze with light pressure to control bleeding; a cold compress helps with swelling. If bleeding doesn’t stop after 10–15 minutes, call us or seek emergency care.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden font-body text-navy">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-navy-dark text-white">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1300px] mx-auto px-5 md:px-10">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-primary-light" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15">
                <Sparkles className="w-3 h-3 text-primary-light" />
                <span className="text-white/95 text-[9px] tracking-[0.25em] uppercase font-semibold">
                  General Dentistry
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Emergency Dentist in Southampton, PA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl"
            >
              Get relief from throbbing tooth pain, broken crowns, or dental trauma. We offer same-day emergency appointments during office hours and 24/7 phone support, ensuring you get help when you need it most.
            </motion.p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-12 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Duration</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                30–60 minutes
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Typical Visits</p>
              <p className="text-sm font-semibold text-primary-light mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Same-day visit
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 col-span-2 md:col-span-2">
              <p className="text-[9px] uppercase font-bold text-white/40 tracking-wider">Clinical Provider</p>
              <p className="text-xs text-white/90 mt-1 font-semibold">
                Southampton, PA Licensed Dentist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Emergency Call-Out Red Banner ─── */}
      <section className="bg-red-50 border-y border-red-200 py-4 relative z-20">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-red-950 font-heading font-bold text-sm md:text-base leading-tight">
                In a dental emergency right now?
              </p>
              <p className="text-red-800 text-xs md:text-sm mt-0.5">
                Severe swelling that affects breathing/swallowing, or heavy bleeding, is a medical emergency — call 911 or go to the ER.
              </p>
            </div>
          </div>
          <a
            href="tel:+12153572224"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Call (215) 357-2224 Now
          </a>
        </div>
      </section>

      {/* ─── Intro & Definition Section (2-Column) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl bg-beige-light/25 border border-navy/[0.04] p-6 md:p-8">
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  A dental emergency can be incredibly stressful, but fast, professional treatment makes all the difference. At Hampton Family Dental — formerly Brenner Dental Group — we prioritize urgent cases to relieve pain and stabilize your tooth as quickly as possible. Whether you are dealing with a severe toothache, a broken crown, or a knocked-out tooth, Dr. Jeffrey Brenner and Dr. Keyur Dudhat are ready to help. If you do not have insurance, you can also benefit from our <Link href="/specials" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">special membership plans</Link> or payment options.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">What to Expect</span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  What is Considered a Dental Emergency?
                </h2>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  A dental emergency is any condition that causes severe pain, uncontrolled bleeding, or threatens the permanent viability of a tooth. Common emergencies include knocked-out teeth, loose or fractured teeth, advanced dental abscesses (infections), lost fillings or crowns, and soft tissue trauma. Our team is fully equipped to diagnose the issue and provide immediate relief.
                </p>
              </div>
            </div>

            {/* Right Column: Illustration */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-navy/5 bg-beige-light/30">
                <Image
                  src="/images/reception_area_1779858343255.webp"
                  alt="Emergency Dentistry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits & Candidacy (Balanced Horizontal Cards) ─── */}
      <section className="py-16 md:py-20 bg-beige-light/35 border-y border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Benefits */}
            <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Key Patient Benefits
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  Timely emergency care resolves acute tooth pain, halts active infection, and protects your permanent dentition.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Same-day pain relief and immediate stabilization",
                    "Prevents the spread of serious dental infections",
                    "Saves damaged or knocked-out teeth",
                    "24/7 phone access for urgent care instructions",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 bg-beige-light/10 p-3 rounded-xl border border-navy/[0.03] shadow-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-navy/85 text-xs font-semibold leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Candidacy */}
            <div className="bg-white border border-navy/[0.05] p-6 md:p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight mb-2">
                  When Do You Need Emergency Care?
                </h3>
                <p className="text-navy/60 text-xs md:text-sm mb-6">
                  If you are experiencing swelling, throbbing pain, bleeding, or have had a tooth knocked loose, you need to see our emergency team immediately.
                </p>
                <ul className="space-y-3 text-xs md:text-sm">
                  {[
                    "Severe, throbbing tooth pain",
                    "Swollen gums, face, or jaw",
                    "Knocked-out, loose, or cracked tooth",
                    "Lost fillings, crowns, or broken dentures",
                  ].map((check) => (
                    <li key={check} className="flex items-center gap-3">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-navy/85 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Treatment Process (Full Width, Centered Grid) ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Step-by-Step</span>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mt-2">Your Treatment Process</h2>
            <p className="text-navy/55 text-xs md:text-sm mt-3">
              We focus on comfort and absolute speed. Here is what happens when you reach out with a dental emergency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Call Our Emergency Line",
                text: "Contact us immediately at (215) 357-2224. Our coordinators will guide you through first-aid and schedule a same-day urgent visit.",
              },
              {
                title: "Rapid Diagnostic Exam",
                text: "When you arrive, we capture high-definition digital x-rays to locate the root cause of the pain or infection.",
              },
              {
                title: "Immediate Treatment & Pain Relief",
                text: "Dr. Brenner or Dr. Dudhat performs the necessary procedure—such as a temporary filling, root canal access, or extraction—to stop the pain.",
              },
              {
                title: "Long-Term Restoration Planning",
                text: "Once the acute pain is resolved, we discuss any follow-up treatments, like permanent crowns or implant placements, to restore your smile.",
              },
            ].map((step, idx) => (
              <div key={step.title} className="flex gap-4 p-6 rounded-3xl bg-beige-light/10 border border-navy/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0 shadow-md">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-navy text-base md:text-lg">{step.title}</h4>
                  <p className="text-navy/60 text-xs md:text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Common Dental Emergencies & What to Do ─── */}
      <section className="py-16 md:py-24 bg-beige-light/20 border-t border-navy/[0.04]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <HeartPulse className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                First-Aid Resource
              </span>
            </div>
            <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold leading-tight">
              Common Dental Emergencies & What to Do
            </h2>
            <p className="text-navy/60 text-xs md:text-sm mt-3">
              If you’re dealing with one of these, here’s what to do before you reach us — and call (215) 357-2224 right away so we can see you the same day.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {emergencies.map((e, idx) => (
              <div key={idx} className="bg-white border border-navy/[0.06] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-navy text-xl font-bold leading-snug">
                    {e.title}
                  </h3>
                  <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                    {e.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How to Manage Pain Section ─── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10">
          <div className="bg-white border border-navy/[0.06] rounded-[2rem] p-6 md:p-10 shadow-sm max-w-5xl mx-auto relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-beige-light/35 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                    Pain Management
                  </span>
                </div>
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  How to Relieve Tooth Pain Until Your Appointment
                </h2>
                <p className="text-navy-light text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Immediate Relief Guidance
                </p>
                <div className="pt-2">
                  <div className="inline-block h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-4 text-navy/70 text-sm md:text-base leading-relaxed">
                <p>
                  While you wait to be seen, a few steps can ease the pain: take an over-the-counter pain reliever such as ibuprofen as directed, rinse with warm salt water to clean the area and reduce inflammation, and use a cold compress on your cheek for 15 minutes at a time. Keep your head elevated — even when sleeping — since lying flat can make throbbing worse.
                </p>
                <p>
                  Avoid very hot, cold, or sugary foods, and don’t place aspirin directly on the gum, which can burn the tissue. These are temporary measures only — tooth pain almost always means something needs treatment, so call (215) 357-2224 so we can find the cause and fix it. We can provide treatments like emergency <Link href="/restorative-dentistry/root-canal" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">root canals</Link> or <Link href="/general-dentistry/tooth-extraction" className="font-semibold text-primary-dark underline decoration-primary/30 underline-offset-4 hover:text-primary">tooth extractions</Link> if the tooth is severely damaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Same-Day & After-Hours Care Section (Redesigned Grid Layout) ─── */}
      <section className="py-16 md:py-24 bg-beige-light/25 border-y border-navy/[0.04] relative">
        {/* Soft gradient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Card: Same-Day Care */}
            <div className="lg:col-span-6 bg-white border border-navy/[0.06] rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-primary" />
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[10px] tracking-wider uppercase font-bold">
                    Office Hours
                  </span>
                </div>
                
                <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold leading-tight">
                  Same-Day Emergency Appointments
                </h2>
                
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  We reserve dedicated slots in our daily schedule exclusively for dental emergencies. If you are experiencing severe pain, swelling, or have a broken or knocked-out tooth, we do everything possible to see you the same day. 
                </p>
                <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                  Our experienced clinical team will also guide you through immediate first-aid instructions over the phone, ensuring you are supported from the moment you call.
                </p>
              </div>
              
              <div className="pt-8 border-t border-navy/[0.06] mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-semibold text-navy/55 uppercase tracking-wider">
                  Southampton, PA Office Care
                </span>
                <a
                  href="tel:+12153572224"
                  className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-primary hover:text-white text-white font-bold text-xs px-5 py-3 rounded-full transition-all duration-300 shadow-sm"
                >
                  Request Same-Day Visit
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card: After-Hours Process */}
            <div className="lg:col-span-6 bg-gradient-to-b from-navy-dark to-navy rounded-[2.5rem] p-8 md:p-10 shadow-lg text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-primary-light" />
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                  <AlertTriangle className="w-3.5 h-3.5 text-primary-light" />
                  <span className="text-primary-light text-[10px] tracking-wider uppercase font-bold">
                    After-Hours Guidance
                  </span>
                </div>
                
                <h3 className="font-heading text-white text-2xl md:text-3xl font-bold leading-tight">
                  After-Hours Support Process
                </h3>
                
                <div className="space-y-4 pt-2">
                  <p className="text-white/70 text-xs md:text-sm italic uppercase tracking-wider font-bold">
                    CONFIRM WITH CLIENT
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    If you experience a dental emergency outside our normal clinical hours, call <a href="tel:+12153572224" className="font-bold text-primary-light underline hover:text-white">(215) 357-2224</a> and follow the phone prompts to route to our dedicated on-call service.
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Our team provides triage and critical advice for patients from Southampton, Richboro, Warminster, Newtown, Holland, Feasterville, and Huntingdon Valley, PA.
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Emergency Line Available 24/7
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ─── Dental Emergency or ER? (2-Column, Dark Contrast) ─── */}
      <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[320px] h-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: ER vs Dentist */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-white text-2xl md:text-4xl font-bold leading-tight">
                Dental Emergency or ER? When to Go Where
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Most dental emergencies — toothaches, broken or knocked-out teeth, abscesses, lost crowns — are treated fastest and best by a dentist, not a hospital ER (emergency rooms can manage pain and infection but usually can’t fix the tooth).
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                However, go to the ER or call 911 for swelling that affects your breathing or swallowing, a possible broken jaw, or uncontrolled bleeding after an injury. When in doubt, call us and we’ll help you decide. We can perform emergency treatments such as restorative <Link href="/restorative-dentistry/dental-crowns" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">dental crowns</Link> or direct you to <Link href="/patient-information/emergency-scheduling" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">emergency scheduling</Link>.
              </p>
            </div>

            {/* Right: Cost Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-6 relative overflow-hidden backdrop-blur-md">
                <h4 className="font-heading font-bold text-white text-lg md:text-xl flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-light" />
                  Cost & Insurance Coverage
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Emergency diagnostic exams are often covered by dental insurance. Our focus is to relieve pain and stabilize your tooth, keeping diagnostic costs clear and transparent.
                </p>
                <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-xs md:text-sm text-primary-light leading-snug">
                  <strong>Financing Option:</strong> We accept CareCredit for emergency costs and offer payment options to ensure pain relief is never delayed. If you lack coverage, check our <Link href="/specials" className="font-semibold text-primary-light underline decoration-primary/30 underline-offset-4 hover:text-white">no-insurance specials</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctor Block ─── */}
      <DoctorBlock />

      {/* ─── FAQ Block ─── */}
      <FAQBlock
        faqs={faqs}
        title="Emergency Dentistry FAQs"
      />

      {/* ─── Related Services ─── */}
      <section className="bg-beige-light/25 border-y border-navy/5">
        <div className="max-w-[1080px] mx-auto px-5 py-9 md:py-10">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-primary-dark text-[16px] tracking-widest uppercase font-bold">
                Areas We Serve
              </h4>
              <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                {areasServedLine}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-navy/45 text-[10px] tracking-widest uppercase font-bold text-center md:text-left">
                Explore Related Dental Treatments
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.href}
                    href={rel.href}
                    className="group inline-flex items-center gap-2 bg-white border border-navy/5 px-4 py-2.5 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    {rel.label}
                    <ArrowUpRight className="w-3.5 h-3.5 text-navy/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Block ─── */}
      <CTABlock />
    </main>
  );
}
