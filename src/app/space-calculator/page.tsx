// src/app/space-calculator/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import SpaceCalculatorIntro from "@/components/space-calculator/SpaceCalculatorIntro";
import AdvancedSpaceCalculator from "@/components/space-calculator/AdvancedSpaceCalculator";
import ClientLogos from "@/components/common/ClientLogos";

export const metadata: Metadata = {
  title: "Office Space Calculator - Find Your Perfect Layout | CUBIC",
  description: "Calculate how many workstations, cabins, meeting rooms & furniture fit in your office space",
};

export default function SpaceCalculatorPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <SpaceCalculatorIntro/>
      <AdvancedSpaceCalculator/>
      <ClientLogos/>
      <FloatingWhatsApp />
      <Footer/>
    </>
  );
}