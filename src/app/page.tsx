import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import HeroSlider from "@/components/hero/HeroSlider";
import AboutSection from "@/components/sections/AboutSection";  
import ServicesGrid from "@/components/sections/ServicesGrid";
import PromoCarousel from "@/components/common/PromoCarousel";
import BestSellingGrid from "@/components/sections/BestSellingGrid";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import DiscountBanner from "@/components/sections/DiscountBanner";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientLogos from "@/components/common/ClientLogos";
import AboutContentSection from "@/components/sections/AboutContentSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HelpSection from "@/components/sections/HelpSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AboutSection/>
      <ServicesGrid/>
      <PromoCarousel/>
      <BestSellingGrid/>
      <DiscountBanner/>
      <TestimonialsSection/>
      <ClientLogos/>
      <AboutContentSection/>
      <WhyChooseUs/>
      <HelpSection/>
      <FloatingWhatsApp />
      <Footer/>
    </>
  );
}