import { FaLeaf, FaCouch } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

const features = [
  {
    icon: (
      <FaLeaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Fresh Ingredients",
    description:
      "Farm-to-table freshness in every bite. We source locally to ensure the highest quality.",
  },
  {
    icon: (
      <GiChefToque className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Expert Chefs",
    description:
      "Curated by Chef Jake with 10 years of culinary excellence in modern fusion cuisine.",
  },
  {
    icon: (
      <FaCouch className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#e05d44]" />
    ),
    title: "Cozy Ambiance",
    description:
      "The perfect spot for romantic dates, family dinners, and quiet coffee breaks.",
  },
];

const HooksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Mako?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#e05d44] mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl text-center border border-gray-300 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-xl hover:bg-[#e05d44]"
            >
              {/* Background Overlay Effect */}

              {/* Icon Container */}
              <div className="relative z-10 flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <div className="p-3 sm:p-3.5 lg:p-4 bg-[#fffbf0] rounded-full shadow-lg transition-all duration-500 group-hover:bg-white">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 transition-colors duration-500 group-hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HooksSection;
