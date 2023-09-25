import React from "react";
import { styles } from "../styles";
import { h1 } from "../assets";


function Hero() {
  return (
    
    <div className="h-screen">
      <div className="flex relative bg-[url('./assets/houses/hero.png')] bg-no-repeat bg-cover sm:bg-none h-full">
        <div className={`bg-none md:w-1/2 md:pt-[135px] pt-[100px] lg:pl-[110px] md:pl-[80px] pl-[40px]  z-2 h-[79%]
        `}
        >
          <div className="w-[90%]">
            <h1 className=" sm:text-black text-white md:text-5xl text-4xl font-Manrope font-black md:leading-[60px] leading-[40px]">
              Find the perfect place to stay with your family
            </h1>
            <p className="w-[90%] md:text-[16px] sm:text-[12] text-[10] font-normal leading-7 sm:text-tertiary text-white mt-3">
              Besnik is insanely flexible and amazingly easy to use. This alone
              would be enough for a 5 star rating.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${h1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 100 + "vh",
          }}
          className="sm:w-1/2 z-0 flex flex-col items-center"
        >
    
          </div>
        
        <div
          className={`py-5 bg-white absolute left-0 right-0 lg:max-w-[1120px] md:max-w-[700px] max-w-[360px] mx-auto  md:bottom-[100px] sm:bottom-[80px] bottom-[60px] rounded-[10px] shadow border border-neutral-100 pl-10 pr-5`}
        >
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2  gap-4">
            <div className="flex flex-col justify-center">
              <p className="text-neutral-800 text-[12px] font-semibold font-Inter">
                Location
              </p>
              <p className="text-zinc-400 text-[12px] font-Inter">
                Where are you going?
              </p>
            </div>
            <div className="flex  gap-4 items-center">
              <div className="w-[1px] h-[70%] bg-zinc-400" />
              <div>
                <p className="text-neutral-800 text-[12px] font-semibold font-Inter">
                  Check in
                </p>
                <p className="text-zinc-400 text-[12px] font-Inter">
                  Add dates
                </p>
              </div>
            </div>
            <div className="flex  gap-4 items-center">
              <div className="w-[1px] h-[70%] bg-zinc-400" />
              <div>
                <p className="text-neutral-800 text-[12px] font-semibold font-Inter">
                  Check out
                </p>
                <p className="text-zinc-400 text-[12px] font-Inter">
                  Add dates
                </p>
              </div>
            </div>
            <div className="flex  gap-4 items-center">
              <div className="w-[1px] h-[70%] bg-zinc-400" />
              <div>
                <p className="text-neutral-800 text-[12px] font-semibold font-Inter">
                  Location
                </p>
                <p className="text-zinc-400 text-[12px] font-Inter">
                  Where are you going?
                </p>
              </div>
            </div>
            <div className="flex  gap-4 items-center">
              <div className="w-[1px] h-[70%] bg-zinc-400" />
              <div>
                <p className="text-neutral-800 text-[12px] font-semibold font-Inter">
                  Rent workspace
                </p>
              </div>
            </div>
            <a
              href=""
              className="text-white text-[12px] bg-secondaryHover hover:bg-secondary transition duration-200 ease-linear rounded-[5px] py-3 px-4 flex justify-center items-center gap-2"
            >
              <span> 564 property found </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.8487 11.8487L15 15M7.35504 13.7101C10.8648 13.7101 13.7101 10.8648 13.7101 7.35504C13.7101 3.84525 10.8648 1 7.35504 1C3.84525 1 1 3.84525 1 7.35504C1 10.8648 3.84525 13.7101 7.35504 13.7101Z"
                    stroke="white"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
