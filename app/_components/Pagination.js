import React from "react";

const pageNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Pagination = () => {
  return (
    <div className="flex flex-col items-center pt-[40px]  w-full">
      <div className="flex gap-[24px] w-[610px] h-[32px]">
        <button className="flex items-center gap-[6px] w-[100px] h-full pl-[6px] pr-[12px] py-[6px] border-[1px] border-[#D9D9D9] rounded-[4px] text-opacity-85 text-[#D9D9D9]">
          <div className="h-[18px] w-[18px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
          <p className="font-medium text-[14px] text-[#4D4D4D] leading-[20px] ">
            Previous
          </p>
        </button>
        <div className="flex gap-[8px] w-[388px] h-[28px] ">
          {pageNo.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center text-[#4D4D4D] bg-white hover:bg-[#146EB4] hover:text-white rounded-[4px] h-[28px] w-[28px]"
            >
              <p className="text-[14px] font-normal leading-[20px]">{item}</p>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-[6px] w-[74px] h-full pr-[6px] pl-[12px] py-[6px] border-[1px] border-[#D9D9D9] rounded-[4px] text-opacity-85 text-[#D9D9D9]">
          <p className="font-medium text-[14px] text-[#4D4D4D] leading-[20px] ">
            Next
          </p>
          <div className="h-[18px] w-[18px]">
            <svg
              width="6"
              height="12"
              viewBox="0 0 6 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
