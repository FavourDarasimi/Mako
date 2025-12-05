import FeaturedDishes from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HooksSection from "@/components/HookSection";

export default function Home() {
  return (
    <section className="mx-10">
      <HeroSection />
      <HooksSection />
      <FeaturedDishes />
    </section>
  );
}
