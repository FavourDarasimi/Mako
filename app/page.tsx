import AboutSection from "@/components/About";
import FeaturedDishes from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HooksSection from "@/components/HookSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section className=" md:space-y-14  space-y-10">
      <div>
        <HeroSection />
      </div>

      <div>
        <HooksSection />
      </div>

      <div>
        <FeaturedDishes />
      </div>

      <div>
        <AboutSection />
      </div>

      <div>
        <Testimonials />
      </div>
    </section>
  );
}
