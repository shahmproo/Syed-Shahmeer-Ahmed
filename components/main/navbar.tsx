import { Socials } from "@/constant";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <div className="flex flex-col ml-[10px]">
            <span className="font-bold text-gray-300 text-sm md:text-base">
              
            </span>
            <span className="font-bold text-gray-300 text-xs md:text-sm">Syed Shahmeer Ahmed</span>
          </div>
        </a>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] py-[5px] md:px-[20px] md:py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer mx-2 md:mx-4 text-xs md:text-sm">
              About me
            </a>
            <a href="#skills" className="cursor-pointer mx-2 md:mx-4 text-xs md:text-sm">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-2 md:mx-4 text-xs md:text-sm">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;