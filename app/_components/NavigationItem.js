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
  onClick,
  baseNav,
  baseNavName,
  availableCredits,
}) => {
  return (
    <div className="flex justify-center flex-col w-full">
      {dropdown && (
        <div className="flex gap-[12px] h-[42px] mx-auto items-center w-full">
          <div className="h-[40px] flex items-center justify-center bg-[#FFFFFF] w-[40px] border-none rounded-[4px]">
            <Image alt="comapnyImage" src={image} height={39} width={39} />
          </div>
          <div className="w-[108px] ]">
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
              +
              <path
                d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      )}
      {navItem && (
        <button
          className="flex gap-[12px] h-[36px] mx-auto items-center w-[208px] border border-none rounded-[4px] py-[8px] px-[16px] bg-[#1E2640] hover:bg-opacity-10 hover:bg-[#FFFFFF]"
          onClick={onClick}
        >
          <div className=" h-[20px] w-[20px] opacity-80">{iconPath}</div>
          <div>
            <p className="text-[#FFFFFF] text-opacity-80 text-[14px] font-medium leading-[20px]">
              {buttonTxt}
            </p>
          </div>
        </button>
      )}

      {baseNav && (
        <div className="flex gap-[10px] h-[54px] px-[12px] py-[6px] mx-auto items-center w-[192px] bg-[#353C53] border border-none rounded-[4px]">
          <div className="flex items-center gap-[12px] w-[149px] h-[42px] ">
            <div className="flex items-center gap-[10px] h-[36px] w-[36px] border border-none rounded-[4px] p-[6px] bg-opacity-10 bg-[#FFFFFF]">
              <div className="flex items-center w-[24px] h-[24px] ">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.0002 1.79727C2.42343 1.79727 1.8002 2.35527 1.8002 3.24727V16.7473C1.8002 17.6393 2.42343 18.1973 3.0002 18.1973H21.0002C21.577 18.1973 22.2002 17.6393 22.2002 16.7473V13.8473H17.0003C14.874 13.8473 13.1503 12.1236 13.1503 9.99727C13.1503 7.87097 14.874 6.14727 17.0003 6.14727H22.2002V3.24727C22.2002 2.35527 21.577 1.79727 21.0002 1.79727H3.0002ZM23.8002 6.14727V3.24727C23.8002 1.65398 22.6326 0.197266 21.0002 0.197266H3.0002C1.36782 0.197266 0.200195 1.65398 0.200195 3.24727V16.7473C0.200195 18.3405 1.36782 19.7973 3.0002 19.7973H21.0002C22.6326 19.7973 23.8002 18.3405 23.8002 16.7473V13.8473H23.8503V6.14727H23.8002ZM16.0002 9.94727C16.0002 9.47783 16.3808 9.09727 16.8502 9.09727H18.1502C18.6197 9.09727 19.0002 9.47783 19.0002 9.94727C19.0002 10.4167 18.6197 10.7973 18.1502 10.7973H16.8502C16.3808 10.7973 16.0002 10.4167 16.0002 9.94727ZM14.8503 9.99727C14.8503 8.80986 15.8129 7.84727 17.0003 7.84727H22.1503V12.1473H17.0003C15.8129 12.1473 14.8503 11.1847 14.8503 9.99727Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-[2px] h-[42px] w-[101px]">
              <p className="w-full font-normal text-white text-[13px] leading-[16px]">
                {baseNavName}
              </p>
              <div className="w-[51px] h-[24px] ">
                <p className="w-full font-medium text-white text-[16px] leading-[24px]">
                  {availableCredits}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
