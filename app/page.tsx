import Hero from "@/components/Hero";
import PopularRoutes from "@/components/PopularRoutes";
import TourPackages from "@/components/TourPackages";
import TripPlanners from "@/components/TripPlanners";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularRoutes />
      <TourPackages />
      <TripPlanners />
      <Gallery />
      <Testimonials />
      <BlogSection />
    </>
  );
}
