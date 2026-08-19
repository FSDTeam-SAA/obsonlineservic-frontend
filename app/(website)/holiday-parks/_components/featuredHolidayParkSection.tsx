"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export interface DestinationItem {
  id: string;
  name: string;
  parksCount: number;
  imageUrl: string;
}

export const initialDestinationsData = {
  title: "Featured Holiday Park",
  totalFoundText: "256 Holiday Parks Found",
  filterOptions: {
    countries: ["All Countries", "Netherlands", "Germany", "Belgium", "Austria", "France"],
    guests: ["Any Guests", "1-2 Guests", "3-4 Guests", "5+ Guests"],
    types: ["Any Type", "Villas", "Lodges", "Cabins", "Resorts"],
    facilities: ["Facilities", "Swimming Pool", "Spa & Wellness", "Free WiFi", "Pet Friendly"],
    time: ["Any Time", "This Weekend", "Next Month", "Summer Season"],
  },
  destinations: [
    {
      id: "1",
      name: "Netherlands",
      parksCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Germany",
      parksCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Belgium",
      parksCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Austria",
      parksCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "5",
      name: "France",
      parksCount: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "6",
      name: "Switzerland",
      parksCount: 12,
      imageUrl:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop",
    },
  ],
};

interface FeaturedHolidayParkProps {
  data?: typeof initialDestinationsData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function FeaturedHolidayParkSection({
  data = initialDestinationsData,
}: FeaturedHolidayParkProps) {
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedGuests, setSelectedGuests] = useState("Any Guests");
  const [selectedType, setSelectedType] = useState("Any Type");
  const [selectedFacility, setSelectedFacility] = useState("Facilities");
  const [selectedTime, setSelectedTime] = useState("Any Time");

  return (
    <section className="w-full bg-[#EEF2F6] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto space-y-7">
        
        {/* Top Header Row: Filter Pills (Left) & Result Count (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Filter Pills with Dropdown Chevrons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            
            {/* Countries Filter */}
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="appearance-none bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 pr-7 text-xs font-normal text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {data.filterOptions.countries.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Guests Filter */}
            <div className="relative">
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
                className="appearance-none bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 pr-7 text-xs font-normal text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {data.filterOptions.guests.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Types Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 pr-7 text-xs font-normal text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {data.filterOptions.types.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Facilities Filter */}
            <div className="relative">
              <select
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="appearance-none bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 pr-7 text-xs font-normal text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {data.filterOptions.facilities.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Time Filter */}
            <div className="relative">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="appearance-none bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 pr-7 text-xs font-normal text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {data.filterOptions.time.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Right Text */}
          <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            {data.totalFoundText}
          </span>
        </div>

        {/* Carousel Container */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Second Row: Heading & Navigation Arrows */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {data.title}
            </h2>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-8 w-8 rounded-full border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs" />
              <CarouselNext className="static translate-y-0 h-8 w-8 rounded-full border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs" />
            </div>
          </div>

          {/* Cards List / Slider View */}
          <CarouselContent className="-ml-4">
            {data.destinations.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="group relative h-[340px] w-full overflow-hidden rounded-sm bg-slate-200 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-md">
                  {/* Destination Cover Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Text Details at Card Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white pointer-events-none">
                    <span className="block text-[11px] font-normal text-slate-300 tracking-wide mb-0.5">
                      {item.parksCount} Parks
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-tight tracking-tight text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
