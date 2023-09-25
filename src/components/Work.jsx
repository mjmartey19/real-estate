import React from 'react'
import { works } from '../constants'

const WorkCard = ({color, icon, title, description}) => {
    return (
        <div className='xs:w-[320px] w-full flex flex-col gap-8 justify-center items-center'>
            <div className={`w-[90px] h-[90px] rounded-[20px] ${color} flex flex-wrap justify-center items-center`}>
                 <img src={icon} alt={title} />
            </div>
            <div>
                <h1 className="text-[22px] font-semibold font-Manrope text-center">{title}</h1>
                <p className="w-[260px] text-center text-zinc-800 text-base font-normal font-['Roboto'] leading-relaxed mt-3">{description}</p>
            </div>
          
        </div>
        
    )
}

function Work() {
  return (
    <div className='md:mt-40 mt-20'>
        <h1 className="text-center text-[40px] font-semibold font-Manrope mb-14">
        How it works?
        </h1>
        <div className='flex flex-wrap gap-10 justify-center'>
            {works.map((work, index) => (
               <WorkCard
                key={`work-${index}`} 
                {...work}
                /> 
            ))}
        </div>
    </div>
  )
}

export default Work