// src/components/common/TopBar.tsx
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-zinc-900 text-gray-300 text-sm py-3.5 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Left side – Subtle CTA + Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-xs lg:text-sm">
            <a
              href="tel:+8801716501213"
              className="flex items-center gap-2 hover:text-white transition group"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span className="font-medium text-white">+880 1716 501213</span>
              <span className="hidden sm:inline text-gray-400">· Free Consultation</span>
            </a>

            <a
              href="mailto:info@studioarchifiction.com"
              className="flex items-center gap-2 hover:text-white transition lg:flex"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span>info@studioarchifiction.com</span>
            </a>
          </div>

          {/* Right side – Clean links (only on larger screens) */}
          <div className="hidden md:flex items-center gap-6 text-xs lg:text-sm">
            <a href="/about" className="hover:text-red-500 transition">
              About
            </a>
            <a href="/projects" className="hover:text-red-500 transition font-medium">
              View Portfolio →
            </a>
            <a href="/contact" className="bg-red-600 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-red-700 transition">
              Get Quote
            </a>
          </div>

          {/* Mobile fallback – only phone + tiny CTA */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+8801716501213"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}