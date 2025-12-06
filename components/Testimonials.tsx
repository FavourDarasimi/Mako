import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      text: "Mako has quickly become my favorite spot in the city. The flavors are incredible, the presentation is beautiful, and the staff makes you feel genuinely welcome. Every dish tastes like it was made with care.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Michael O.",
      text: "Amazing food, elegant atmosphere, and top-tier service. I’ve dined here twice already, and each time the experience has been unforgettable. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=59",
    },
    {
      id: 3,
      name: "Amara E.",
      text: "From the moment we walked in, everything felt perfect—the ambiance, the aroma, and the attention to detail. The dishes were vibrant and full of flavor, and the chef’s creativity really shows. Mako is truly a must-visit dining destination.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  return (
    <section className="">
      <div className="  mx-32 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer Love
          </h2>
          <p className="mt-1  text-gray-600 mb-4">
            Don't just take our word for it. Here is what they are saying.
          </p>
          <div className="w-20 h-1 bg-[#e05d44] mx-auto rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col h-full hover:scale-105 "
            >
              {/* Icon Header */}
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-[#e05d44]" />
              </div>

              {/* Content */}
              <p className="text-gray-500 text-lg italic mb-6 line-clamp-4">
                "{review.text}"
              </p>

              <div className="border-t border-gray-200 pt-6 mt-auto">
                <div className="flex items-center justify-between">
                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative overflow-hidden h-12 w-12">
                      <Image
                        src={review.image}
                        fill
                        alt=""
                        className="object-cover rounded-full "
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-[2px] text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        strokeWidth={40}
                        fill={i < review.rating ? "#e05d44" : "#ffffff "}
                        className="stroke-[#e05d44] w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
