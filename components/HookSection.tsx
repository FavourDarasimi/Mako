import { FaLeaf, FaCouch } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

const features = [
  {
    icon: <FaLeaf className="w-8 h-8 text-amber-500" />,
    title: "Fresh Ingredients",
    description:
      "Farm-to-table freshness in every bite. We source locally to ensure the highest quality.",
  },
  {
    icon: <GiChefToque className="w-8 h-8 text-amber-500" />,
    title: "Expert Chefs",
    description:
      "Curated by Chef Dara with 10 years of culinary excellence in modern fusion cuisine.",
  },
  {
    icon: <FaCouch className="w-8 h-8 text-amber-500" />,
    title: "Cozy Ambiance",
    description:
      "The perfect spot for romantic dates, family dinners, and quiet coffee breaks.",
  },
];

export default function HooksSection() {
  return (
    // Background: Dark Slate (Slate-900)
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Why Choose Mako?
          </h2>
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>

        {/* The 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl text-center border border-slate-700 hover:border-amber-500 transition-colors duration-300"
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-900 rounded-full border border-slate-600 shadow-lg">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
