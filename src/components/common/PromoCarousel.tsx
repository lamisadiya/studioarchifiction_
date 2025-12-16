// src/components/common/PromoCarousel.tsx
'use client';

import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function PromoCarousel() {
  const promos = [
    "Limited Period • Free Design Consultation + 3D Visualization worth ৳50,000",
    "Featured in Design Middle East • Bangladesh’s Most Trusted Office Interior Brand",
    "Over 550+ Corporate Projects Delivered • 10+ Years of Excellence",
    "Book Before 15th Dec • Get 5% Off Turnkey Office Fit-Out Projects",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Subtle, elegant promo bar – no more red banner */}
      <div className="bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white py-3.5 overflow-hidden border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center">
            {/* Smooth sliding container */}
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {promos.map((text, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 flex items-center justify-center gap-3 text-sm md:text-base font-medium tracking-wide"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-gray-200">{text}</span>
                  {i === 0 || i === 3 ? (
                    <a
                      href="/contact"
                      className="ml-3 inline-flex items-center gap-1.5 text-amber-400 hover:text-white font-semibold transition whitespace-nowrap"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}