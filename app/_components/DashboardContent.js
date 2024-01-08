import React from "react";

export const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-[32px] absolute top-[96px] w-full">
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
          <div className="flex gap-[24px] bg-white h-[118px] w-1/2 border-none rounded-[6px]">
            <div className="flex flex-col gap-[16px] p-[20px] h-[78px] ">
              <p className="text-[16px] font-normal leading-[24px]">
                Online orders
              </p>
              <p className="text-[32px] font-medium leading-[38px] text-[#1A181E]">
                231
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] bg-white h-[118px] w-1/2 border-none rounded-[6px]">
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
      <div className="flex flex-col gap-[24px] px-[30px]">
        <p className="text-[20px] font-medium leading-[28px]">
          Transactions | This Month
        </p>
      </div>
    </div>
  );
};
