import React from "react";
import { NavigationItem } from "./NavigationItem";
import companyImage from "../../public/Image.png";
import { navItems } from "../../data/navItems";

export const Navigation = () => {
  return (
    <aside
      className={
        "group/sidebar h-full bg-secondary overflow-y-auto relative flex gap-[24px] w-60 flex-col z-[99999] bg-[#1E2640] py-[16px] px-[10px]"
      }
    >
      <NavigationItem
        dropdown={true}
        image={companyImage}
        name="Nishyan"
        linkName="Visit store"
        linkRedirect="#"
      />
      <div className="flex flex-col gap-[4px]">
        {navItems.map((item, index) => (
          <NavigationItem
            key={index}
            navItem={true}
            iconPath={item.svgPath}
            buttonTxt={item.name}
            linkRedirect="#"
          />
        ))}
      </div>
    </aside>
  );
};
