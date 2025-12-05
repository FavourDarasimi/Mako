"use client";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-3 sticky top-0 bg-white z-10 border-b border-b-gray-200">
      <h1 className="text-[27px] font-semibold">Mako</h1>
      <div className="flex gap-16 items-center">
        <ul className="flex gap-10 text-[#595959]">
          <Link href="/">
            <li className="hover:text-black cursor-pointer">Home</li>
          </Link>
          <Link href="/menu">
            <li className="hover:text-black cursor-pointer">Menu</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-black cursor-pointer">Contact</li>
          </Link>
        </ul>
        <Button type="primary">Book a Table</Button>
      </div>
    </nav>
  );
};

export default Navbar;
