import Image from "next/image";
import featuredItems from "@/data/featured.json";
import Menu from "@/data/menu_data.json";
import DishCard from "@/components/DishCard";

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
            <DishCard
              key={dish.id}
              id={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
              featured={dish.featured}
              tags={dish.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
