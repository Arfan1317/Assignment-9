import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { doctors } from "@/lib/doctorsData";

export default function TopRatedDoctors() {
 
  const topDoctors = doctors.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
       
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#112a36] mb-3">Top-Rated Doctors</h2>
          <div className="w-16 h-1 bg-[#0b6654] mx-auto rounded"></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              
              <div className="bg-gray-100 flex justify-center pt-6 px-6 h-64 overflow-hidden">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name} 
                  width={300} 
                  height={300} 
                  className="object-contain object-bottom"
                />
              </div>

              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#112a36] mb-1">{doctor.name}</h3>
                <p className="text-[#0b6654] font-medium text-sm mb-3">{doctor.specialty}</p>
                
                
                <div className="flex items-center text-sm mb-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold text-gray-700 mr-1">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews})</span>
                </div>

               
                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <FaMapMarkerAlt className="text-[#0b6654] mr-2 flex-shrink-0" />
                  <span className="truncate">{doctor.hospital}</span>
                </div>

                
                <Link 
                  href={`/doctors/${doctor.id}`}
                  className="block w-full text-center bg-[#0b6654] text-white py-2.5 rounded font-medium hover:bg-[#095243] transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}