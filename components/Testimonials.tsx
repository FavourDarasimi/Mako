import { FaStar, FaQuoteLeft } from "react-icons/fa";
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
      text: "Amazing food, elegant atmosphere, and top-tier service. I've dined here twice already, and each time the experience has been unforgettable. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=59",
    },
    {
      id: 3,
      name: "Amara E.",
      text: "From the moment we walked in, everything felt perfect—the ambiance, the aroma, and the attention to detail. The dishes were vibrant and full of flavor, and the chef's creativity really shows. Mako is truly a must-visit dining destination.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=32",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Customer Love
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here is what they are saying.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#e05d44] mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full bg-white"
            >
              {/* Quote Icon */}
              <div className="mb-3 sm:mb-4">
                <FaQuoteLeft className="text-2xl sm:text-3xl text-[#e05d44]" />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg italic mb-4 sm:mb-5 lg:mb-6 line-clamp-4 leading-relaxed grow">
                "{review.text}"
              </p>

              {/* Footer Section */}
              <div className="border-t border-gray-200 pt-4 sm:pt-5 lg:pt-6 mt-auto">
                <div className="flex items-center justify-between gap-3">
                  {/* User Info */}
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="relative overflow-hidden h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                      <Image
                        src={review.image}
                        fill
                        alt={`${review.name} avatar`}
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 40px, 48px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500 hidden sm:block">
                        Verified Customer
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i}>
                        <FaStar
                          strokeWidth={40}
                          fill={i < review.rating ? "#e05d44" : "#ffffff"}
                          className="stroke-[#e05d44] w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
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
