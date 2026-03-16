import React from 'react'

import Hero from "../components/home/Hero"
import SignatureCollections from "../components/home/SignatureCollections"
import RoyalHeritage from "../components/home/RoyalHeritage"
import NewArrivals from "../components/home/NewArrivals"
import PremiumFeatures from "../components/home/PremiumFeatures"
import TestimonialSlider from "../components/home/TestimonialSlider"
import JoinSection from "../components/home/JoinSection"

const page = () => {
  return (
    <div>
      <Hero />
      <SignatureCollections />
      <RoyalHeritage />
      <NewArrivals />
      <PremiumFeatures />
      <TestimonialSlider />
      <JoinSection />
    </div>
  )
}

export default page
