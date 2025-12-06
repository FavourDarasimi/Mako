import Image from "next/image";
import featuredItems from "@/data/featured.json";
import Menu from "@/data/menu_data.json";

const FeaturedDishes = () => {
  const featuredDishes = Menu.flatMap((category) => category.items).filter(
    (item) => item.featured
  );
  return (
    <section className="">
      <div className="  px-6">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold  mb-2">
            Mako Favorites
          </h2>
          <p className="text-slate-500">
            Top picks from our kitchen this week.
          </p>
          <div className="w-20 h-1 bg-[#e05d44] mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-4 gap-6 pb-8 justify-center mx-40">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.featured && (
                  <div className="inline-flex mt-2 items-center gap-2 bg-[#e05d44] text-white text-sm font-medium px-3 py-1 rounded-l-md relative">
                    <span className="border-2 border-white p-[3px] rounded-full">
                      <span className="w-1 h-1 bg-white  rounded-full flex"></span>
                    </span>
                    Best seller
                    <span className="absolute -right-2.5 top-0 h-full w-0 border-y-12 border-y-transparent border-l-[10px] border-l-[#e05d44]"></span>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold">{dish.name}</h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {dish.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold">${dish.price}</p>
                <span className="text-green-500 text-sm">● Available</span>
              </div>

              <div className="flex gap-2 mt-3 flex-wrap">
                {dish.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
