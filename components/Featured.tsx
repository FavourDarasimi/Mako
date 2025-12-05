import Image from "next/image";
import featuredItems from "@/data/featured.json";

const FeaturedDishes = () => {
  return (
    <section className="my-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold  mb-2">
            Mako Favorites
          </h2>
          <p className="text-slate-500">
            Top picks from our kitchen this week.
          </p>
          <div className="w-20 h-1 bg-[#e05d44] mt-4 rounded"></div>
        </div>

        <div className="flex gap-6 pb-8 justify-center scrollbar-hide">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] md:min-w-[350px]  rounded-2xl overflow-hidden snap-center  shadow-xl  transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[22px] font-bold mb-3 line-clamp-1">
                  {item.name}
                </h3>
                <div className="flex gap-3 mb-3">
                  {item.tags.map((tag) => (
                    <div key={tag}>
                      <h1 className="bg-[#e05d44] text-white text-[12px] tracking-widest py-1 px-2 rounded-full">
                        {tag}
                      </h1>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] mb-3 tracking-wide line-clamp-3">
                  {item.description}
                </p>
                <h1 className="text-[24px]  font-bold ">
                  ${item.price.toLocaleString()}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
