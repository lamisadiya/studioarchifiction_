// src/components/services/ServicesHeroAndGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_HERO_GRID } from "@/lib/constants";

export default function ServicesHeroAndGrid() {
  const { title, description, services } = SERVICES_HERO_GRID;

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

          <p className="text-xs font-bold tracking-wider uppercase text-red-500 mb-4">
            11+ Years • 550+ Corporate Projects • Dhaka, Bangladesh
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            {title.replace("CUBIC", "Studio Archifiction")}
          </h1>

          <div className="mt-8 max-w-4xl mx-auto space-y-5 text-sm lg:text-base font-light text-gray-200 leading-relaxed">
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center bg-red-600 text-white
                px-6 py-3
                rounded-full
                text-sm lg:text-base
                font-bold
                hover:bg-red-700
                transition-all
                shadow-lg hover:shadow-red-600/40"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center border-2 border-white text-white
                px-6 py-3
                rounded-full
                text-sm lg:text-base
                font-black
                hover:bg-white hover:text-black transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 lg:py-28 bg-linear-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-3">
              End-to-End Corporate Interior Solutions
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900">
              One Studio.<br />
              <span className="text-red-600">Every Solution.</span>
            </h2>

            <p className="mt-5 text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
              From concept to completion — we handle everything so you don’t have to.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Link
                href="/contact"
                key={index}
                className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-3">

                    <h3 className="text-lg lg:text-xl font-black leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-200 leading-relaxed opacity-90">
                      {service.description}
                    </p>

                    <div className="flex gap-2 mt-3">
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                    </div>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-gray-100 transition-all shadow-lg">
                        Get Free Quote
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/0 group-hover:ring-red-600/25 transition-all duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20 lg:mt-28">
            <p className="text-2xl lg:text-3xl font-black text-gray-800 mb-8">
              Ready to Transform Your Office?
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-base lg:text-lg font-black hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/50"
            >
              Book Your Free Consultation Now
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <p className="mt-6 text-sm lg:text-base text-gray-600">
              Reply in <span className="text-red-600 font-black">under 2 hours</span> • Zero cost • Zero obligation
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
