import AboutSection from "@/components/About";
import FeaturedDishes from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HooksSection from "@/components/HookSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="mx-10 space-y-32">
      <HeroSection />
      <HooksSection />
      <FeaturedDishes />
      <AboutSection />
      <Testimonials />
    </section>
  );
}
