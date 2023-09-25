import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, payment_method, star_filled } from '../assets'
import { company, connects, experts } from '../constants'

function Footer() {
  const [compActive, setCompActive] = useState("")
  const [conActive, setConpActive] = useState("")
  const [expertActive, setexpertActive] = useState("")
  return (
    <div className='lg:px-[135px] md:px-[60px] px-[30px]'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-20 gap-y-10 pb-20'>
            <div className='w-56'>
              <img src={logo} alt="logo" />
              <p className="text-[#101130] text-base font-normal font-['Inter'] leading-normal mt-5 mb-10">This is a truly spectacular theme! The custom page builder is definitely</p>
              <img src={payment_method} alt="payment_method"/>
            </div>
            <div className='w-32'>
                 <p className="text-base font-medium mb-6">Company</p>
                  <ul className="list-none md:flex flex-col gap-5">
                  {company.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        compActive === link.title ? "text-secondaryHover" : "text-primaryHover"
                      } hover:text-secondaryHover md:text-[17px] text-[15px] font-normal cursor-pointer w-fit`}
                      onClick={() => setCompActive(link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
            </div>
            <div className='w-52'>
                 <p className="text-base font-medium mb-6">Connect</p>
                  <ul className="list-none md:flex flex-col gap-5">
                  {connects.map((link) => (
                    <li
                      key={link.connect}
                      className={`${
                        conActive === link.connect ? "text-secondaryHover" : "text-primaryHover"
                      } hover:text-secondaryHover md:text-[17px] text-[15px] font-normal cursor-pointer w-fit`}
                      onClick={() => setConpActive(link.connect)}
                    >
                      <a href={`#${link.connect}`}>{link.connect}</a>
                    </li>
                  ))}
                </ul>
            </div>
            <div className='w-52'>
                 <p className="text-base font-medium mb-6">Experts</p>
                  <ul className="list-none md:flex flex-col gap-5">
                  {experts.map((link) => (
                    <li
                      key={link.expert}
                      className={`${
                        expertActive === link.expert ? "text-secondaryHover" : "text-primaryHover"
                      } hover:text-secondaryHover md:text-[17px] text-[15px] font-normal cursor-pointer w-fit`}
                      onClick={() => setexpertActive(link.expert)}
                    >
                      <a href={`#${link.expert}`}>{link.expert}</a>
                    </li>
                  ))}
                </ul>
            </div>
            <div>
                <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    src={star_filled}
                    alt="star"
                    key={i}
                  />
                ))}
              
                </div>
                 <p className="w-44 text-slate-900 text-base font-normal font-['Inter'] leading-relaxed mt-5">4190 jobs completed successfully with 97.4% 5 star reviews</p>
            </div>
        </div>
        <div className='flex justify-between pb-10'>
           <p className="text-[#101130] text-sm font-normal">©2021 Besnik. All rights reserved.</p>
           <div className='flex gap-4'>
           <Link
           to=""
            className="text-[#101130] text-sm font-normal">Terms</Link>
           <Link 
           to=""
           className="text-[#101130] text-sm font-normal">Privacy</Link>
           </div>
        </div>
    </div>
  )
}

export default Footer