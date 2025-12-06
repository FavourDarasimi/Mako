"use client";
import Link from "next/link";
import Button from "./Button";
import { LuChefHat } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-3 sticky top-0 bg-white z-50 border-b border-b-gray-200">
      <div className="flex items-center gap-1">
        <LuChefHat className="w-[30px] h-[30px] text-[#e05d44]" />
        <h1 className="text-[27px] font-semibold">Mako</h1>
      </div>
      <div className="flex gap-16 items-center">
        <ul className="flex gap-10 text-[#696969]">
          <Link href="/">
            <li className="hover:text-black cursor-pointer font-semibold">
              Home
            </li>
          </Link>
          <Link href="/menu">
            <li className="hover:text-black cursor-pointer font-semibold">
              Menu
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-black cursor-pointer font-semibold">
              Contact
            </li>
          </Link>
        </ul>
        <Button type="primary">Book a Table</Button>
      </div>
    </nav>
  );
};

export default Navbar;
