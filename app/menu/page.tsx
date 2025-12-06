"use client";

import Image from "next/image";
import { useState } from "react";
import dishes from "@/data/menu_data.json";
import { IoSearchOutline } from "react-icons/io5";
import all from "@/public/images/all.webp";
import starters from "@/public/images/starters.webp";
import DishCard from "@/components/DishCard";

export default function MenuPage() {
  const categories = [
    { name: "All", image: all },
    { name: "Starters", image: starters },
    { name: "Pasta", image: all },
    { name: "Bowls", image: all },
    { name: "Global Mains", image: all },
    { name: "Sandwiches & Wraps", image: all },
    { name: "Desserts", image: all },
  ];

  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered =
    active === "All"
      ? dishes
          .flatMap((category) => category.items)
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
      : dishes
          .filter((cat) => cat.menu === active)
          .flatMap((cat) =>
            cat.items.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
          );

  return (
    <div className="px-6 py-5 mx-40 font-sans">
      <div className="flex justify-between w-full">
        <div className="">
          <h1 className="text-3xl font-bold">Welcome to Mako Restaurant</h1>
          <p className="text-gray-500 mt-2">Choose the category</p>
        </div>
        <div className="">
          <IoSearchOutline className="absolute w-5 h-5 ml-3 mt-3 text-gray-400 translate-y-0.5" />
          <input
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 pl-10 px-4 py-3 rounded-xl border border-gray-300 focus:border-[#e05d44] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 pt-3 overflow-x-auto pb-3 justify-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={` px-2 py-3 shadow-md rounded-full  flex flex-col items-center cursor-pointer border border-gray-300 transition duration-500 ease-in-out hover:scale-105 ${
              active == cat.name ? "bg-[#e05d44] text-white" : "bg-white"
            }`}
            onClick={() => setActive(cat.name)}
          >
            <Image
              src={cat.image}
              alt=""
              className="object-cover w-20 h-20 rounded-full"
            />
            <h1 className="mt-3 text-center font-semibold text-[13px] w-[70px]">
              {cat.name}
            </h1>
          </div>
        ))}
      </div>

      {filtered.length > 0 ? (
        ""
      ) : active == "All" ? (
        <h2 className="text-2xl font-semibold mt-10 text-center">
          No dishes found
        </h2>
      ) : (
        <h2 className="text-2xl font-semibold mt-10 text-center">
          No dishes found in {active} menu
        </h2>
      )}

      {/* Dish Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3 transition ease-in-out duration-700">
        {filtered.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
            featured={dish.featured}
            tags={dish.tags}
          />
        ))}
      </div>
    </div>
  );
}
