// src/components/about/HowWeWork.tsx
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HOW_WE_WORK } from "@/lib/constants";

export default function HowWeWork() {
  const { title, steps } = HOW_WE_WORK;

  return (
    <section className="py-10 lg:py-14 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-3">
            Our Proven Process
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
            From Vision to Reality
            <span className="block text-red-600">in 3 Seamless Phases</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Every project follows the same battle-tested system that has delivered{" "}
            <strong>550+ flawless offices</strong> across Bangladesh — on time, on budget,
            zero surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Accent Bar */}
              <div className="h-1.5 bg-linear-to-r from-red-600 to-red-700" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.phase}
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-xl">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-9">
                <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-5">
                  {step.phase}
                </h3>

                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Ready to experience the difference a proven process makes?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/40"
          >
            Start Your Project Now
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

      </div>
    </section>
  );
}
