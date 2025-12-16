// src/app/about/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import HeroAbout from "@/components/about/HeroAbout";
import AboutIntroVideo from "@/components/about/AboutIntroVideo";
import MissionVisionStrength from "@/components/about/MissionVisionStrength";
import HowWeWork from "@/components/about/HowWeWork";
import LetsGetCreative from "@/components/about/LetsGetCreative";
export const metadata: Metadata = {
  title: "",
  description: " ",
};

export default function AboutPage() {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <HeroAbout/>
      <AboutIntroVideo/>
      <MissionVisionStrength/>
      <HowWeWork/>
      <LetsGetCreative/>
      <FloatingWhatsApp/>
      <Footer/>
      {}
    </>
  );
}