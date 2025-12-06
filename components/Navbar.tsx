"use client";
import Link from "next/link";
import Button from "./Button";
import { LuChefHat } from "react-icons/lu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center px-5 py-3 sticky top-0 bg-white z-50 border-b border-b-gray-200">
      <div className="flex items-center gap-1">
        <LuChefHat className="w-[30px] h-[30px] text-[#e05d44]" />
        <h1 className="text-[25px] tracking-widest font-mono font-semibold">
          Mako
        </h1>
      </div>
      <div className="flex gap-16 items-center">
        <ul className="flex gap-10 text-[#696969]">
          <Link href="/">
            <li
              className={`hover:text-black cursor-pointer font-semibold  ${
                pathname == "/" ? "border-b-2 border-b-[#e05d44]" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/menu">
            <li
              className={`hover:text-black cursor-pointer font-semibold  ${
                pathname == "/menu" ? "border-b-2 border-b-[#e05d44]" : ""
              }`}
            >
              Menu
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`hover:text-black cursor-pointer font-semibold  ${
                pathname == "/contact" ? "border-b-2 border-b-[#e05d44]" : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
        <Button type="primary" openBooking={true}>
          Book a Table
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
