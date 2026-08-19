"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export const changePasswordPageData = {
  title: "Change Password",
  subtitle: "Confirm your new password",
  newPasswordPlaceholder: "New Password",
  confirmPasswordPlaceholder: "Confirm Password",
  submitButtonText: "Save Password",
  coverImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
};

interface ChangePasswordSectionProps {
  data?: typeof changePasswordPageData;
}

export default function ChangePasswordSection({
  data = changePasswordPageData,
}: ChangePasswordSectionProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        {/* Right Column: Change Password Form */}
        <div className="lg:col-span-6 flex flex-col justify-center max-w-[440px] w-full mx-auto px-4 sm:px-0">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-[#1e1e2d] mb-3">
              {data.title}
            </h1>
            <p className="text-sm text-slate-500 font-normal">
              {data.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password Input */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={data.newPasswordPlaceholder}
                className="w-full bg-white border border-slate-200 rounded-[6px] px-4 py-3.5 pr-11 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3B3388] focus:ring-1 focus:ring-[#3B3388] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                {showNewPassword ? (
                  <Eye className="w-[18px] h-[18px]" />
                ) : (
                  <EyeOff className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={data.confirmPasswordPlaceholder}
                className="w-full bg-white border border-slate-200 rounded-[6px] px-4 py-3.5 pr-11 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#3B3388] focus:ring-1 focus:ring-[#3B3388] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                {showConfirmPassword ? (
                  <Eye className="w-[18px] h-[18px]" />
                ) : (
                  <EyeOff className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
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
