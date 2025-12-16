import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS, SPECIAL_OFFERS_BLOG } from "@/lib/constants";

export default function BlogPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-wider uppercase text-red-500 mb-3">
            Insights • Trends • Inspiration
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            The Studio Blog
          </h1>
          <p className="mt-4 text-sm lg:text-base font-light text-gray-300 max-w-3xl mx-auto">
            Expert guides, office design trends, client success stories, and proven strategies 
            to create workspaces that drive growth and inspire teams.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image with Hover Effect */}
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                      {post.tag}
                    </span>
                  </div>
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-4 lg:p-6">
                  <h2 className="text-lg lg:text-xl font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info + Read More */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>5 min read</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Special Offers Banner */}
          {SPECIAL_OFFERS_BLOG && SPECIAL_OFFERS_BLOG.length > 0 && (
            <div className="mt-16 bg-linear-to-r from-red-600 to-red-700 rounded-2xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Text Side */}
                <div className="p-6 lg:p-12 text-white">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3">
                    Exclusive Year-End Offers
                  </h3>
                  <p className="text-sm lg:text-base mb-4 opacity-95">
                    Premium executive desks at unbeatable prices — limited stock only.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full text-sm font-black hover:bg-gray-100 transition shadow"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-3">
                  {SPECIAL_OFFERS_BLOG.slice(0, 8).map((offer) => (
                    <div key={offer.id} className="relative rounded-lg overflow-hidden shadow group">
                      <Image
                        src={offer.image}
                        alt={offer.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 text-white text-xs">
                        <p className="font-bold">{offer.name}</p>
                        <p className="text-red-400 font-black text-sm">
                          ৳{offer.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="text-center mt-16 lg:mt-24">
            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Ready to transform your office?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center bg-red-600 text-white px-10 py-4 rounded-full text-sm lg:text-base font-black hover:bg-red-700 transition shadow hover:shadow-red-600/50"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition duration-300" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
