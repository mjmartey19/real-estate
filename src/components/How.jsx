import React from "react";
import { Hero } from "../constants";
import { home } from "../assets/index.js";
import { BsArrowRight } from "react-icons/bs";

const HeroCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col md:gap-4 gap-2">
        <div>
          <img src={icon} alt="" />
        </div>

        <div className="w-[310px] md:text-xl text-lg font-bold leading-[35px]">
          <h3>{title}</h3>
        </div>
        <p className="text-[15px] ">{description}</p>
      </div>
      <div className="px-4 py-3 bg-secondary hover:bg-secondaryHover w-15 h-10 rounded-[5px] cursor-pointer">
        <BsArrowRight color="white" />
      </div>
    </div>
  );
};

function How() {
  return (
    <div className="lg:mx-[135px] md:mx-[60px] mx-[30px] my-20 relative">
      <div className="flex  md:flex-nowrap flex-wrap items-center gap-10">
        {Hero.map((hero, index) => (
          <HeroCard key={`hero-${index}`} {...hero} />
        ))}
      </div>
    </div>
  );
}

export default How;
