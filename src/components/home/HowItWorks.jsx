import { FaSearch, FaRegCalendarAlt, FaStethoscope } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-[#0b6654] text-2xl" />,
      title: "Search Doctors",
      description: "Search for specialists based on your needs."
    },
    {
      id: 2,
      icon: <FaRegCalendarAlt className="text-[#0b6654] text-2xl" />,
      title: "Book Appointment",
      description: "Choose date and time that works for you."
    },
    {
      id: 3,
      icon: <FaStethoscope className="text-[#0b6654] text-2xl" />,
      title: "Visit & Get Care",
      description: "Visit the doctor and feel better."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#112a36] mb-3">How It Works</h2>
          <div className="w-12 h-1 bg-[#0b6654] mx-auto rounded"></div>
        </div>

       
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center w-full md:w-1/3 relative z-10">
              <div className="w-20 h-20 bg-[#eef7f6] rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-50">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#112a36] mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">
                {step.description}
              </p>

              
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-15%] xl:right-[-25%] text-gray-200 text-3xl transform -translate-y-1/2">
                  <FaArrowRightLong />
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}