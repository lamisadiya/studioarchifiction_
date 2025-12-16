// src/components/sections/BestSellingGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BestSellingGrid() {
  // Replace these with your actual hero furniture pieces
  const featuredFurniture = [
    { src: "/images/1.jpg", title: "Executive Director Desk", category: "Workstations" },
    { src: "/images/2.jpg", title: "Ergonomic Task Chair", category: "Seating" },
    { src: "/images/3.jpg", title: "Modular Conference Table", category: "Meeting Rooms" },
    { src: "/images/4.jpeg", title: "Acoustic Partition System", category: "Privacy Solutions" },
    { src: "/images/5.jpg", title: "CEO Cabin Suite", category: "Executive" },
    { src: "/images/6.jpg", title: "Reception Counter", category: "Front Office" },
    { src: "/images/7.png", title: "Collaborative Lounge Set", category: "Breakout Zone" },
    { src: "/images/8.jpg", title: "Storage & Cabinetry", category: "Organization" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Elegant heading */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-red-600 tracking-wider uppercase mb-4">
            In-House Crafted Furniture
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Timeless Pieces for Modern Workspaces
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Every piece is designed and manufactured in our own factory — ensuring unmatched quality, 
            perfect integration with your office design, and faster delivery.
          </p>
        </div>

        {/* Premium grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {featuredFurniture.map((item, i) => (
            <Link
              key={i}
              href="/products"
              className="group block relative overflow-hidden rounded-3xl bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text overlay on hover */}
              <div className="absolute bottom-4 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-medium text-gray-200">{item.category}</p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              </div>

            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center bg-red-600 text-white px-9 py-5 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-xl hover:shadow-red-600/25"
          >
            Explore Full Furniture Collection
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}