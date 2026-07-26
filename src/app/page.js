import HeroBanner from "@/components/home/HeroBanner";
import TopRatedDoctors from "@/components/home/TopRatedDoctors";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <TopRatedDoctors />
      <WhyChooseUs />
      <CallToAction />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}