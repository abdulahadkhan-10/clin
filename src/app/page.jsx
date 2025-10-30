import AboutUsHome from '@/component/home/about/page'
import MedicalBanner from '@/component/home/medical/medical'
import ModesSection from '@/component/home/modessection/page'
import MissionVision from '@/component/home/ourvision/page.jsx'
import Services from '@/component/home/service/service'
import TestimonialsSection from '@/component/home/Testimonials/page'
import React from 'react'

const page = () => {
  return (
    <div>
      < MedicalBanner/>
        <AboutUsHome/>
        <ModesSection/>
        <Services/>
        <MissionVision/>
      <TestimonialsSection/>
      
    </div>
  )
}

export default page