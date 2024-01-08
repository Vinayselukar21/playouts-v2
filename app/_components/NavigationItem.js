import React from "react";
import Image from "next/image";

import Link from "next/link";

export const NavigationItem = ({
  dropdown,
  image,
  name,
  linkName,
  linkRedirect,
  navItem,
  iconPath,
  buttonTxt,
}) => {
  return (
    <>
      {dropdown && (
        <div className="flex gap-[12px] h-[42px] mx-auto items-center w-[192px]">
          <div className="h-[40px] w-[40px]">
            <Image alt="comapnyImage" src={image} height={39} width={39} />
          </div>
          <div className="w-[108px]">
            <p className="text-[#FFFFFF] text-[15px] font-bold-500 leading-[22px]">
              {name}
            </p>
            <Link
              href={linkRedirect}
              className="text-white font-bold-400 text-[13px] leading-[16px] underline"
            >
              {linkName}
            </Link>
          </div>
          <div className="h-[20px] w-[20px]">
            <svg
              width="15"
              className="relative top-[6.88px] left-[2.5px]"
              height="8.68"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      )}
      {navItem && (
        <button className="flex gap-[12px] h-[36px] mx-auto items-center w-[208px] border border-none rounded-[4px] py-[8px] px-[16px] bg-[#1E2640] hover:bg-opacity-10 hover:bg-[#FFFFFF]">
          <div className=" h-[20px] w-[20px] opacity-80">{iconPath}</div>
          <div>
            <p className="text-[#FFFFFF] text-[14px] font-bold-500 leading-[20px]">
              {buttonTxt}
            </p>
          </div>
        </button>
      )}
    </>
  );
};
