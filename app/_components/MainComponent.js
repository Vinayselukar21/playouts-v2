import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export const MainComponent = () => {
  return (
    <div className="bg-[#F2F2F2] w-full relative">
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
};
