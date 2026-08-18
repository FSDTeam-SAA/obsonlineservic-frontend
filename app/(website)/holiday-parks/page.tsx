import React from "react";
import { Hero } from "../_sections/hero";
import FeaturedHolidayParkSection from "./_components/featuredHolidayParkSection";
import { Reveal } from "@/components/reveal";
import FeaturedHolidayParks from "../_sections/FeaturedHolidayParks";
import PopularHolidayProperties from "../_sections/PopularHolidayProperties";

const page = () => {
  return (
    <div>
      <Reveal>
        <Hero
          title1={"Holiday parks worth"}
          title2={" wandering for"}
          description={`Lakeside cabins, forest retreats and wellness escapes — handpicked
for the way you want to slow down.`}
          img={"/images/aboutHero.png"}
        />
      </Reveal>
      <Reveal delay={40}><FeaturedHolidayParkSection /></Reveal>
      <Reveal delay={80}><FeaturedHolidayParks /></Reveal>
      <Reveal delay={120}>
        <PopularHolidayProperties />
      </Reveal>
    </div>
  );
};

export default page;
