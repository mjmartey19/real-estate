import React, { useState } from "react";
import { testimonials } from "../constants";
import { star_filled, star_unfilled, airbnb, cisco, ebay, uber, microsoft } from "../assets";


function Testimonial() {

  const TestimonialCard = ({ testimonial, name, position, image }) => {
    const [starStates, setStarStates] = useState([false, false, false, false, false]);

    const toggleStar = (index) => {
      const newStarStates = [...starStates];
      newStarStates[index] = !newStarStates[index];
      setStarStates(newStarStates);
    };
  
    return (
      <div className="sm:w-[330px] w-full py-10 px-8 rounded-[10px] border border-[#EBEBEB] flex flex-col flex-wrap gap-7 hover:shadow-card hover:border-none bg">
        <div className="flex gap-1">
        {starStates.map((isFilled, i) => (
          <img
            src={isFilled ? star_filled : star_unfilled}
            alt="star"
            key={i}
            onClick={() => toggleStar(i)}
            className="cursor-pointer"
          />
        ))}
      
        </div>
        <p className="text-[#333333] text-sm font-normal leading-7">
          Vast Conference is second to none. Lorem ipsum dolor sit amet, vnbvbv
          consectetur adipiscing elit. Congue pharetra non.
        </p>
        <div className="flex gap-5">
          <div className="w-12 h-12 bg-[#FDADAC] rounded-full flex items-center justify-center">
            <img
              src={image}
              alt="profile"
              className="w-full h-full rounded-full bg-cover"
            />
          </div>

          <div>
            <h4 className="text-[#333333] text-sm font-medium">
              Natalie Hernandez
            </h4>
            <p className="text-[#666666] text-xs font-normal">CEO @Stacksy</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="lg:ml-[135px] md:ml-[60px] ml-[30px] mt-32 pr-5">
      <h1 className="md:w-[570px] w-full lg:text-4xl md:text-3xl text-2xl font-semibold font-Manrope leading-normal mb-16">
        Loved by businesses, and individuals across the globe.
      </h1>
      <div className="flex flex-wrap gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
        ))}
      </div>

      {/* Company logos */}
      <div className="flex justify-center">
      <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-16 gap-5 mt-20">
          <div className="md:col-span-2 flex flex-wrap lg:gap-x-16 md:gap-10 gap-5">
             <img src={airbnb} className="w-16" />
             <img src={cisco} className="w-10"/>
             <img src={ebay} className="w-10"/>
             <img src={uber} className="w-16"/>
             <img src={microsoft} className="w-16"/>
          </div>
          <div className="">
          <p className="lg:w-64 md-full text-[#333333] text-sm leading-normal">Give us a Call 1-888-498-9240 and we can set you up, or <span className="text-[#2CBDE7] underline leading-normal">check our pricing plans</span></p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Testimonial;
