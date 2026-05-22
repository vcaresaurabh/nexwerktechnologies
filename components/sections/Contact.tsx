"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = "idle" | "loading" | "success";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  const validate = (): boolean => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Start Your{" "}
            <span className="gradient-text">Digital Journey</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Tell us about your project. We typically respond within 1–2 business days.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="bg-linear-to-br from-blue-600 to-sky-500 rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-2">Let&apos;s talk business</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                Whether you need a new website, a CRM system, or end-to-end IT support —
                we&apos;re here to help you build something great.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "contact@nexwerktechnologies.com", href: "mailto:contact@nexwerktechnologies.com" },
                  { icon: Phone, label: "Phone", value: "888 909 9466", href: "tel:8889099466" },
                  { icon: MapPin, label: "Address", value: "F-115, Sector 12, New Vijay Nagar, Ghaziabad, U.P. 201009", href: null },
                  { icon: Clock, label: "Response Time", value: "1–2 Business Days", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold hover:text-blue-200 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-8 -mr-8 pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mt-4 -mr-4 pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange("name")}
                        className={errors.name ? "border-red-400 focus-visible:ring-red-300" : ""}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        className={errors.email ? "border-red-400 focus-visible:ring-red-300" : ""}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={handleChange("subject")}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange("message")}
                      className={`resize-none ${errors.message ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-all duration-300"
                    >
                      {status === "loading" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
