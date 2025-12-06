import { FaCheckCircle } from "react-icons/fa";
import interior from "@/public/images/interior.webp";
import img2 from "@/public/images/img2.webp";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src={interior}
                alt="Mako Interior"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 z-20 w-48 md:w-64  rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img2}
                alt="Chef Plating"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#e05d44]/30 rounded-lg z-0"></div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-[#e05d44]"></span>
              <span className="text-[#e05d44] font-bold uppercase tracking-widest text-sm">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold t mb-6 leading-tight">
              Where Modern Taste <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#e05d44]/70 to-[#e05d44]">
                Meets Tradition
              </span>
            </h2>

            <p className="text-slate-500 mb-6 leading-relaxed">
              Established in 2024, Mako was born from a simple desire: to
              redefine the dining experience in Lagos. We don't just serve food;
              we curate moments.
            </p>

            <p className="text-slate-500 mb-8 leading-relaxed">
              Under the guidance of <strong>Executive Chef Jake</strong>, our
              kitchen blends locally sourced ingredients with international
              techniques. Whether it's our signature smoky Jollof or the Wagyu
              Burger, every dish tells a story of passion and precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Fresh, Organic Ingredients",
                "Master Chefs from Top Hotels",
                "Private Dining Available",
                "Award-Winning Wine List",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#e05d44] shrink-0" />
                  <span className="text-slate-500 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[#e05d44] pl-6 py-2">
              <p className="text-xl font-serif italic text-slate-500 mb-1">
                "Food is not just fuel, it is a language of love."
              </p>
              <p className="text-[#e05d44] font-bold text-sm">
                — Jake O., Head Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
