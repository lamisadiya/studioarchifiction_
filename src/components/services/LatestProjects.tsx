// src/components/services/LatestProjects.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { LATEST_PROJECTS } from "@/lib/constants";

export default function LatestProjects() {
  const { title, projects } = LATEST_PROJECTS;

  return (
    <section className="bg-linear-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-3">
            Fresh Off The Floor • 2025
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
            {title}
          </h2>

          <div className="h-1.5 w-28 bg-red-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Link
              href="/projects"
              key={index}
              className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7 text-white translate-y-3 group-hover:translate-y-0 transition-transform duration-500 min-h-[42%]">
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-black leading-snug">
                    {project.name}
                  </h3>

                  <p className="flex items-center gap-2 text-sm lg:text-base text-gray-200">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {project.location}
                  </p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-gray-100 transition-all shadow-lg">
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-2 ring-red-600/0 group-hover:ring-red-600/25 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
