import Image from "next/image";

type DishCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
  tags: string[];
};

const DishCard = ({
  id,
  name,
  description,
  price,
  image,
  featured,
  tags,
}: DishCardProps) => {
  return (
    <div
      key={id}
      className="group flex-1 bg-white rounded-xl sm:rounded-2xl shadow-md p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 left-0 inline-flex items-center gap-1.5 sm:gap-2 bg-[#e05d44] text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-r-md shadow-lg">
            <span className="border-2 border-white p-0.5 sm:p-[3px] rounded-full shrink-0">
              <span className="w-1 h-1 bg-white rounded-full flex"></span>
            </span>
            <span className="whitespace-nowrap">Best seller</span>
            <span className="absolute -right-2 top-0 h-full w-0 border-y-12 sm:border-y-14 border-y-transparent border-l-8 sm:border-l-10 border-l-[#e05d44]"></span>
          </div>
        )}
      </div>

      {/* Dish Name */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Price and Availability */}
      <div className="flex items-center justify-between mt-3 sm:mt-4">
        <p className="text-lg sm:text-xl font-bold text-gray-900">${price}</p>
        <span className="flex items-center gap-1 text-green-500 text-xs sm:text-sm font-medium">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
          Available
        </span>
      </div>

      {/* Tags */}
      <div className="flex gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 hover:bg-gray-200 text-[10px] sm:text-xs rounded-full text-gray-700 font-medium transition-colors overflow-hidden"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DishCard;
