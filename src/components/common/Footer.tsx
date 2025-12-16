// src/components/common/Footer.tsx
import { Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-gray-400 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 – Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Studio Archifiction
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Award-winning office interior design studio delivering modern, functional and timeless workspaces across Bangladesh since 2013.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { href: "https://www.facebook.com/StudioArchifiction/", Icon: Facebook },
                { href: "https://www.instagram.com/studio_archifiction/", Icon: Instagram },
                { href: "https://youtube.com/@yourchannel", Icon: Youtube },
                { href: "https://linkedin.com/company/studioarchifiction", Icon: Linkedin },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social media link"
                  className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Our Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-1 hover:text-red-500 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Office Interior Design",
                "Turnkey Fit-Out Solutions",
                "Custom Office Furniture",
                "Workspace Consultancy",
                "3D Visualization & Rendering",
                "Project Management",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="block py-1 hover:text-red-500 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact Info */}
          <div className="space-y-7">
            <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs">Call us 24/7</p>
                  <a
                    href="tel:+8801716501213"
                    className="text-white font-semibold text-base lg:text-lg hover:text-red-500 transition"
                  >
                    +880 1716 501213
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@studioarchifiction.com"
                  className="text-white hover:text-red-500 transition break-all"
                >
                  info@studioarchifiction.com
                </a>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <p className="leading-relaxed text-gray-300">
                  House#68, Road#6, Monsurabad,<br />
                  Adabor, Dhaka-1207, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs lg:text-sm gap-4">
          <p className="text-gray-500">
            © {currentYear} Studio Archifiction. All rights reserved.
          </p>
          <p className="text-gray-500 text-center sm:text-right">
            Designed & Developed by{" "}
            <a
              href="https://graphodio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 font-medium transition inline-block"
            >
              Graphodio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}