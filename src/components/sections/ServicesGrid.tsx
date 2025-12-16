// src/components/sections/ServicesGrid.tsx
'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Turnkey Office Fit-Out",
    img: "/images/6.jpg",
    features: ["Design → Execution", "One contract, zero hassle", "Guaranteed timeline"],
  },
  {
    title: "Custom Furniture Manufacturing",
    img: "/images/6.jpg",
    features: ["In-house 30,000 sq ft factory", "German & Italian machinery", "5-year warranty"],
  },
  {
    title: "Workspace Strategy & Consultancy",
    img: "/images/6.jpg",
    features: ["Space planning & flow", "Employee wellness focus", "Future-proof design"],
  },
  {
    title: "3D Visualization & Rendering",
    img: "/images/6.jpg",
    features: ["Photorealistic renders", "VR walkthroughs", "Free with every project"],
  },
];

const centerImage = "/images/8.jpg";
const centerText =
  "We deliver complete corporate workspaces that combine aesthetics, functionality, and your brand identity — all under one roof.";

export default function ServicesGrid() {
  return (
    <section className="py-12 lg:py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Elegant heading */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-red-600 tracking-wider uppercase mb-4">
            End-to-End Solutions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Everything Your Office Needs
          </h2>
        </div>

        {/* 4-card + center hero layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Left two cards */}
          <div className="space-y-8">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>

          {/* Center Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:row-span-2 aspect-2/3 lg:aspect-2/3">
            <Image
              src={centerImage}
              alt="Premium corporate office interior by Studio Archifiction"
              fill
              className="object-cover blur-sm"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16 text-white">
              <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-2xl">
                {centerText}
              </p>
            </div>
          </div>

          {/* Right two cards */}
          <div className="space-y-8">
            <ServiceCard {...services[2]} />
            <ServiceCard {...services[3]} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center bg-red-600 text-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-600/30"
          >
            Start Your Project Today
            <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition" />
          </Link>
        </div>

      </div>
    </section>
  );
}

// Premium service card
function ServiceCard({ title, img, features }: { title: string; img: string; features: string[] }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
      <div className="aspect-4/3 relative overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 blur-sm"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm lg:text-base">
              <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
