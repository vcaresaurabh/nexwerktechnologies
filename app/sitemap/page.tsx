import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Sitemap | NexWerk Technologies",
  description: "Complete sitemap for NexWerk Technologies website.",
};

const SITEMAP_SECTIONS = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Website Development", href: "/services#web-dev" },
      { label: "CRM Systems", href: "/services#crm" },
      { label: "Business Automation", href: "/services#automation" },
      { label: "Managed IT Services", href: "/services#managed-it" },
      { label: "App Development", href: "/services#app-dev" },
      { label: "Cloud & Security", href: "/services#cloud-security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Sitemap"
          subtext="A complete map of all pages on the NexWerk Technologies website."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
        />

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SITEMAP_SECTIONS.map((section, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.07}>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-blue-400" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
