import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogCard from "@/components/ui/BlogCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { BLOG_POSTS } from "@/constants/data";

export const metadata: Metadata = {
  title: "Blog & Insights | NexWerk Technologies",
  description:
    "Expert insights on web development, CRM systems, business automation, IT infrastructure, and cloud security for growing businesses.",
};

const CATEGORIES = ["All", "Web Dev", "CRM", "Automation", "IT", "Cloud", "App Dev"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Insights & Resources for Growing Businesses"
          subtext="Practical articles on technology, automation, and IT strategy — written by the NexWerk team."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          badge="The NexWerk Blog"
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category tabs */}
            <AnimatedSection direction="up" className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    cat === "All"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </AnimatedSection>

            {/* Posts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <AnimatedSection key={post.id} direction="up" delay={i * 0.07}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>

            {/* Newsletter */}
            <AnimatedSection direction="up" delay={0.3} className="mt-16">
              <div className="rounded-2xl bg-linear-to-r from-blue-600 to-sky-500 p-8 md:p-10">
                <div className="max-w-xl mx-auto text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Get our latest articles on IT, automation, and business tech delivered to your inbox.
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
