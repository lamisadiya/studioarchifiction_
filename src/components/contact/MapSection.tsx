import { MapPin, Star, Navigation } from "lucide-react";
import { CONTACT_MAP } from "@/lib/constants";

export default function MapSection() {
  const { embedUrl, title, address, rating, reviews } = CONTACT_MAP;

  return (
    <section className="py-8 lg:py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Premium Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <p className="text-xs font-semibold text-red-600 tracking-wider uppercase mb-2">
            Visit Our Showroom
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Find Us in the Heart of Dhaka
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            Come experience our designs in person — our showroom is open 7 days a week.
          </p>
        </div>

        {/* Full-width Cinematic Map */}
        <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <div className="aspect-video lg:aspect-21/9 w-full">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Archifiction Showroom Location"
              className="absolute inset-0"
            />
          </div>

          {/* Floating Info Card 
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 text-center hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-red-600" />
                <h3 className="text-xl lg:text-2xl font-black text-gray-900">
                  {title}
                </h3>
              </div>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                {address}
              </p>

              {/* Rating 
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">{rating}</span>
                <span className="text-xs text-gray-600">({reviews} reviews)</span>
              </div>

              {/* Action Buttons 
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href="https://maps.google.com/?q=Studio+Archifiction+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition shadow-md"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Get Directions
                </a>
                <a
                  href="tel:+8801716501213"
                  className="inline-flex items-center justify-center border-2 border-gray-800 text-gray-900 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-900 hover:text-white transition"
                >
                  Call Now
                </a>
              </div> 
            </div>
          </div> */}
        </div>

        {/* Trust Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Showroom open <span className="font-bold">Sat–Thu 10AM–8PM</span> •{" "}
            <span className="font-bold">Friday 2PM–8PM</span>
          </p>
        </div>

      </div>
    </section>
  );
}
