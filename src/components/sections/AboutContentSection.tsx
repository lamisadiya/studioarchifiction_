// src/components/sections/AboutContentSection.tsx
import { CheckCircle2 } from "lucide-react";

export default function AboutContentSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero-style headline – one powerful statement */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-red-600 tracking-wider uppercase mb-4">
            Since 2013 • Bangladesh’s Most Trusted Office Interior Studio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We design workspaces that <span className="text-red-600">drive growth</span>
            <br className="hidden lg:block" />
            and inspire success.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
            Over the last decade, Studio Archifiction has delivered 550+ corporate offices across Bangladesh —
            combining strategic design, flawless execution, and timeless aesthetics for brands that refuse to compromise.
          </p>
        </div>

        {/* Core philosophy – short & punchy */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-3 gap-12 lg:gap-16 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Your Vision First</h3>
            <p className="mt-4 text-gray-600">
              Every project begins with deep understanding of your business goals, brand identity, and culture.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Design That Performs</h3>
            <p className="mt-4 text-gray-600">
              Beautiful spaces that boost productivity, attract talent, and impress clients — proven by results.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">End-to-End Mastery</h3>
            <p className="mt-4 text-gray-600">
              From concept and 3D visualization to manufacturing and turnkey fit-out — everything under one roof.
            </p>
          </div>
        </div>

        {/* Why Choose Us – elegant list with icons */}
        <div className="mt-24 bg-gray-50 rounded-3xl p-10 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Leading Companies Choose Studio Archifiction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "10+ years specializing only in corporate & office interiors",
              "In-house architects, project managers & furniture manufacturing",
              "Free 3D visualization & detailed BOQ on every project",
              "On-time, on-budget delivery — guaranteed",
              "Direct access to founders throughout the project",
              "After-service support & 5-year warranty on furniture",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-700 mb-8">
            Ready to create a workspace your team loves and your clients remember?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-red-600 text-white px-9 py-5 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-xl hover:shadow-red-600/25"
          >
            Start Your Project Today
          </a>
        </div>

      </div>
    </section>
  );
}