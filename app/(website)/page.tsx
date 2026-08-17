import BookingProcessSection from "./_sections/BookingProcessSection";
import FeaturedDestinations from "./_sections/FeaturedDestinations";
import FeaturedHolidayParks from "./_sections/FeaturedHolidayParks";
import { Hero } from "./_sections/hero";
import HolidayExperiences from "./_sections/HolidayExperiences";
import NewsletterBanner from "./_sections/NewsletterBanner";
import PopularHolidayProperties from "./_sections/PopularHolidayProperties";
import TestimonialsCarousel from "./_sections/TestimonialsCarousel";
import WhyChooseNordicHaven from "./_sections/WhyChooseNordicHaven";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <div className="booking-home space-y-[10px]">
      <Hero />
      <Reveal><FeaturedDestinations /></Reveal>
      <Reveal delay={40}><FeaturedHolidayParks /></Reveal>
      <Reveal delay={40}><PopularHolidayProperties /></Reveal>
      <Reveal delay={40}><WhyChooseNordicHaven /></Reveal>
      <Reveal delay={40}><HolidayExperiences /></Reveal>
      <Reveal delay={40}><BookingProcessSection /></Reveal>
      <Reveal delay={40}><TestimonialsCarousel /></Reveal>
      <Reveal delay={40}><NewsletterBanner /></Reveal>
    </div>
  );
}
