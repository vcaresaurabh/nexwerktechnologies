import { ReactNode } from "react";
import PageHero from "@/components/ui/PageHero";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <PageHero
        headline={title}
        subtext={`Last updated: ${lastUpdated}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-sm sm:prose-base max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600 prose-strong:text-slate-800
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
