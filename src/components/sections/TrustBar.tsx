import {
  CalendarCheck,
  CreditCard,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const items = [
  { icon: CalendarCheck, label: "Same-Day Emergencies" },
  { icon: ShieldCheck, label: "Most Insurance Accepted" },
  { icon: CreditCard, label: "In-Office Membership Plans" },
  { icon: Stethoscope, label: "Trusted Dental Experience" },
  { icon: HeartHandshake, label: "Serving Southampton, Richboro, Warminster & Newtown" },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 border-y border-navy/[0.06] bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-navy/70 text-[11px] md:text-xs font-semibold tracking-[0.12em] uppercase"
            >
              <item.icon className="h-3.5 w-3.5 text-primary" strokeWidth={2.4} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
