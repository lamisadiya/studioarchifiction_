// src/app/services/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import ServicesHeroAndGrid from "@/components/services/ServicesHeroAndGrid";
import LatestProjects from "@/components/services/LatestProjects";
import QuickContactForm from "@/components/services/QuickContactForm";
import HelpSection from "@/components/sections/HelpSection";

export const metadata: Metadata = {
  title: "Our Services - Office Interior & Furniture Solutions",
  description: "Complete office interior design, fit-out, furniture & refurbishment services in Bangladesh",
};

export default function ServicesPage() {
  return (
    <>
      <TopBar/>
      <Navbar/>
        <ServicesHeroAndGrid/>
        <LatestProjects/>
<QuickContactForm/>
<HelpSection/>
      <FloatingWhatsApp/>
      <Footer/>
    </>
  );
}