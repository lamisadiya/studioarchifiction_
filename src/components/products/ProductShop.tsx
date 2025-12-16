"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Flame, Search, Filter, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { PRODUCT_CATEGORIES, SPECIAL_OFFERS, PRODUCTS } from "@/lib/constants";

export default function ProductShop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (selectedCategory !== "All") filtered = filtered.filter(p => p.category === selectedCategory);
    if (searchQuery) filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "newest": return (b.id || 0) - (a.id || 0);
        case "popular": return (b.reviewCount || 0) - (a.reviewCount || 0);
        default: return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-wider uppercase text-red-500 mb-3">
            Premium Office Furniture • Made in Bangladesh
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Executive Collection
          </h1>
          <p className="mt-4 text-sm lg:text-base font-light text-gray-300 max-w-3xl mx-auto">
            Handcrafted director desks, conference tables, and premium workstations — built to impress.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

            {/* LEFT SIDEBAR – Filters */}
            <aside className="space-y-6">

              {/* Search */}
              <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search furniture..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-red-600" /> Categories
                </h3>
                <ul className="space-y-1.5">
                  <li>
                    <button
                      onClick={() => { setSelectedCategory("All"); setCurrentPage(1); }}
                      className={`w-full text-left px-4 py-2 rounded-xl font-bold text-sm transition ${selectedCategory === "All" ? "bg-red-600 text-white shadow" : "hover:bg-gray-50"}`}
                    >
                      All Products ({PRODUCTS.length})
                    </button>
                  </li>
                  {PRODUCT_CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter(p => p.category === cat).length;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                          className={`w-full text-left px-4 py-2 rounded-xl font-medium text-sm transition ${selectedCategory === cat ? "bg-red-600 text-white shadow" : "hover:bg-gray-50"}`}
                        >
                          {cat} <span className="text-xs opacity-70">({count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${(priceRange[1]/500000)*100}%, #e5e7eb ${(priceRange[1]/500000)*100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-sm font-bold text-gray-800">
                  <span>৳0</span>
                  <span>৳{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-linear-to-br from-red-600 to-red-700 rounded-2xl shadow-md p-4 text-white">
                <h3 className="text-xl font-black mb-4">Limited Time Offers</h3>
                {SPECIAL_OFFERS.slice(0,3).map((offer) => (
                  <div key={offer.id} className="flex gap-2 mb-4 last:mb-0 bg-white/10 rounded-xl p-2 backdrop-blur">
                    <Image src={offer.image} alt={offer.name} width={60} height={60} className="rounded-lg object-cover shadow" />
                    <div>
                      <h4 className="font-bold text-sm">{offer.name}</h4>
                      <p className="text-lg font-black">৳{offer.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                <Link href="/contact" className="mt-2 inline-block bg-white text-red-600 px-4 py-2 rounded-full font-black text-sm hover:bg-gray-100 transition">
                  Claim Offer
                </Link>
              </div>
            </aside>

            {/* RIGHT SIDE – Product Grid */}
            <div className="lg:col-span-3 space-y-6">

              {/* Results Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white rounded-2xl shadow-md p-4 border border-gray-100 text-sm">
                <p className="font-medium text-gray-700">
                  Showing <strong>{((currentPage-1)*itemsPerPage)+1}</strong>–<strong>{Math.min(currentPage*itemsPerPage, filteredAndSortedProducts.length)}</strong> of <strong>{filteredAndSortedProducts.length}</strong> products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-xl font-bold text-sm focus:border-red-600 focus:outline-none transition"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {paginatedProducts.map((product) => (
                  <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isHot && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow">
                          <Flame className="w-3 h-3" /> HOT
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-red-600 transition">
                        {product.name}
                      </h3>

                      {product.rating > 0 && (
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i<product.rating?"text-yellow-500 fill-current":"text-gray-300"}`}
                            />
                          ))}
                          <span className="ml-1 text-xs text-gray-600">({product.reviewCount||0})</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-xl font-black text-red-600">
                          ৳{product.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="bg-red-600 text-white font-black py-2 rounded-xl text-center text-sm group-hover:bg-red-700 transition">
                        View Details
                        <ArrowRight className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages>1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i+1)}
                      className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${currentPage===i+1?"bg-red-600 text-white shadow":"bg-white border-2 border-gray-300 hover:border-red-600 hover:text-red-600"}`}
                    >
                      {i+1}
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
