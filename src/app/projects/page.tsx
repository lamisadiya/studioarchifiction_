// src/app/projects/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Projects - Office Interior Design Portfolio | CUBIC",
  description: "Explore 100+ completed office interior projects across Bangladesh",
};

export default function ProjectsPage() {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <ProjectsGrid/>
    <FloatingWhatsApp/>
    <Footer/>
      
    </>
  );
}