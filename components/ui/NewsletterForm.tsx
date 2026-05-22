"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-white">
        <CheckCircle2 size={18} />
        <span className="font-medium">You&apos;re subscribed!</span>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <Input
        type="email"
        placeholder="Your email address"
        required
        className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus-visible:ring-white/50 flex-1"
      />
      <Button
        type="submit"
        className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 rounded-full shrink-0"
      >
        Subscribe
      </Button>
    </form>
  );
}
