// src/components/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="pt-0 lg:pt-0 pb-24 lg:pb-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text – powerful, concise, benefit-driven */}
          <div className="order-2 lg:order-1">
            {/* Subtle badge */}
            <div className="flex items-center gap-3 text-sm font-semibold text-red-600 uppercase tracking-wider mb-6">
              <Award className="w-5 h-5" />
              Bangladesh’s Leading Office Interior Design Studio Since 2013
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We don’t just design offices.<br />
              <span className="text-red-600">We design environments that accelerate business success.</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
              For over a decade, Studio Archifiction has been the preferred partner for Bangladesh’s fastest-growing companies — 
              delivering modern, functional, and brand-defining workspaces that attract top talent, impress clients, and drive real ROI.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-red-600">550+</div>
                <p className="text-gray-600 mt-1">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">10+</div>
                <p className="text-gray-600 mt-1">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">100%</div>
                <p className="text-gray-600 mt-1">Client Satisfaction</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center bg-red-600 text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-xl hover:shadow-red-600/25"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right: Image – cinematic with subtle overlay */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/6.jpg"
                alt="Premium corporate office interior designed by Studio Archifiction – modern workspace in Dhaka"
                width={1200}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating trust badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Trusted by</p>
                    <p className="text-lg font-bold text-gray-900">Grameenphone, bKash, Robi & 500+ others</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}