"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Building2, MapPin, Calendar, Filter } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/constants";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  const categories = [
    { id: "all", name: "All Projects", count: PROJECTS_DATA.length },
    { id: "corporate", name: "Corporate Offices", count: PROJECTS_DATA.filter(p => p.category === "corporate").length },
    { id: "showroom", name: "Showrooms", count: PROJECTS_DATA.filter(p => p.category === "showroom").length },
    { id: "factory", name: "Factories", count: PROJECTS_DATA.filter(p => p.category === "factory").length },
    { id: "others", name: "Special Projects", count: PROJECTS_DATA.filter(p => p.category === "others").length },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-wider uppercase text-red-500 mb-3">
            550+ Completed Projects • Nationwide Excellence
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Our Work Speaks
          </h1>
          <p className="mt-4 text-sm lg:text-base font-light text-gray-300 max-w-3xl mx-auto">
            From corporate headquarters to iconic showrooms — every project is a testament to precision, innovation, and timeless design.
          </p>
        </div>
      </section>

      {/* Premium Filter Pills */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`group relative px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-500 overflow-hidden ${
                  filter === cat.id
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat.id === "all" && <Filter className="w-4 h-4" />}
                  {cat.id === "corporate" && <Building2 className="w-4 h-4" />}
                  {cat.id === "showroom" && <MapPin className="w-4 h-4" />}
                  {cat.id === "factory" && <Calendar className="w-4 h-4" />}
                  {cat.id === "others" && <ArrowRight className="w-4 h-4" />}
                  {cat.name}
                  <span className="text-xs font-normal opacity-70">({cat.count})</span>
                </span>
                {filter === cat.id && (
                  <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-700 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid – Cinematic & Luxurious */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-black leading-snug">
                      {project.name}
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-gray-200">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-md">
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/0 group-hover:ring-red-600/20 transition-all duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 lg:mt-24">
            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Your office deserves this level of excellence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-red-600 text-white px-10 py-4 rounded-full text-xl lg:text-2xl font-bold hover:bg-red-700 transition shadow-lg hover:shadow-red-600/50"
            >
              Start Your Project Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
