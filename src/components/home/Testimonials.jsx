import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Rasel Ahmed",
      image: "/RaselAhmed.jpeg",
      review: "Excellent service and very easy to book appointments.",
      rating: 5
    },
    {
      id: 2,
      name: "Sadia Islam",
      image: "/SadiaIslam.jpeg",
      review: "Very professional and friendly doctors.",
      rating: 5
    },
    {
      id: 3,
      name: "Imran Hossain",
      image: "/ImranHossain.jpeg",
      review: "Very helpful platform. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
       
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#112a36] mb-3">What Our Patients Say</h2>
          <div className="w-16 h-1 bg-[#0b6654] mx-auto rounded"></div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              
              <div className="flex items-center space-x-4 mb-6">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={60} 
                  height={60} 
                  className="rounded-full object-cover border-2 border-emerald-50"
                />
                <h3 className="font-bold text-[#112a36]">{testimonial.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.review}"
              </p>
              
              <div className="flex text-yellow-400 text-lg space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}