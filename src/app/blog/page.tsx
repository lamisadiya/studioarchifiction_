// src/app/blog/page.tsx
import { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Blog - Office Interior Tips & Trends | CUBIC",
  description: "Latest insights on office design, productivity, furniture trends & workplace wellness",
};

export default function Blog() {
  return (
    <>
      <TopBar />
      <Navbar />
      <BlogPage/>
      <FloatingWhatsApp />
      <Footer/>
    </>
  );
}