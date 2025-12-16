// src/app/contact/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function ContactPage() {
  return (
    <>
            <TopBar/>
            <Navbar/>
            <ContactFormSection/>
            <ContactInfo/>
            <MapSection/>
            <FloatingWhatsApp/>
            <Footer/>
    </>
  );
}