"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Dog,
  Ban,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. DATA TYPES & DUMMY JSON
// ==========================================
export type PropertyCategory =
  | "All Properties"
  | "Lakefront"
  | "Cabins & Lodges"
  | "Wellness Villas";

export interface PropertyItem {
  id: string;
  badge: string;
  rating: string;
  image: string;
  title: string;
  location: string;
  category: PropertyCategory;
  guests: number;
  beds: number;
  baths: number;
  petsAllowed: boolean;
  price: string;
  priceSubtext: string;
}

export const initialPropertiesData: PropertyItem[] = [
  {
    id: "1",
    badge: "PREMIUM VILLA",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    title: "Veluwe Forest Resort",
    location: "Veluwe Forest Resort, NL",
    category: "Wellness Villas",
    guests: 4,
    beds: 2,
    baths: 2,
    petsAllowed: true,
    price: "€129",
    priceSubtext: "Price for per nights · Up to 4 guests included",
  },
  {
    id: "2",
    badge: "LUXURY VILLA",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
    title: "Veluwe Forest Resort",
    location: "Veluwe Forest Resort, NL",
    category: "Lakefront",
    guests: 4,
    beds: 2,
    baths: 2,
    petsAllowed: false,
    price: "€129",
    priceSubtext: "Price for per nights · Up to 4 guests included",
  },
  {
    id: "3",
    badge: "A-FRAME LODGE",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
    title: "Veluwe Forest Resort",
    location: "Veluwe Forest Resort, NL",
    category: "Cabins & Lodges",
    guests: 4,
    beds: 2,
    baths: 2,
    petsAllowed: true,
    price: "€129",
    priceSubtext: "Price for per nights · Up to 4 guests included",
  },
  {
    id: "4",
    badge: "ALPINE CHALET",
    rating: "4.88",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    title: "Veluwe Forest Resort",
    location: "Veluwe Forest Resort, NL",
    category: "Wellness Villas",
    guests: 4,
    beds: 2,
    baths: 2,
    petsAllowed: false,
    price: "€129",
    priceSubtext: "Price for per nights · Up to 4 guests included",
  },
];

const categoryTabs: PropertyCategory[] = [
  "All Properties",
  "Lakefront",
  "Cabins & Lodges",
  "Wellness Villas",
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function PopularHolidayProperties() {
  const [selectedCategory, setSelectedCategory] =
    useState<PropertyCategory>("All Properties");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Toggle Favorite
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter based on active tab
  const filteredProperties = useMemo(() => {
    if (selectedCategory === "All Properties") return initialPropertiesData;
    return initialPropertiesData.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section id="properties" className="w-full  py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto space-y-8">
        
        {/* Header: Title & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Popular Holiday Properties
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                    isActive
                      ? "bg-[#3B3388] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProperties.map((property) => {
            const isFav = !!favorites[property.id];

            return (
              <Card
                key={property.id}
                className="overflow-hidden rounded-sm border border-slate-200/70 bg-white pt-0 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Image & Badges */}
                  <div className="relative h-[200px] w-full bg-slate-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-white">
                      <span className="text-[9px] font-semibold tracking-wider uppercase">
                        {property.badge}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1 text-white">
                      <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-[11px] font-semibold">
                        {property.rating}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <CardContent className="p-5 pb-3 space-y-3">
                    {/* Title & Favorite Icon */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900">
                        {property.title}
                      </h3>
                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center transition-colors"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-colors ${
                            isFav
                              ? "fill-red-500 text-red-500"
                              : "text-slate-400"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-slate-400 -mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs text-slate-500 font-normal">
                        {property.location}
                      </span>
                    </div>

                    {/* Specs / Amenities Row */}
                    <div className="flex items-center justify-between text-[10.5px] text-slate-400 pt-1 pb-1">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        <span>{property.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5" />
                        <span>{property.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5" />
                        <span>{property.baths} Bath</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {property.petsAllowed ? (
                          <>
                            <Dog className="w-3.5 h-3.5" />
                            <span>Pets Welcome</span>
                          </>
                        ) : (
                          <>
                            <Ban className="w-3.5 h-3.5" />
                            <span>No Animals</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-lg font-bold text-[#3B3388]">
                          {property.price}
                        </span>
                        <span className="text-xs text-slate-400 font-normal">
                          /night
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-normal mt-0.5">
                        {property.priceSubtext}
                      </p>
                    </div>
                  </CardContent>
                </div>

                {/* Bottom 2 Action Buttons */}
                <div className="p-5 pt-1 grid grid-cols-2 gap-2.5">
                  <Button
                    variant="outline"
                    className="w-full text-xs font-semibold text-[#3B3388] border-slate-200 hover:bg-slate-50 rounded-sm h-9"
                  >
                    View Details
                  </Button>
                  <Button className="w-full text-xs font-semibold bg-[#3B3388] hover:bg-[#2F296D] text-white rounded-sm h-9 transition-colors shadow-none">
                    Book Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
