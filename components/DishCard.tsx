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
      className="group bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-pointer"
    >
      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="inline-flex mt-2 items-center gap-2 bg-[#e05d44] text-white text-sm font-medium px-3 py-1 rounded-l-md relative">
            <span className="border-2 border-white p-[3px] rounded-full">
              <span className="w-1 h-1 bg-white  rounded-full flex"></span>
            </span>
            Best seller
            <span className="absolute -right-2.5 top-0 h-full w-0 border-y-12 border-y-transparent border-l-10 border-l-[#e05d44]"></span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <p className="text-xl font-bold">${price}</p>
        <span className="text-green-500 text-sm">● Available</span>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DishCard;
