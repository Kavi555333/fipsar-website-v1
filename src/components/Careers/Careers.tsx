// import React from 'react'
import Whywork from './Whywork'
import JobSection from './JobSection'
import BenefitsSection from './BenefitsSection'
import CultureValuesSection from './CultureValuesSection'
import HeroSection from './HeroSection'


const Careers = () => {
  return (
    <>
    <HeroSection/>
        <Whywork/> 
        <JobSection/>
        {/* <CultureAndValues/> */}
       <CultureValuesSection/>
       <BenefitsSection/>
    </>
  )
}

export default Careers
