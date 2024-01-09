import Image from "next/image";
import { Navigation } from "./_components/Navigation";
import { MainComponent } from "./_components/MainComponent";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="w-[228px]">
        <Navigation />
      </div>
      <div className="w-full">
        <MainComponent />
      </div>
    </div>
  );
}
