import React from 'react'
import RetreatHeroBanner from '../../_sections/RetreatHeroBanner'
import ForestSanctuarySection from './_components/ForestSanctuarySection'
import AvailableHolidayHomes from './_components/AvailableHolidayHomes'
import { Reveal } from '@/components/reveal'
import HolidayExperiences from '../../_sections/HolidayExperiences'
import ResortAmenitiesSection from './_components/ResortAmenitiesSection'

const page = () => {
  return (
    <div>
        <Reveal delay={40}><RetreatHeroBanner/></Reveal>
        <Reveal delay={40}><ForestSanctuarySection/></Reveal>
        <Reveal delay={40}><AvailableHolidayHomes/></Reveal>
         <Reveal delay={40}><HolidayExperiences /></Reveal>
         <Reveal delay={40}><ResortAmenitiesSection/></Reveal>
    </div>
  )
}

export default page