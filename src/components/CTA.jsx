import React from 'react'
import { Link } from 'react-router-dom'
import { h10 } from '../assets'

function CTA() {
  return (
    <div className="relative lg:mx-[135px] md:mx-[60px] mx-[30px] md:mt-40 mt-10 mb-40 pt-14 md:pl-60">
          <div className="w-full bg-[#EDF3FF] py-16 px-15 flex md:justify-end justify-center gap-10 rounded-tr-[5rem] rounded-bl-[5rem]">
              <div className="lg:w-[40%] md:w-[50%] h-[90%] absolute md:block hidden left-0 top-0 shadow-inner rounded-tl-[5rem] rounded-br-[5rem] "
              style={{
                backgroundImage: `url(${h10})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              />
              
              <div className="md:w-[67%] w-full flex md:justify-start justify-center">
                  <div className="w-[80%] flex flex-col gap-5">
                     <h1 className="lg:text-4xl md:text-2xl font-semibold leading-10 font-Manrope">Trusted by over 250,000 businesses owners worldwide</h1>
                     <p className="text-[#545A58] lg:text-lg text-base font-normal leading-normal lg:w-[80%] md:w-full">Start your business for $0+ state fees.
Clear Pricing. No Contracts. No Surprises.</p>
                     <Link to=""
                        className="text-center text-white lg:text-base md:text-sm text-xs font-medium bg-[#F85A47] py-4 rounded-[5px] mt-4 px-10 w-fit"
                      >
                          Get Started
                     </Link>
                  </div>
                
              </div>
          </div>
         
      </div>
  )
}

export default CTA