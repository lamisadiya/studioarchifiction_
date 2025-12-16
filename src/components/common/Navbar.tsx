// src/components/common/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/products", label: "FURNITURE" },
    { href: "/space-calculator", label: "SPACE CALCULATOR" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/Logo.png"
                alt="Studio Archifiction – Office Interior Design Bangladesh"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation - Perfectly Centered */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <div className="flex items-center gap-8 xl:gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wider transition-colors duration-300
                      ${isActive(link.href)
                        ? "text-red-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
                        : "text-gray-700 hover:text-red-600"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="whitespace-nowrap bg-red-600 text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wider hover:bg-red-700 transition-shadow shadow-lg hover:shadow-red-600/30"
              >
                GET FREE CONSULTATION
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-gray-800"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Improved */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sliding Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Image
                  src="/images/Logo.png"
                  alt="Studio Archifiction"
                  width={160}
                  height={45}
                  className="h-11 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X className="w-7 h-7 text-gray-600" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-4 text-lg font-medium border-b border-gray-100 transition-colors ${
                      isActive(link.href)
                        ? "text-red-600"
                        : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="p-6 border-t">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-red-600 text-white py-4 rounded-full font-medium tracking-wider hover:bg-red-700 transition"
                >
                  GET FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}