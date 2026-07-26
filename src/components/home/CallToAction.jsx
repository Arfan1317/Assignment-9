import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#eef7f6] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-12 md:pt-0">
          
         
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left z-10 py-8">
            <h2 className="text-3xl font-bold text-[#112a36] mb-4">
              Your Health is in Good Hands
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Book an appointment today and get the best care from our specialists.
            </p>
            <Link 
              href="/appointments" 
              className="inline-block bg-[#0b6654] text-white px-8 py-3 rounded font-medium hover:bg-[#095243] transition-colors shadow-md"
            >
              Book Now
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative h-[300px] md:h-[400px]">
            <Image 
              src="/Book.png" 
              alt="Medical Specialists" 
              fill
              className="object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}