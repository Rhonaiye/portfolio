import Image from "next/image";
import HeroSection from "./components/layout/heroSection";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Navbar/>
    </>
  );
}
