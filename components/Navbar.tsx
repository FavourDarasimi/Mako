"use client";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-[27px] font-semibold">Mako</h1>
      <div className="flex gap-16 items-center">
        <ul className="flex gap-10 text-[#868686]">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Menu</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
        <Button type="primary">Order Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
