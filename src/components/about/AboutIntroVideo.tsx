// src/components/about/AboutIntroVideo.tsx
import { PlayCircle, Calendar, Factory, Award } from "lucide-react";
import { ABOUT_INTRO } from "@/lib/constants";

export default function AboutIntroVideo() {
  const { videoUrl, posterImage } = ABOUT_INTRO;

  return (
    <section className="py-10 lg:py-14 bg-linear-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">

            {/* Heading */}
            <div>
              <p className="text-[11px] font-bold text-red-600 tracking-wider uppercase mb-2">
                Since 2013 — Bangladesh’s Trusted Name
              </p>

              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 leading-tight">
                We Don’t Just Design Offices
                <span className="text-red-600"> — We Shape Success</span>
              </h2>

              <div className="h-1 w-20 bg-red-600 mt-4 rounded-full" />
            </div>

            {/* Story */}
            <div className="space-y-5 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Founded on <strong className="text-gray-900">12 December 2013</strong>, Studio Archifiction began with one mission:
                to transform how Bangladesh works — one visionary workspace at a time.
              </p>
              <p>
                Over the last <strong className="text-red-600 font-black">10+ years</strong>, we’ve become the preferred partner
                for the country’s fastest-growing companies — delivering over <strong>550 corporate projects</strong> with
                in-house design, manufacturing, and execution.
              </p>
              <p>
                From startups to multinational headquarters, every space we create is crafted to inspire productivity,
                reflect brand identity, and stand the test of time.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Calendar className="w-6 h-6 mx-auto text-red-600 mb-1.5" />
                <p className="text-lg font-black text-gray-900">10+</p>
                <p className="text-[11px] text-gray-600 font-medium">Years Strong</p>
              </div>

              <div className="text-center">
                <Factory className="w-6 h-6 mx-auto text-red-600 mb-1.5" />
                <p className="text-lg font-black text-gray-900">30,000 sq ft</p>
                <p className="text-[11px] text-gray-600 font-medium">In-House Factory</p>
              </div>

              <div className="text-center">
                <Award className="w-6 h-6 mx-auto text-red-600 mb-1.5" />
                <p className="text-lg font-black text-gray-900">550+</p>
                <p className="text-[11px] text-gray-600 font-medium">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                controls
                poster={posterImage}
                className="w-full aspect-video object-cover"
                preload="metadata"
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 blur-2xl opacity-40 scale-125 animate-pulse" />
                    <PlayCircle className="w-16 h-16 lg:w-20 lg:h-20 text-white drop-shadow-2xl relative z-10" />
                  </div>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/10 group-hover:ring-red-600/30 transition-all duration-500 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
