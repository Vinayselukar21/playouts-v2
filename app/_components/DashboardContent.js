import React from "react";
import { TableItem } from "./TableItem";
import { Pagination } from "./Pagination";

const numberOfRows = Array.from({ length: 20 }, (_, index) => index);
export const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-[32px] absolute top-[96px] h-full w-full">
      <div className="flex flex-col gap-[24px] h-[178px] px-[30px]">
        <div className="flex justify-between gap-[20px] h-[36px] w-full">
          <p className="text-[20px] font-medium leading-[28px] ">Overview</p>
          <div className="flex bg-white justify-center gap-[16px] items-center w-[137px] h-[36px] border-[1px] rounded-[4px]">
            <p className="text-[16px] font-normal leading-[24]">Last Month</p>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[20px] w-full">
          <div className="flex gap-[24px] shadow-sm bg-white h-[118px] w-1/2 border-none rounded-[6px]">
            <div className="flex flex-col gap-[16px] p-[20px] h-[78px] ">
              <p className="text-[16px] font-normal leading-[24px]">
                Online orders
              </p>
              <p className="text-[32px] font-medium leading-[38px] text-[#1A181E]">
                231
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] shadow-sm bg-white h-[118px] w-1/2 border-none rounded-[6px]">
            <div className="flex flex-col gap-[16px] p-[20px] h-[78px] ">
              <p className="text-[16px] font-normal leading-[24px]">
                Amount Received
              </p>
              <p className="text-[32px] font-medium leading-[38px] text-[#1A181E]">
                ₹23,92,312.19
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] px-[30px] pb-[30px]">
        <p className="text-[20px] font-medium leading-[28px]">
          Transactions | This Month
        </p>
        <div className="shadow-md flex gap-[24px] bg-white  w-full border-none rounded-[6px]">
          <div className="px-[12px] pt-[12px] pb-[24px] w-full border border-none rounded-[8px]">
            <div className="flex flex-col items-center gap-[12px] h-[92px] w-full">
              <div className="h-[40px] w-full  flex items-center justify-between">
                <div className="w-[248px] h-[40px]">
                  <div className="flex  items-center  gap-[8px] w-full h-full border-[1px] border-[#D9D9D9] bg-[#FFFFFF] rounded-[4px] px-[16px] py-[10px]">
                    <div className="h-[14px] w-[14px] text-[#999999]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none w-[194px] text-[#999999]"
                      placeholder="Search by order ID..."
                    />
                  </div>
                </div>
                <div className="flex w-[127px] h-[36px]  items-center justify-between">
                  <button className="flex justify-between items-center  w-[79px] h-[36px] border-[1px] border-[#D9D9D9] border-opacity-85 px-[12px] py-[6px] rounded-[4px] ">
                    <p className="text-[16px] font-normal leading-[24px] text-[#4D4D4D]">
                      Sort
                    </p>
                    <div className="flex items-center justify-center h-[16px] w-[16px]">
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z"
                          fill="#4D4D4D"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="flex justify-center items-center h-[36px] w-[36px] border-[1px] rounded-[4px] border-[#D9D9D9] ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                        fill="#4D4D4D"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex gap-[40px] h-[40px] w-full px-[12px] py-[10px]  border-none rounded-[4px] bg-[#F2F2F2] bg-opacity-95 items-center justify-between">
                <div className="w-[246px] h-[20px]">
                  <p className="text-[14px]  text-[#4D4D4D] leading-[20px] font-medium">
                    Order ID
                  </p>
                </div>
                <div className=" flex gap-[4px] items-center w-[246px] h-[20px]">
                  <p className="text-[14px]  text-[#4D4D4D] leading-[20px] font-medium">
                    Order date
                  </p>
                  <div className="h-[8px] w-[8px]">
                    <svg
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z"
                        fill="#4D4D4D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-end w-[246px] h-[20px]">
                  <p className="text-[14px]  text-[#4D4D4D] leading-[20px] font-medium">
                    Order amount
                  </p>
                </div>
                <div className="flex gap-[4px] items-center justify-end w-[246px] h-[20px]">
                  <p className="text-[14px]  text-[#4D4D4D] leading-[20px] font-medium">
                    Transaction fees
                  </p>
                  <div className="h-[14px] w-[14px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_5817)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                          fill="#4D4D4D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_5817">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {numberOfRows.map((item) => (
                <TableItem key={item} />
              ))}
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
