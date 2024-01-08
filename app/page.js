import Image from "next/image";
import { Navigation } from "./_components/Navigation";
import { MainComponent } from "./_components/MainComponent";

export default function Home() {
  return (
    <div className="h-full flex">
      <Navigation />
      <MainComponent />
    </div>
  );
}
