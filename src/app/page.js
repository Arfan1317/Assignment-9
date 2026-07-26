import HeroBanner from "@/components/home/HeroBanner";
import TopRatedDoctors from "@/components/home/TopRatedDoctors";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroBanner />
      
     
      <TopRatedDoctors />
      
     
      <WhyChooseUs />
    </div>
  );
}