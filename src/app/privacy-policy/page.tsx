// src/app/privacy-policy/page.tsx
import { Metadata } from "next";
import TopBar from "@/components/common/TopBar";
import Navbar from "@/components/common/Navbar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Studio Archifiction",
  description: "How we collect, use, and protect your information",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Top Bar & Navbar */}
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300">Last updated: 13 October 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16 text-gray-800 leading-relaxed text-lg">

            <p className="text-xl mb-12">
              Studio Archifiction (“we”, “our”, “us”) operates <strong>studioarchifiction.com</strong>. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Who we are</h2>
            <p className="mb-8">
              Studio Archifiction is an architecture and interior design studio based in Dhaka, Bangladesh. You can reach us at:
            </p>
            <div className="bg-gray-100 rounded-2xl p-8 mb-12 font-medium">
              <strong>Studio Archifiction</strong><br />
              House #68, Road #6, Monsurabad, Adabor, Dhaka-1207<br />
              Email: <a href="mailto:studioarchifiction@gmail.com" className="text-red-600 hover:underline">studioarchifiction@gmail.com</a><br />
              Phone: <a href="tel:+8801716501213" className="text-red-600 hover:underline">01716-501213</a><br />
              Website: <a href="https://studioarchifiction.com" className="text-red-600 hover:underline">studioarchifiction.com</a>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Information we collect</h2>
            <ul className="list-disc list-outside space-y-4 ml-8 mb-12 text-lg">
              <li>Contact details you submit (name, email, phone) via forms.</li>
              <li>Project/brief details you share for quotations (site address, size, images/files).</li>
              <li>Business communication (emails, proposals, invoices).</li>
              <li>Usage data (pages viewed, device type, approximate location) via analytics cookies.</li>
              <li>Media/files you upload or send to us for project purposes.</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">How we use information</h2>
            <ul className="list-disc list-outside space-y-4 ml-8 mb-12 text-lg">
              <li>To respond to enquiries, prepare proposals, and deliver services.</li>
              <li>To schedule site visits and coordinate vendors/consultants.</li>
              <li>To improve our website, services, and customer support.</li>
              <li>To meet legal, security, and record-keeping requirements.</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Cookies & analytics</h2>
            <p className="mb-6">We use essential cookies for site functionality and analytics cookies (e.g., Google Analytics) for aggregated traffic insights.</p>
            <ul className="list-disc list-outside space-y-4 ml-8 mb-12 text-lg">
              <li>You can manage cookies in your browser.</li>
              <li>Non-essential cookies can be declined via our banner (where shown).</li>
            </ul>

            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl mb-12">
              <strong className="text-xl block mb-3">Cookie summary:</strong>
              <ul className="list-disc list-outside space-y-2 ml-6">
                <li><strong>Essential:</strong> security, load balancing, preferences.</li>
                <li><strong>Analytics (non-essential):</strong> page views, session duration, device info (aggregated).</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Who we share information with</h2>
            <p className="mb-6">We <strong>do not sell</strong> your personal data. We may share limited information with:</p>
            <ul className="list-disc list-outside space-y-4 ml-8 mb-12 text-lg">
              <li>Service providers (hosting, email, analytics, file storage, CRM) under confidentiality agreements.</li>
              <li>Professional partners (consultants, contractors, vendors) only as needed for project delivery.</li>
              <li>Authorities when required by law or to protect our rights and safety.</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Your choices & rights</h2>
            <ul className="list-disc list-outside space-y-4 ml-8 mb-16">
              <li>Access / correction / deletion: request a copy, correction, or deletion of your data.</li>
              <li>Consent: withdraw at any time for non-essential cookies or marketing.</li>
              <li>Contact us using the details above to exercise your rights.</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Security • Children • Changes • Contact</h2>
            <p className="mb-8">We use reasonable measures to protect your data • Site not for children under 13 • Policy may be updated • Contact us anytime.</p>

            <div className="bg-gray-900 text-white rounded-3xl p-12 text-center mt-20">
              <p className="text-2xl font-bold mb-6">Studio Archifiction</p>
              <p className="space-y-2">
                House #68, Road #6, Monsurabad, Adabor, Dhaka-1207<br />
                <a href="mailto:studioarchifiction@gmail.com" className="text-red-400 hover:underline">studioarchifiction@gmail.com</a><br />
                <a href="tel:+8801716501213" className="text-red-400 hover:underline">01716-501213</a>
              </p>
            </div>

            <div className="text-center mt-20">
              <a href="/" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition">
                Back to Home
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp & Footer */}
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
