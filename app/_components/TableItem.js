import React from "react";

export const TableItem = () => {
  return (
    <>
      <div className="flex flex-col items-center  w-full">
        <div className="flex gap-[40px] h-[48px] w-full px-[12px] py-[10px]  border-none rounded-[4px]  bg-opacity-95 items-center justify-between">
          <div className="w-[246px] h-[20px] ">
            <p className="text-[14px] text-[#146EB4]  font-medium leading-[20px] ">
              #281209
            </p>
          </div>
          <div className="w-[246px] h-[20px] ">
            <p className="text-[14px] text-[#1A181E]  font-medium leading-[20px] ">
              7 July, 2023
            </p>
          </div>
          <div className="flex items-center justify-end w-[246px] h-[20px] ">
            <p className="text-[14px] text-[#1A181E]  font-medium leading-[20px] ">
              ₹1,278.23
            </p>
          </div>
          <div className="flex items-center justify-end w-[246px] h-[20px] ">
            <p className="text-[14px] text-[#1A181E]  font-medium leading-[20px] ">
              ₹22
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[12px] border-b-[1px]"></div>
    </>
  );
};
