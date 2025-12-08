import Button from "@/components/Button";
import Image from "next/image";
import hero_section from "@/public/images/hero-section.webp";
import img1 from "@/public/images/img1.webp";
import img2 from "@/public/images/img2.webp";
import { LuChefHat } from "react-icons/lu";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-10 flex-1 mt-4 sm:mt-5 px-2 md:px-6 lg:px-8  mx-auto">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col md:justify-between justify-center  relative py-6 sm:py-8 lg:py-0 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        {/* Decorative Floating Dots */}
        <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 bg-[#e69b82] rounded-full animate-pulse  sm:block" />
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#e69b82] rounded-full animate-pulse  sm:block" />

        {/* Ripple Effect Circles - Hidden on Mobile */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none  md:flex">
          <div className="absolute w-32 lg:w-48 h-32 lg:h-48 border border-orange-500/40 rounded-full animate-ripple"></div>
          <div className="absolute w-32 lg:w-48 h-32 lg:h-48 border border-orange-500/40 rounded-full animate-ripple delay-1300"></div>
          <div className="absolute w-32 lg:w-48 h-32 lg:h-48 border border-orange-500/40 rounded-full animate-ripple delay-2600"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none  md:flex">
          <div className="absolute w-24 lg:w-32 h-24 lg:h-32 border border-orange-500/40 rounded-full animate-ripple"></div>
          <div className="absolute w-24 lg:w-32 h-24 lg:h-32 border border-orange-500/40 rounded-full animate-ripple delay-1300"></div>
          <div className="absolute w-24 lg:w-32 h-24 lg:h-32 border border-orange-500/40 rounded-full animate-ripple delay-2600"></div>
        </div>

        {/* Top Decorative Image */}
        <div>
          <Image
            src={img1}
            alt="Decorative food image"
            className="rotate-6 sm:rotate-12 w-24 sm:w-32 md:w-[150px] rounded-lg transition duration-500 relative z-10 hidden sm:block"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-5 md:space-y-7 relative z-10">
          <div>
            <LuChefHat className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl font-bold leading-tight text-gray-900">
            Experience the Taste of Mako.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
            Modern cuisine. Timeless flavors. The city's favorite dining spot.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <div>
              <Link href="/menu">
                <Button
                  type="primary"
                  className="text-base sm:text-lg w-full sm:w-auto"
                >
                  View a Menu
                </Button>
              </Link>
            </div>
            <div>
              <Button
                type="outline"
                className="text-base sm:text-lg w-full sm:w-auto"
                openBooking={true}
              >
                Book a Table
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Image */}
        <div className="flex justify-end relative z-10">
          <div>
            <Image
              src={img2}
              alt="Decorative food image"
              className="-rotate-6 sm:-rotate-12 w-24 sm:w-32 md:w-[150px] rounded-lg transition duration-500 ease-in-out hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src={hero_section}
          alt="Mako restaurant dining experience"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-lg shadow-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
