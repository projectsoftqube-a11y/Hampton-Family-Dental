import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Construct schema JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hampton-family-dental.com"
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://hampton-family-dental.com${item.href}` } : {})
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 mb-6">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/50 tracking-wider uppercase font-body">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-primary-light transition-colors duration-200"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-white/30" />
              {isLast || !item.href ? (
                <span className="text-primary-light font-semibold">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary-light transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
