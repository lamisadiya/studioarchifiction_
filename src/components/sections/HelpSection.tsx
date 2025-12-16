// src/components/sections/HelpSection.tsx
'use client';

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do you handle full turnkey office fit-out from design to handover?",
    answer: "Yes. We manage everything — space planning, 3D visualization, custom furniture manufacturing, civil works, MEP, lighting, acoustics, and final handover. You get one point of contact from day one until move-in.",
  },
  {
    question: "How long does a typical corporate office project take?",
    answer: "A standard 10,000–25,000 sq ft office usually takes 10–14 weeks from design approval to completion. Larger headquarters or multi-floor projects take 16–24 weeks. We provide a guaranteed timeline in writing.",
  },
  {
    question: "Do you provide 3D visualizations and BOQ before starting?",
    answer: "Absolutely — and it’s complimentary. Every client receives photorealistic 3D renders, detailed material specifications, and a transparent bill of quantities (BOQ) before any payment or contract.",
  },
  {
    question: "Do you manufacture the furniture yourselves?",
    answer: "Yes. We own a 30,000 sq ft factory with German & Italian machinery. This gives us full control over quality, customization, deadlines, and cost — something very few studios in Bangladesh can offer.",
  },
  {
    question: "What types of clients & projects do you usually serve?",
    answer: "We specialize in corporate headquarters, banks, tech companies, buying houses, multinational regional offices, and premium commercial spaces. Past clients include Grameenphone, bKash, Robi, IDLC, and 500+ others.",
  },
  {
    question: "How do I get started with Studio Archifiction?",
    answer: "Simply book a free consultation. We’ll visit your space (or review plans), understand your vision and budget, and present concepts within 7 days — no obligation.",
  },
];

export default function HelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Elegant heading */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-red-600 tracking-wider uppercase mb-4">
            Your Questions Answered
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            How Can We Help You Today?
          </h2>
        </div>

        {/* Premium accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0 w-11 h-11 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition">
                  {openIndex === i ? (
                    <Minus className="w-6 h-6 text-red-600 group-hover:text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-red-600 group-hover:text-white" />
                  )}
                </div>
              </button>

              {openIndex === i && (
                <div className="px-8 pb-8">
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Still have questions? We’re here 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-red-600 text-white px-9 py-5 rounded-full font-semibold text-lg hover:bg-red-700 transition shadow-xl"
            >
              Book Free Consultation
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            <Link
              href="tel:+8801716501213"
              className="inline-flex items-center border-2 border-gray-300 text-gray-900 px-9 py-5 rounded-full font-semibold text-lg hover:border-red-600 hover:text-red-600 transition"
            >
              Call +880 1716 501213
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}