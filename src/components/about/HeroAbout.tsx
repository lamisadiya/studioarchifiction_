// src/components/about/HeroAbout.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ABOUT_HERO } from "@/lib/constants";

export default function HeroAbout() {
  const { image, title, subtitle } = ABOUT_HERO;

  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="Studio Archifiction – Bangladesh’s Leading Corporate Interior Studio"
        fill
        priority
        quality={100}
        className="object-cover brightness-90 scale-105 transition-all duration-1000"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/90" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl">
          {title}
        </h1>

        {/* Subtitle */}
        <div className="mt-4 md:mt-6 max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-100 leading-relaxed drop-shadow-lg">
            {subtitle.line1}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-red-500 mt-1 drop-shadow-2xl tracking-tight">
            {subtitle.line2}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/40"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Trust Bar */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-white/90">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black">10+</p>
            <p className="text-xs sm:text-sm font-medium">Years of Excellence</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/30" />

          <div className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black">550+</p>
            <p className="text-xs sm:text-sm font-medium">Corporate Projects</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/30" />

          <div className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black">30,000 sq ft</p>
            <p className="text-xs sm:text-sm font-medium">In-House Factory</p>
          </div>
        </div>

      </div>
    </section>
  );
}
