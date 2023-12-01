import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import HowWorks from '@/components/HowWorks'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <HowWorks></HowWorks>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default page