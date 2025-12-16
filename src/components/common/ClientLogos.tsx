// src/components/common/ClientLogos.tsx
"use client";

import Image from "next/image";
import { clients } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function ClientLogos() {
  return (
    <>
      {/* Marquee animation defined locally */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="pt-10 lg:pt-16 pb-20 lg:pb-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-red-600 tracking-wider uppercase">
              Trusted by Leading Companies
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900">
              Our Clients
            </h2>
          </div>

          {/* Infinite horizontal marquee */}
          <div className="relative">
            <div className="flex animate-marquee gap-12 lg:gap-16 items-center">
              {/* Duplicated array for seamless loop */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="shrink-0 w-44 lg:w-52 h-24 lg:h-28 flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 grayscale hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} – Client of Studio Archifiction`}
                    width={200}
                    height={100}
                    className="object-contain max-h-16 lg:max-h-20 transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Optional CTA */}
          <div className="text-center mt-14">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join Bangladesh’s top corporations who trust us with their workspace transformations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mt-5 text-red-600 font-semibold text-lg hover:text-red-700 transition"
            >
              Start Your Project <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
