"use client";
import React from "react";
import { NavigationItem } from "./NavigationItem";
import companyImage from "../../public/Image.png";
import { navItems } from "../../data/navItems";

export const Navigation = () => {
  return (
    <aside className=" min-h-full bg-secondary relative flex  flex-col gap-[16px] justify-between z-[99999] bg-[#1E2640] py-[16px] px-[10px] ">
      <div className="flex flex-col gap-[24px] w-[208px]">
        <div className="w-[192px] mx-auto">
          <NavigationItem
            dropdown={true}
            image={companyImage}
            name="Nishyan"
            linkName="Visit store"
            linkRedirect="#"
          />
        </div>
        <div className="flex flex-col gap-[4px] w-full">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              navItem={true}
              iconPath={item.svgPath}
              buttonTxt={item.name}
              linkRedirect="#"
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      <div className="">
        <NavigationItem
          baseNav={true}
          baseNavName="Available credits"
          availableCredits="222.10"
        />
      </div>
    </aside>
  );
};
