// src/components/sections/WhyChooseUs.tsx
import { Factory, Palette, Clock, Shield, Award, Gem } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: <Factory className="w-9 h-9" />,
    title: "In-House Manufacturing",
    text: "We own a 30,000 sq ft factory equipped with German & Italian machinery — giving us full control over quality, customization, deadlines, and cost.",
  },
  {
    icon: <Palette className="w-9 h-9" />,
    title: "Photorealistic 3D + VR Walkthroughs",
    text: "See your office exactly as it will be — before a single brick is moved. Free photorealistic renders and optional VR tours included in every project.",
  },
  {
    icon: <Clock className="w-9 h-9" />,
    title: "Guaranteed On-Time Delivery",
    text: "Fixed timeline agreed in writing. We’ve completed 550+ projects — 98% delivered on or before deadline. Late? We pay penalty.",
  },
  {
    icon: <Shield className="w-9 h-9" />,
    title: "5-Year Furniture Warranty",
    text: "All custom furniture comes with a full 5-year warranty and after-sales support — something very few studios in Bangladesh dare to offer.",
  },
  {
    icon: <Award className="w-9 h-9" />,
    title: "Trusted by Industry Leaders",
    text: "Preferred interior partner for Bashundhara Group, Maersk, NEC Corporation, and 500+ top companies across Bangladesh.",
  },
  {
    icon: <Gem className="w-9 h-9" />,
    title: "One Team, Zero Hassle",
    text: "From strategy & design to manufacturing, civil works, MEP, and handover — everything managed by one expert team. No subcontractors, no excuses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-red-600 tracking-wider uppercase mb-4">
            Why Top Companies Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Because Compromise Isn’t an Option
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
            We’re not the cheapest — we’re the safest, fastest, and most reliable way to get a world-class office in Bangladesh.
          </p>
        </div>

        {/* Premium grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center bg-red-600 text-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-red-700 transition shadow-2xl hover:shadow-red-600/30"
          >
            Start Your Project with Confidence
          </Link>
        </div>

      </div>
    </section>
  );
}