import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { countries } from "../constants";
import { h6 } from "../assets";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Service() {
  const [active, setActive] = useState(countries[0]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };


  const SlideCard = ({ id, images }) => {
    return (
      <>
        <Swiper
          key={`swiper-${id}`}
           // Set initial slidesPerView based on the screen size
          slidesPerView={window.innerWidth >= 768 ? 3 : 1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".custom-prev", // Use a class selector for your custom previous arrow
            nextEl: ".custom-next", // Use a class selector for your custom next arrow
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          on={{
            slideChange: handleSlideChange,
          }}
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <img
                  src={`${image}`}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "300px",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };

  return (
    <div className={`lg:ml-[135px] md:ml-[60px] ml-[30px] mt-40`} id="services">
      <div className="w-[260px] md:text-3xl text-2xl font-semibold font-Manrope leading-10">
        <h2>We’re already around Americas.</h2>
      </div>
      <div className="pt-5 flex md:flex-row flex-col gap-2 items-center">
        <div className="md:w-[15%] flex md:flex-col flex-row md:mb-0 mb-5 gap-7">
          {countries.map((country) => (
            <div className="flex gap-2 ">
              <div className="">
                <span
                  key={(country) => country.id}
                  className={`${
                    active === country ? "text-secondaryHover" : "text-tertiary"
                  } md:text-sm text-xs font-medium inline-block hover:text-secondaryHover cursor-pointer `}
                  onClick={() => {
                    setActive(country);
                  }}
                >
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-[85%] w-full">
          {countries.map(
            (country, index) =>
              active === country && (
                <div className="" key={`country-${country.id}`}>
                <div className="custom-navigation flex gap-10 justify-end pr-20 pb-5">
                <div className="custom-prev cursor-pointer">
                      <FaArrowLeftLong
                        style={{
                          color: isAtStart ? "#999999" : "#000000",
                        }}
                      />
                    </div>
                    <div className="custom-next cursor-pointer">
                      <FaArrowRightLong
                        style={{
                          color: isAtEnd ? "#999999" : "#000000",
                        }}
                      />
                    </div>
                  </div>

                  <SlideCard {...country} />
                </div>
              )
          )}
        </div>
      </div>

      {/* Service 2 */}
      <div className="relative md:mt-40 mt-20 pt-14 md:pl-16 pl-0 pr-8 md:w-full">
          <div className="w-full bg-[#D6EBE4] py-16 px-15 flex md:justify-end justify-start gap-10">
              <div className="w-[40%] h-[80%] absolute md:block hidden left-0 top-0 shadow-2xl"
              style={{
                backgroundImage: `url(${h6})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              />
              
              <div className="md:w-1/2 flex md:justify-start justify-center">
                  <div className="w-[80%] flex flex-col gap-8">
                     <h3 className="lg:text-3xl text-2xl font-semibold font-Manrope">All the stuff you need and none that you don’t</h3>
                     <p className="text-[#545A58] text-sm leading-normal lg:w-[80%] md:w-full">Crafted with care by the authors of Oshine, a best seller with over 25K customers. Take complete control of your website.</p>
                     <div className="grid grid-cols-3 gap-x-16 gap-y-10">
                          <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Budget</h4>
                              <p className="text-[#545A58] text-xs">Confidential</p>
                           </div>  
                           <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Size</h4>
                              <p className="text-[#545A58] text-xs">1200 m2</p>
                           </div>
                           <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Type</h4>
                              <p className="text-[#545A58] text-xs">Office</p>
                           </div>
                           <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Status</h4>
                              <p className="text-[#545A58] text-xs">Done</p>
                           </div>
                           <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Location</h4>
                              <p className="text-[#545A58] text-xs">Switzerland</p>
                           </div>
                           <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold">Flat</h4>
                              <p className="text-[#545A58] text-xs">8 Room</p>
                           </div>
                     </div>

                     <Link to=""
                        className="text-center text-white lg:text-base md:text-sm text-xs font-medium bg-[#F85A47] py-3 rounded-[5px] mt-4 lg:px-0 md:px-2"
                      >
                          YES! I WANT BOOK “OFFICE PACKAGE”
                     </Link>
                  </div>
                
              </div>
          </div>
         
      </div>
    </div>
  );
}

export default Service;
