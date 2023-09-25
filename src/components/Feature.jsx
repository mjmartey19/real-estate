import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { properties } from '../constants'

function Feature() {
  const [active, setActive] = useState(properties[0].name);

  const PropertyCards = ({images}) => {
    return (
       <div className='flex flex-wrap gap-7'>
          {
            images.map(image => {
              console.log(image.featured)
              return (
              <div className="lg:w-[310px] md:w-[300px] w-[340px] h-[290px] rounded-md p-4 flex gap-3"
                 style={{
                backgroundImage: `url(${image.house})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              >
                {image.featured && 
                  <p className="text-white text-xs font-normal bg-black bg-opacity-40 rounded border border-white py-1 px-3 w-fit h-fit ">Featured</p>
                }

                {image.threeD && 
                  <p className="text-white text-xs font-normal bg-black bg-opacity-40 rounded border border-white py-1 px-3 w-fit h-fit ">3D</p>
                }
               
              </div>
              )
            })
          }
       </div>
    )
  }

  return (
    <div className='lg:mx-[135px] md:mx-[60px] mx-[30px] mt-40 mb-32'>
        <div className='flex flex-wrap justify-between gap-5 pb-10'>
            <div>
                 <h3 className="md:text-4xl text-3xl font-semibold font-Manrope pb-4">Best Real Estate Deals</h3>
                 <p className="lg:w-[29rem] w-[25rem] md:text-base text-sm font-normal leading-normal">We collaborate with organizations that are keen to transform the legal industry with tech.</p>
            </div>
            <Link
            to="/"
            className="text-white md:text-base text-xs font-medium px-6 md:py-5 py-4 h-fit bg-secondary hover:bg-secondaryHover rounded"
            >
               View All Property
            </Link>
        </div>

        <div className='flex flex-col gap-10'>
            <div className='flex md:gap-10 gap-5'>
                {properties.map((property, index) => (
                    <p 
                    key={`property-${index}`}
                    className={`${active == property.name && "text-secondary border-b-2 border-secondary"} md:text-lg text-sm font-normal pb-4 hover:border-b-2 hover:border-secondary hover:text-secondary cursor-pointer`}
                    onClick={() => {
                      setActive(property.name)
                    }}
                    >
                    {property.name}
                    </p>
                )) }
            </div>
            <div className=''>
              {properties.map((property) => (
                  active === property.name && 
                    <PropertyCards
                    key={`property-${property.name}`}
                    {...property}
                   />
                  ))}
            </div>
        </div>
    </div>
  )
}

export default Feature