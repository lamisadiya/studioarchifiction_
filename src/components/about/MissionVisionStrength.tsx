// src/components/about/MissionVisionStrength.tsx
import { Target, Eye, Zap } from "lucide-react";
import { MISSION_VISION_STRENGTH } from "@/lib/constants";

export default function MissionVisionStrength() {
  const { mission, vision, strength } = MISSION_VISION_STRENGTH;

  const sections = [
    {
      icon: <Target className="w-8 h-8" />,
      title: mission.title,
      text: mission.text,
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: vision.title,
      text: vision.text,
      gradient: "from-red-600 to-rose-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: strength.title,
      text: strength.text,
      gradient: "from-rose-600 to-pink-600",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-linear-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Preheading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-3">
            Our Foundation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
            Built on Purpose,<br />
            <span className="text-red-600">Driven by Excellence</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 bg-linear-to-r ${section.gradient}`} />

              <div className="p-8 lg:p-10 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-red-600/10 to-red-600/5 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-white rounded-xl shadow">
                    <div className="text-red-600">{section.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 tracking-tight">
                  {section.title}
                </h3>

                {/* Text */}
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/0 group-hover:ring-red-600/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
