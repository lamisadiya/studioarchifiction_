// src/components/about/LetsGetCreative.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LETS_GET_CREATIVE } from "@/lib/constants";

export default function LetsGetCreative() {
  const { image, title, subtitle } = LETS_GET_CREATIVE;

  return (
    <section className="py-10 lg:py-14 bg-linear-to-b from-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Headline */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
            {title}
          </h2>
          <div className="h-1.5 w-32 bg-red-600 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-base lg:text-lg xl:text-xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Image */}
        <div className="relative -mx-6 lg:-mx-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt="Your next office could look this good – Studio Archifiction"
              width={1600}
              height={900}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-4 ring-red-600/10 pointer-events-none" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">
            Your dream workspace is just one decision away.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center bg-red-600 text-white px-10 py-5 rounded-full text-base lg:text-lg font-black hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/40"
          >
            Let’s Build Something Legendary
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </Link>

          <p className="mt-6 text-sm lg:text-base text-gray-600">
            Free consultation • No obligation • Reply in{" "}
            <span className="text-red-600 font-bold">2 hours</span>
          </p>
        </div>

      </div>
    </section>
  );
}
