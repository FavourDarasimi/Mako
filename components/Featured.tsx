import Menu from "@/data/menu_data.json";
import DishCard from "@/components/DishCard";

const FeaturedDishes = () => {
  const featuredDishes = Menu.flatMap((category) => category.items).filter(
    (item) => item.featured
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Mako Favorites
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl px-4">
            Top picks from our kitchen this week.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#e05d44] mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 pb-6 sm:pb-8">
          {featuredDishes.map((dish, index) => (
            <div key={dish.id} className="flex flex-col h-full">
              <DishCard
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                featured={dish.featured}
                tags={dish.tags}
              />
            </div>
          ))}
        </div>

        {/* Optional: Empty State if no featured dishes */}
        {featuredDishes.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-500 text-base sm:text-lg">
              No featured dishes available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDishes;
