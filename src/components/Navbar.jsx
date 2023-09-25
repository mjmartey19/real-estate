import React, { useState } from "react";
import { Link } from "react-router-dom"; //Use to navigate to other part of our page

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

function Navbar() {
  const [active, setActive] = useState(navLinks[0].title);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="absolute top-0 z-20 w-full">
        <div
          className={`${styles.paddingY} lg:px-[100px] md:px-[80px] px-[40px] w-full flex justify-between items-center `}
        >
          <Link
            to="/"
            onClick={() => {
              setActive("");
              Window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" width={120} />
          </Link>

          <ul className="list-none hidden md:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-primaryHover" : "text-tertiary"
                } hover:text-primaryHover md:text-[17px] text-[15px] font-normal cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <a
            href=""
            className="text-white md:text-[17px] text-[15px] font-medium bg-primary hover:bg-primaryHover transition duration-200 ease-linear rounded-[5px] py-2 md:px-6 px-5 md:flex hidden"
          >
            Sign up
          </a>

          <div className="md:hidden flex flex-1 justify-end items-center cursor-pointer">
            <img src={menu} alt="menu" onClick={() => setToggle(!toggle)} />
          </div>
        </div>

          {/* Mobile version */}
        <div
          className={`${
            !toggle ? "left-[-100%]" : "block"
          } bg-white px-3 py-8 h-screen fixed top-0 left-0 lg:hidden transition-all duration-900 w-80 z-50 shadow-md`}
        >
            <div className="flex justify-between items-center w-full px-2 cursor-pointer">
            <img src={logo} alt="logo" />
            <img src={close} width={15} alt="close" onClick={() => setToggle(!toggle)} />
          </div>
          <ul className="list-none w-full mt-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-primaryHover" : "black"
                } hover:text-primaryHover text-[17px] font-normal cursor-pointer flex justify-center py-5 border-y-[0.7px] border-[#dfe9e5]`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="text-white text-[17px] font-medium bg-primary hover:bg-primaryHover transition duration-200 ease-linear rounded-[5px] py-2 px-6 flex justify-center sm:hidden mt-10"
          >
            Sign up
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
