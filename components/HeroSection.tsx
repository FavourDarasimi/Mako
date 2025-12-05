import Button from "@/components/Button";
import Image from "next/image";
import hero_section from "@/public/images/hero-section.webp";
import img1 from "@/public/images/img1.webp";
import img2 from "@/public/images/img2.webp";
import { LuChefHat } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="flex items-stretch h-full gap-10 flex-1 mt-5">
      <div className="w-[50%] flex flex-col  justify-between relative">
        <div className="absolute top-10 right-10 w-10 h-10 bg-[#e69b82] rounded-full  animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-12 h-12 bg-[#e69b82] rounded-full animate-pulse"
          style={{ animationDelay: "1.2s", animationDuration: "4s" }}
        ></div>{" "}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="absolute w-48 h-48 border border-orange-500/40 rounded-full animate-ripple"></div>

          <div className="absolute w-48 h-48 border border-orange-500/40 rounded-full animate-ripple delay-1300"></div>

          <div className="absolute w-48 h-48 border border-orange-500/40 rounded-full animate-ripple delay-2600"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="absolute w-32 h-32 border border-orange-500/40 rounded-full animate-ripple"></div>

          <div className="absolute w-32 h-32 border border-orange-500/40 rounded-full animate-ripple delay-1300"></div>

          <div className="absolute w-32 h-32 border border-orange-500/40 rounded-full animate-ripple delay-2600"></div>
        </div>
        <Image
          src={img1}
          alt=""
          className="rotate-12 w-[150px] rounded-lg hover:-rotate-12 transition duration-500"
        />
        <div className="space-y-7">
          <LuChefHat className="w-8 h-8 text-[#e05d44]" />
          <h1 className="text-6xl max-w-2xl">Experience the Taste of Mako.</h1>
          <h1 className="text-xl">
            Modern cuisine. Timeless flavors. The city’s favorite dining spot.
          </h1>
          <div className="flex gap-4">
            <Button type="primary" className="text-[18px]">
              View a Menu
            </Button>
            <Button type="outline" className="text-[18px]">
              Book a Table
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src={img2}
            alt=""
            className="-rotate-12 w-[150px] rounded-lg hover:rotate-12 transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <Image
        src={hero_section}
        alt="hero section"
        className="w-[50%] h-[700px] rounded-lg"
      />
    </div>
  );
};

export default HeroSection;
