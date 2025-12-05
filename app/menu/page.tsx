"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingBag, FaPlus } from "react-icons/fa";
// IMPORT THE DATA HERE
import { MENU_ITEMS, CATEGORIES } from "@/data/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  // Load Cart
  useEffect(() => {
    const savedCart = localStorage.getItem("mako_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save Cart
  useEffect(() => {
    localStorage.setItem("mako_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: any) => {
    setCart((prev) => [...prev, item]);
  };

  // Filter Logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-slate-900 pb-24">
      {/* Header */}
      <div className="bg-slate-800 pt-24 pb-10 px-6 shadow-xl border-b border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">
            Our Menu
          </h1>
          <p className="text-slate-400 mb-8">
            From Rustic Italian to Urban Bistro.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-slate-100 focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 text-slate-900"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  // Add an onError to handle missing images if needed
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x400/1e293b/FFF?text=Mako+Dish";
                  }}
                />
                <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-500 font-bold px-3 py-1 rounded-lg">
                  ₦{item.price.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-100">
                    {item.name}
                  </h3>
                </div>
                {/* Display the Sub-Category (e.g., Antipasti) */}
                <span className="inline-block bg-slate-700 text-amber-500 text-xs px-2 py-1 rounded mb-3">
                  {item.subCategory}
                </span>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full py-3 rounded-lg bg-slate-700 text-slate-200 font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
                >
                  <FaPlus /> Add to Tray
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
          <button className="flex items-center gap-4 bg-amber-500 text-slate-900 px-6 py-4 rounded-full shadow-2xl font-bold">
            <FaShoppingBag />
            <span>
              {cart.length} items • ₦{cartTotal.toLocaleString()}
            </span>
          </button>
        </div>
      )}
    </main>
  );
}
