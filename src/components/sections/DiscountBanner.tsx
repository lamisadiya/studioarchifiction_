// src/components/sections/DiscountBanner.tsx
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function DiscountBanner() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-br from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
      {/* Subtle background pattern (optional luxury touch) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.3),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">

        {/* Exclusive badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 rounded-full px-5 py-2 text-sm font-semibold text-red-400 mb-8">
          <Sparkles className="w-4 h-4" />
          Limited Period Offer
        </div>

        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
          <span className="text-red-500">Exclusive</span> Year-End Offer
        </h2>

        <p className="mt-8 text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 max-w-4xl mx-auto leading-tight">
          Book your complete office fit-out before <span className="text-red-400 font-bold">31 December</span>
          <br className="hidden lg:block" />
          and enjoy <span className="text-5xl md:text-6xl font-black text-red-500">5% off</span> + complimentary 3D visualization
        </p>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Applicable on turnkey projects above BDT 50 lac • Includes full design, furniture & execution
        </p>

        {/* Elegant CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center bg-red-600 text-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-600/40"
          >
            Claim This Offer Now
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition" />
          </Link>
        </div>

        {/* Trust timer */}
        <div className="mt-10 flex items-center justify-center gap-3 text-gray-400">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-medium">Offer ends in 31 days</span>
        </div>

      </div>
    </section>
  );
}