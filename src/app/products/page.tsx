// src/app/products/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";
import ProductShop from "@/components/products/ProductShop";
export const metadata: Metadata = {
  title: "Office Furniture - Premium Custom Made Solutions",
  description: "High-quality custom office furniture by Cubic Interior Design",
};

export default function ProductsPage() {
  return (
    <>
       <TopBar/>
        <Navbar/> 
        <ProductShop/>  
         <FloatingWhatsApp/>
    <Footer/>
 
    </>
  );
}