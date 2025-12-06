import { FaLeaf, FaCouch } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

const features = [
  {
    icon: <FaLeaf className="w-8 h-8 text-[#e05d44]" />,
    title: "Fresh Ingredients",
    description:
      "Farm-to-table freshness in every bite. We source locally to ensure the highest quality.",
  },
  {
    icon: <GiChefToque className="w-8 h-8 text-[#e05d44]" />,
    title: "Expert Chefs",
    description:
      "Curated by Chef Jake with 10 years of culinary excellence in modern fusion cuisine.",
  },
  {
    icon: <FaCouch className="w-8 h-8 text-[#e05d44]" />,
    title: "Cozy Ambiance",
    description:
      "The perfect spot for romantic dates, family dinners, and quiet coffee breaks.",
  },
];

const HooksSection = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Why Choose Mako?
          </h2>{" "}
          <div className="w-20 h-1 bg-[#e05d44] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-8 rounded-2xl text-center border border-[#c3c3c3] transition-all duration-700 cursor-pointer hover:rotate-10"
            >
              <div className="absolute inset-0 bg-[#e05d44] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100" />

              <div className="relative z-10 flex justify-center mb-6">
                <div className="p-4 bg-[#fffbf0] rounded-full shadow-lg transition-colors group-hover:bg-white">
                  {feature.icon}
                </div>
              </div>

              <h3 className="relative z-10 text-xl font-bold mb-3 transition-colors group-hover:text-white">
                {feature.title}
              </h3>

              <p className="relative z-10 text-slate-500 leading-relaxed text-[16px] transition-colors group-hover:text-white/90">
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
