"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  Sparkles,
  Menu,
  Sun,
  UtensilsCrossed,
  LifeBuoy,
  Bike,
  RotateCcw,
  TreePine,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. DUMMY JSON DATA
// ==========================================
export interface HolidayPark {
  id: string;
  badgeLocation: string;
  rating: string;
  image: string;
  title: string;
  location: string;
  description: string;
  startingPrice: string;
  availableProperties: number;
}

export const holidayParksData: HolidayPark[] = [
  {
    id: "1",
    badgeLocation: "VELUWE, NETHERLANDS",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
    title: "Silverlake Retreat",
    location: "Salzkammergut Alps, Austria",
    description:
      "Waterfront cabins with private saunas, floating decks and uninterrupted lake views.",
    startingPrice: "€129",
    availableProperties: 42,
  },
  {
    id: "2",
    badgeLocation: "VELUWE, NETHERLANDS",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    title: "Silverlake Retreat",
    location: "Salzkammergut Alps, Austria",
    description:
      "Waterfront cabins with private saunas, floating decks and uninterrupted lake views.",
    startingPrice: "€129",
    availableProperties: 42,
  },
  {
    id: "3",
    badgeLocation: "VELUWE, NETHERLANDS",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
    title: "Silverlake Retreat",
    location: "Salzkammergut Alps, Austria",
    description:
      "Waterfront cabins with private saunas, floating decks and uninterrupted lake views.",
    startingPrice: "€129",
    availableProperties: 42,
  },
  {
    id: "4",
    badgeLocation: "VELUWE, NETHERLANDS",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    title: "Silverlake Retreat",
    location: "Salzkammergut Alps, Austria",
    description:
      "Waterfront cabins with private saunas, floating decks and uninterrupted lake views.",
    startingPrice: "€129",
    availableProperties: 42,
  },
  {
    id: "5",
    badgeLocation: "VELUWE, NETHERLANDS",
    rating: "4.92",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    title: "Silverlake Retreat",
    location: "Salzkammergut Alps, Austria",
    description:
      "Waterfront cabins with private saunas, floating decks and uninterrupted lake views.",
    startingPrice: "€149",
    availableProperties: 28,
  },
];

// Feature amenities icons row
const amenityIcons = [
  Sparkles,
  Menu,
  Sun,
  UtensilsCrossed,
  LifeBuoy,
  Bike,
  RotateCcw,
  TreePine,
];


export default function FeaturedHolidayParks({
  parks = holidayParksData,
}: {
  parks?: HolidayPark[];
}) {
  return (
    <section className="w-full bg-[#EEF2F6] py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Header Row: Title & Navigation Arrows */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E293B]">
              Featured Holiday Parks
            </h2>

            {/* Custom Styled Shadcn Carousel Arrows */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs" />
              <CarouselNext className="static translate-y-0 h-9 w-9 border-slate-300 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-xs" />
            </div>
          </div>

          {/* Cards Carousel Content */}
          <CarouselContent >
            {parks.map((item) => (
              <CarouselItem
                key={item.id}
                className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="h-full border-none pt-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-sm overflow-hidden bg-white flex flex-col justify-between">
                  <div>
                    {/* Top Image Box with Badges */}
                    <div className="relative h-[210px] w-full bg-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Location Badge (Top-Left) */}
                      <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 text-white">
                        <MapPin className="w-3 h-3 text-white/80" />
                        <span className="text-[9px] font-medium tracking-wide uppercase">
                          {item.badgeLocation}
                        </span>
                      </div>

                      {/* Rating Badge (Top-Right) */}
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1 text-white">
                        <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                        <span className="text-[11px] font-semibold">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <CardContent className="p-5 pb-3">
                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1 mb-2.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs text-slate-500 font-normal">
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Amenities Circular Icons Row */}
                      <div className="flex items-center justify-between pt-4 pb-2 border-b border-slate-100">
                        {amenityIcons.map((Icon, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            <Icon className="w-3 h-3 stroke-[1.5]" />
                          </div>
                        ))}
                      </div>

                      {/* Pricing Details */}
                      <div className="flex items-baseline justify-between pt-3">
                        <div>
                          <p className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase">
                            STARTING FROM
                          </p>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-base font-bold text-[#3B3388]">
                              {item.startingPrice}
                            </span>
                            <span className="text-[10px] text-slate-400 font-normal">
                              /night
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] text-slate-400 font-normal">
                          {item.availableProperties} properties available
                        </span>
                      </div>
                    </CardContent>
                  </div>

                  {/* Explore Button */}
                  <div className="p-5 pt-0">
                    <Button className="w-full bg-[#3B3388] hover:bg-[#2F296D] text-white text-xs font-semibold py-2.5 rounded-sm transition-colors shadow-none cursor-pointer">
                      Explore Park
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
