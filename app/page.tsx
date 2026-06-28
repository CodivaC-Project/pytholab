import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PopularTests from "@/components/sections/PopularTests";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Packages from "@/components/sections/Packages";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularTests />
      <Services />
      <WhyChooseUs />
      <Packages />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </>
  );
}
