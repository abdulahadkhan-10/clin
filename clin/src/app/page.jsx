import AboutUsHome from '@/component/home/about/page'
import ModesSection from '@/component/home/modessection/page'
import MissionVision from '@/component/home/ourvision/page.jsx'
import TestimonialsSection from '@/component/home/Testimonials/page'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUsHome/>
        <ModesSection/>
        <MissionVision/>
      <TestimonialsSection/>
      
    </div>
  )
}

export default page
