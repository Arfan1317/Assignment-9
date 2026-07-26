"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroBanner() {
  return (
    <section className="relative bg-[#f4f9f9] overflow-hidden">
    
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0b6654] rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0b6654] rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform translate-x-1/3 translate-y-1/3"></div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full pb-12"
      >
       
        <SwiperSlide>
          <div className="container mx-auto px-4 max-w-7xl min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-between py-12 md:py-0">
            
           
            <div className="w-full md:w-1/2 flex flex-col space-y-6 z-10 px-4 md:px-0 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#112a36] leading-tight">
                Your Health, <br />
                Our Priority
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                Find and book appointments with trusted doctors at your convenience. Your health is our priority.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-2">
                <Link 
                  href="/appointments" 
                  className="bg-[#0b6654] text-white px-8 py-3.5 rounded font-medium hover:bg-[#095243] transition-colors w-full sm:w-auto shadow-md"
                >
                  Book Appointment
                </Link>
                <Link 
                  href="/about" 
                  className="flex items-center text-[#0b6654] font-medium hover:text-[#095243] transition-colors group"
                >
                  Learn More 
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

           
            <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
              <div className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] md:w-[500px] md:h-[550px]">
                <Image
                  src="/BannerPhoto.png"
                  alt="Doctor with crossed arms"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="container mx-auto px-4 max-w-7xl min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-between py-12 md:py-0">
            <div className="w-full md:w-1/2 flex flex-col space-y-6 z-10 px-4 md:px-0 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#112a36] leading-tight">
                Expert Care, <br />
                Close to Home
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                Connect with top-rated specialists and get the medical attention you deserve without the hassle.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-2">
                <Link href="/doctors" className="bg-[#0b6654] text-white px-8 py-3.5 rounded font-medium hover:bg-[#095243] transition-colors w-full sm:w-auto shadow-md">
                  View Doctors
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
              <div className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] md:w-[500px] md:h-[550px]">
                <Image
                  src="/BannerPhoto.png"
                  alt="Doctor with crossed arms"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
}