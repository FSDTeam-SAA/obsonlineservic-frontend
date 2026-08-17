"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export const newsletterData = {
  title: "Get Exclusive Holiday Deals",
  description:
    "Subscribe to our newsletter to receive curated holiday itineraries, member-only discounts, and seasonal resort openings directly in your inbox.",
  placeholder: "Your email address",
  buttonText: "Subscribe",
  backgroundImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop",
};

interface NewsletterBannerProps {
  data?: typeof newsletterData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function NewsletterBanner({
  data = newsletterData,
}: NewsletterBannerProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative w-full min-h-[380px] md:min-h-[420px] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src={data.backgroundImage}
        alt="Lake background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-brightness-75" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center text-white flex flex-col items-center">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          {data.title}
        </h2>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-8">
          {data.description}
        </p>

        {/* Newsletter Subscription Form with Glassmorphism Box */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white/20 backdrop-blur-md rounded-sm p-1.5 flex items-center border border-white/20 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-white/30"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isSubmitted ? "Thanks for subscribing!" : data.placeholder}
            required
            className="w-full bg-transparent px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300 font-normal outline-none border-none"
          />

          <Button
            type="submit"
            className="shrink-0 bg-[#3B3388] hover:bg-[#2F296D] text-white text-xs font-semibold px-6 py-2.5 h-10 rounded-sm transition-colors shadow-none cursor-pointer"
          >
            {data.buttonText}
          </Button>
        </form>
      </div>
    </section>
  );
}