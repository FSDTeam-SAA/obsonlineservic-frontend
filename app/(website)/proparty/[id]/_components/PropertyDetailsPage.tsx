"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  Users,
  Bed,
  Bath,
  Maximize,
  Car,
  Wifi,
  Calendar,
  ChevronDown,
  Flame,
  Waves,
  Utensils,
  Coffee,
  Tv,
  Wind,
  ShieldCheck,
  Zap,
  Lock,
  Grid,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const propertyDetailsData = {
  id: "prop-01",
  badge: "FEATURED LODGE",
  title: "Luxury Lake Villa",
  rating: 4.9,
  reviewsCount: "1,248 reviews",
  location: "Silverlake Retreat, Austria",
  description:
    "An architectural masterpiece perched on the pristine shores of Lake Weissensee, offering private wellness, floor-to-ceiling alpine vistas, and bespoke luxury.",
  
  // Gallery Images
  gallery: {
    main: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    side1: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop",
    side2: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
    side3: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
    totalPhotos: 15,
  },

  // Key Specifications
  specs: [
    { label: "GUESTS", value: "Up to 6", icon: Users },
    { label: "BEDROOM", value: "3 Rooms", icon: Bed },
    { label: "BATHROOMS", value: "3.5 Baths", icon: Bath },
    { label: "SIZE", value: "240 m²", icon: Maximize },
    { label: "PARKING", value: "Free Private", icon: Car },
    { label: "WIFI", value: "Free up to 24 hours", icon: Wifi },
  ],

  // Booking Card Info
  booking: {
    pricePerNight: 129,
    currency: "€",
    defaultCheckIn: "14 May 2026",
    defaultCheckOut: "19 May 2026",
    nights: 5,
    cleaningFee: 80,
    taxes: 45,
    guaranteeText: "Best Price Guarantee",
  },

  // Premium Amenities
  amenities: [
    { name: "Private Sauna", icon: Flame },
    { name: "Lake View", icon: Waves },
    { name: "Kitchen", icon: Utensils },
    { name: "Coffee Machine", icon: Coffee },
    { name: "Smart TV", icon: Tv },
    { name: "Air Conditioning", icon: Wind },
    { name: "Heating", icon: Flame },
    { name: "Parking", icon: Car },
  ],

  // Testimonials
  reviews: [
    {
      id: "1",
      rating: 4,
      maxRating: 5,
      comment:
        "An absolutely premium experience! Everything from the modern minimalist architecture to the quality of the bedding was perfect.",
      name: "Marvin McKinney",
      country: "Netherlands",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "2",
      rating: 4,
      maxRating: 5,
      comment:
        "An absolutely premium experience! Everything from the modern minimalist architecture to the quality of the bedding was perfect.",
      name: "Marvin McKinney",
      country: "Netherlands",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "3",
      rating: 4,
      maxRating: 5,
      comment:
        "An absolutely premium experience! Everything from the modern minimalist architecture to the quality of the bedding was perfect.",
      name: "Marvin McKinney",
      country: "Netherlands",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    },
  ],
};

// ==========================================
// 2. MAIN PROPERTY DETAILS COMPONENT
// ==========================================
export default function PropertyDetailsPage({
  data = propertyDetailsData,
}: {
  data?: typeof propertyDetailsData;
}) {
  const [guests, setGuests] = useState("4 Guests");
  const [isSaved, setIsSaved] = useState(false);

  const basePriceTotal = data.booking.pricePerNight * data.booking.nights;
  const grandTotal =
    basePriceTotal + data.booking.cleaningFee + data.booking.taxes;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="container mx-auto space-y-12">
        
        {/* Top Grid: Gallery & Main Details + Booking Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTENT COLUMN (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Gallery Grid (Clean & Responsive Alignment) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[460px] rounded-sm overflow-hidden shadow-xs">
              {/* Main Featured Big Image */}
              <div className="md:col-span-8 relative h-[300px] md:h-full overflow-hidden bg-slate-200">
                <Image
                  src={data.gallery.main}
                  alt={data.title}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-white">
                  <span className="text-[10px] font-semibold tracking-wider uppercase">
                    {data.badge}
                  </span>
                </div>
              </div>

              {/* 3 Right Stacked Images */}
              <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3 h-full">
                <div className="relative h-[110px] md:h-full overflow-hidden bg-slate-200">
                  <Image
                    src={data.gallery.side1}
                    alt="Property detail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-[110px] md:h-full overflow-hidden bg-slate-200">
                  <Image
                    src={data.gallery.side2}
                    alt="Property landscape"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-[110px] md:h-full overflow-hidden bg-slate-200 group">
                  <Image
                    src={data.gallery.side3}
                    alt="Property interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* View All Photos Button Overlay */}
                  <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-800 text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-xs flex items-center gap-1.5 transition-all">
                    <Grid className="w-3.5 h-3.5" />
                    <span>View All Photos ({data.gallery.totalPhotos})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Title & Metadata Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {data.title}
                </h1>
                
                {/* Rating Badge */}
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-800">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>{data.rating}</span>
                  <span className="text-slate-400 font-normal">
                    [{data.reviewsCount}]
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{data.location}</span>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed pt-1">
                {data.description}
              </p>
            </div>

            {/* Specifications Cards Grid (6 Items) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {data.specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-sm p-3 text-center flex flex-col items-center justify-center min-h-[95px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                  >
                    <Icon className="w-4 h-4 text-slate-400 mb-1.5 stroke-[1.5]" />
                    <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Premium Amenities Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg font-bold text-slate-900">
                Premium Amenities Included
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6">
                {data.amenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-600 font-medium"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: BOOKING WIDGET (4 Cols) */}
          <div className="lg:col-span-4 sticky top-6">
            <Card className="rounded-sm border border-slate-200/80 bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] space-y-6">
              
              {/* Header Price & Guarantee */}
              <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-slate-400 font-normal">From</span>
                  <span className="text-2xl font-bold text-slate-900">
                    {data.booking.currency}
                    {data.booking.pricePerNight}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">/ Night</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 italic">
                  {data.booking.guaranteeText}
                </span>
              </div>

              {/* Date Inputs Box */}
              <div className="border border-slate-200 rounded-sm overflow-hidden divide-y divide-slate-200 text-xs">
                {/* Check In / Out 2-Col */}
                <div className="grid grid-cols-2 divide-x divide-slate-200">
                  <div className="p-3 bg-white">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      CHECK IN
                    </span>
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>{data.booking.defaultCheckIn}</span>
                      <Calendar className="w-3.5 h-3.5 text-[#3B3388]" />
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      CHECK OUT
                    </span>
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>{data.booking.defaultCheckOut}</span>
                      <Calendar className="w-3.5 h-3.5 text-[#3B3388]" />
                    </div>
                  </div>
                </div>

                {/* Guests Selector */}
                <div className="p-3 bg-white">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    GUESTS
                  </span>
                  <div className="flex items-center justify-between text-slate-700 font-medium cursor-pointer">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{guests}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-500 pt-1">
                <div className="flex justify-between">
                  <span>
                    {data.booking.currency}
                    {data.booking.pricePerNight} x {data.booking.nights} Nights
                  </span>
                  <span className="font-semibold text-slate-700">
                    {data.booking.currency}
                    {basePriceTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Fee</span>
                  <span className="font-semibold text-slate-700">
                    {data.booking.currency}
                    {data.booking.cleaningFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Local Taxes & Fees</span>
                  <span className="font-semibold text-slate-700">
                    {data.booking.currency}
                    {data.booking.taxes.toFixed(2)}
                  </span>
                </div>

                {/* Total Price */}
                <div className="flex justify-between items-baseline pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">
                    Total Price
                  </span>
                  <span className="font-bold text-lg text-[#3B3388]">
                    {data.booking.currency}
                    {grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <Button className="w-full h-11 bg-[#3B3388] hover:bg-[#2F296D] text-white font-semibold text-xs rounded-xl shadow-sm transition-colors">
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-full h-11 border-slate-200 text-xs font-semibold rounded-xl transition-colors ${
                    isSaved
                      ? "bg-slate-50 text-[#3B3388] border-[#3B3388]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {isSaved ? "Saved to Favorites" : "Save Property"}
                </Button>
              </div>

              {/* Trust Badges Footer */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-[#3B3388] mb-1" />
                  <span className="text-[9px] text-slate-400 font-medium">
                    FREE CANCEL
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-4 h-4 text-[#3B3388] mb-1" />
                  <span className="text-[9px] text-slate-400 font-medium">
                    INSTANT BOOK
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="w-4 h-4 text-[#3B3388] mb-1" />
                  <span className="text-[9px] text-slate-400 font-medium">
                    SECURE PAY
                  </span>
                </div>
              </div>

            </Card>
          </div>

        </div>

        {/* BOTTOM SECTION: WHAT OUR GUESTS SAY */}
        <div className="space-y-6 pt-6 border-t border-slate-200/70">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-bold text-slate-900">
              What Our Guests Say
            </h2>

            <div className="flex items-center gap-1.5 border border-slate-200 rounded-md px-2.5 py-1 text-xs text-slate-600 bg-white shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span className="font-bold text-slate-800">4.9</span>
              <span className="text-slate-400">1,248 verified reviews</span>
            </div>
          </div>

          {/* 3 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-white rounded-sm border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 flex flex-col justify-between"
              >
                <CardContent className="p-0 space-y-3">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.maxRating }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating
                            ? "fill-[#F59E0B] text-[#F59E0B]"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-4">
                    {review.comment}
                  </p>
                </CardContent>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-4">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="text-xs font-bold text-[#3B3388] leading-none mb-0.5">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-normal leading-none">
                      {review.country}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
