import Contact from '@/components/Contact'
import HowWorks from '@/components/HowWorks'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <Testimonials></Testimonials>
        <HowWorks></HowWorks>
        <Contact></Contact>
    </div>
  )
}

export default page