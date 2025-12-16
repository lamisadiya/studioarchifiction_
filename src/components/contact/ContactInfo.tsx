import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  const { corporate, registered } = CONTACT_INFO;

  return (
    <section className="py-8 lg:py-12 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Premium Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-semibold text-red-600 tracking-wider uppercase mb-2">
            Visit or Contact Us
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            We’re Here to Help You
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Our team is available 7 days a week — call, email, or visit our showroom.
          </p>
        </div>

        {/* Elegant Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Corporate Office – Primary */}
          <div className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-red-600 to-red-700" />
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900">
                    Corporate Office & Showroom
                  </h3>
                  <p className="text-red-600 font-semibold text-sm">Main Contact Point</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm text-gray-800 leading-relaxed mt-0.5">
                      {corporate.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Call / WhatsApp</p>
                    <a
                      href={`tel:${corporate.phone}`}
                      className="text-sm font-bold text-gray-900 hover:text-red-600 transition"
                    >
                      {corporate.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${corporate.email}`}
                      className="text-sm font-medium text-gray-900 hover:text-red-600 transition break-all"
                    >
                      {corporate.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Open Hours</p>
                    <p className="text-sm text-gray-800 font-medium leading-relaxed">
                      Sat–Thu: 10:00 AM – 8:00 PM<br />
                      Friday: 2:00 PM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registered Address – Secondary */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-gray-600" />
              Registered Head Office
            </h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</p>
                  <p className="text-sm leading-relaxed mt-0.5">
                    {registered.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</p>
                  <a href={`tel:${registered.phone}`} className="text-sm hover:text-red-600 transition">
                    {registered.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                  <a href={`mailto:${registered.email}`} className="text-sm hover:text-red-600 transition break-all">
                    {registered.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to transform your workspace?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-md hover:shadow-red-600/40"
          >
            Book Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
