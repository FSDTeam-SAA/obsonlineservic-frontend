"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const verifyOtpPageData = {
  title: "Enter Code",
  subtitle: "Please check your email for a message with your code. Your code is 6 numbers long.",
  resendText: "Resend code in 43s",
  submitButtonText: "Verify code",
  coverImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
};

interface VerifyOtpSectionProps {
  data?: typeof verifyOtpPageData;
}

export default function VerifyOtpSection({
  data = verifyOtpPageData,
}: VerifyOtpSectionProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth submission
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 sm:p-6 lg:p-6 font-sans">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Rounded Cover Image */}
        <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[500px] lg:h-[calc(100vh-3rem)] rounded-3xl overflow-hidden">
          <Image
            src={data.coverImage}
            alt="Scenic resort stay"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Verify OTP Form */}
        <div className="lg:col-span-6 flex flex-col justify-center max-w-[440px] w-full mx-auto px-4 sm:px-0">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-[#1e1e2d] mb-3">
              {data.title}
            </h1>
            <p className="text-sm text-slate-500 font-normal max-w-[320px] mx-auto">
              {data.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 sm:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg font-medium bg-white border border-slate-300 rounded-[6px] text-[#3B3388] outline-none focus:border-[#3B3388] focus:ring-1 focus:ring-[#3B3388] transition-all"
                />
              ))}
            </div>

            {/* Resend Text */}
            <div className="text-center text-sm text-slate-500 font-medium">
              {data.resendText}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-12 bg-[#3B3388] hover:bg-[#2F296D] text-white font-medium text-sm rounded-[6px] transition-colors shadow-none cursor-pointer"
              >
                {data.submitButtonText}
              </Button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
