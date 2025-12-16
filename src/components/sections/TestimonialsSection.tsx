// src/components/sections/TestimonialsSection.tsx
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-red-600 text-red-600" />
            ))}
            <span className="ml-4 text-lg font-semibold text-gray-700">
              4.9/5 from 550+ completed projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Words from Our Happy Clients
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From corporate leaders at Bashundhara and Maersk to multinational executives — 
            here’s what they say about working with Studio Archifiction.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-red-100 group-hover:text-red-200 transition" />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed italic mb-8">
                “{t.text}”
              </p>

              <div className="flex items-center gap-5">
                
                <div className="w-16 h-16 rounded-full p-0.5 bg-linear-to-br from-red-500 to-red-600">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role} • {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Final Trust CTA */}
<div className="mt-12 bg-gray-900 rounded-3xl p-8 lg:p-10 text-white text-center">
  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
    Be the next success story.
  </h3>
  <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
    Join Bashundhara, Maersk, NEC, and hundreds of others who transformed their spaces with us.
  </p>
  <Link
    href="/contact"
    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition shadow-2xl"
  >
    Book Your Free Consultation Today
  </Link>
</div>


      </div>
    </section>
  );
}
