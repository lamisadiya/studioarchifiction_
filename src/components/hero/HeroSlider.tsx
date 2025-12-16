// src/components/hero/HeroSlider.tsx
'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Building2, CheckCircle2 } from 'lucide-react';
import { HERO_SLIDES } from "@/lib/constants";

export default function HeroSlider() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-end">
        {/* Background Slider */}
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 6000,
            speed: 1200,
            arrows: false,
            pagination: true,
            pauseOnHover: false,
            resetProgress: false,
          }}
          className="absolute inset-0"
        >
          {HERO_SLIDES.map((slide, i) => (
            <SplideSlide key={i}>
              <div className="relative h-screen w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/90" />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Hero Content – Perfectly Responsive */}
        <div className="relative z-20 pb-32 lg:pb-40 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
              {HERO_SLIDES[0]?.title} {/* Or map dynamically if needed */}
            </h1>
            <p className="mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 font-light drop-shadow-lg max-w-4xl mx-auto">
              {HERO_SLIDES[0]?.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-red-600 text-white px-8 py-5 rounded-full text-lg sm:text-xl lg:text-2xl font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-600/50"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center border-4 border-grey text-black px-8 py-5 rounded-full text-lg sm:text-xl lg:text-2xl font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards – Now 100% Visible on ALL Devices */}
        <div className="relative z-30 -mt-20 lg:-mt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {[
                { Icon: Award, num: "10+", label: "Years of Corporate Excellence" },
                { Icon: Building2, num: "550+", label: "Projects Delivered" },
                { Icon: CheckCircle2, num: "100%", label: "Client Satisfaction" },
              ].map(({ Icon, num, label }, i) => (
                <div
                  key={i}
                  className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 text-center hover:-translate-y-4 transition-all duration-500 group"
                >
                  <Icon className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-red-600 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-4xl sm:text-5xl font-black text-gray-900">{num}</h3>
                  <p className="mt-3 text-base sm:text-lg font-medium text-gray-600 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Smart Spacer – Prevents content overlap */}
      <div className="h-32 sm:h-40 lg:h-48 bg-linear-to-b from-transparent to-white dark:to-gray-900" />
    </>
  );
}