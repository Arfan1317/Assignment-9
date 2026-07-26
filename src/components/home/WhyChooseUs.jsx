import { FaUserMd, FaCalendarCheck, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserMd className="text-[#0b6654] text-2xl" />,
      title: "Verified Doctors",
      description: "Consult with highly qualified and experienced doctors."
    },
    {
      icon: <FaCalendarCheck className="text-[#0b6654] text-2xl" />,
      title: "Fast Booking",
      description: "Book appointments in just a few clicks."
    },
    {
      icon: <FaShieldAlt className="text-[#0b6654] text-2xl" />,
      title: "Secure & Safe",
      description: "Your data is protected and 100% secure."
    },
    {
      icon: <FaHeadset className="text-[#0b6654] text-2xl" />,
      title: "24/7 Support",
      description: "We are here to help you anytime."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#112a36] mb-3">Why Choose DocAppoint?</h2>
          <div className="w-16 h-1 bg-[#0b6654] mx-auto rounded"></div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-[#112a36] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}