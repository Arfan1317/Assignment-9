"use client";

import { useState, useContext, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import PrivateRoute from "@/components/shared/PrivateRoute";
import { doctors } from "@/lib/doctorsData";
import toast from "react-hot-toast";
import { 
  FiArrowLeft, FiStar, FiMapPin, FiClock, FiCalendar, 
  FiAward, FiHeart, FiGlobe, FiCheckCircle, FiX 
} from "react-icons/fi";

export default function DoctorDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(AuthContext);
  
  const [doctor, setDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    const foundDoctor = doctors.find((doc) => doc.id === id);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    }
  }, [id]);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    
   
    const formData = new FormData(e.target);
    const bookingData = Object.fromEntries(formData.entries());
    bookingData.doctorId = doctor.id;
    bookingData.doctorName = doctor.name;
    bookingData.userEmail = user.email;

    console.log("Saving to Database:", bookingData);
    
    toast.success(`Appointment booked with ${doctor.name} successfully!`);
    setIsModalOpen(false);
    
    
  };

  if (!doctor) {
    return (
      <PrivateRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b6654]"></div>
        </div>
      </PrivateRoute>
    );
  }

  return (
    <PrivateRoute>
      <div className="bg-[#f8f9fa] min-h-screen py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          
         
          <Link href="/appointments" className="inline-flex items-center text-[#0b6654] font-medium hover:underline mb-6">
            <FiArrowLeft className="mr-2" /> Back to All Doctors
          </Link>

        
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 mb-8">
            <div className="bg-gray-100 rounded-full w-48 h-48 flex items-center justify-center overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-emerald-50">
              <Image 
                src={doctor.image} 
                alt={doctor.name} 
                width={200} 
                height={200} 
                className="object-contain object-bottom pt-4"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-3">
              <h1 className="text-3xl font-bold text-[#112a36]">{doctor.name}</h1>
              <p className="text-lg text-[#0b6654] font-medium">{doctor.specialty}</p>
              
              <div className="flex items-center justify-center md:justify-start text-sm mb-4">
                <span className="font-bold text-gray-700 mr-1">{doctor.rating}</span>
                <div className="flex text-yellow-400 mr-2">
                  <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
                </div>
                <span className="text-gray-500">({doctor.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center md:justify-start"><FiAward className="text-[#0b6654] mr-2" /> MBBS, MD ({doctor.specialty})</div>
                <div className="flex items-center justify-center md:justify-start"><FiHeart className="text-[#0b6654] mr-2" /> {doctor.specialty}, Specialist</div>
                <div className="flex items-center justify-center md:justify-start"><FiCheckCircle className="text-[#0b6654] mr-2" /> Experience: {doctor.experience}</div>
                <div className="flex items-center justify-center md:justify-start"><FiGlobe className="text-[#0b6654] mr-2" /> English, Bengali</div>
                <div className="flex items-start justify-center md:justify-start sm:col-span-2 mt-2">
                  <FiMapPin className="text-[#0b6654] mr-2 mt-1" />
                  <span>{doctor.hospital}<br/>{doctor.location}</span>
                </div>
              </div>
            </div>
          </div>

         
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b6654] mb-3">About Doctor</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {doctor.description} Dedicated to providing personalized care and helping patients achieve better health outcomes. Highly experienced in adult and preventive care.
            </p>
          </div>

         
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b6654] mb-3">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm font-medium">Heart Diseases</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm font-medium">Preventive Care</span>
              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm font-medium">Hypertension</span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#0b6654] mb-3">Education</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>MBBS - Dhaka Medical College</li>
                <li>MD ({doctor.specialty}) - BSMMU</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b6654] mb-3">Experience</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>{doctor.experience} of Experience</li>
                <li>Worked at {doctor.hospital} for 7 years</li>
              </ul>
            </div>
          </div>

         
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0b6654] mb-3">Availability</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center text-gray-600 text-sm bg-gray-50 inline-flex w-fit px-4 py-2 rounded border border-gray-100">
                <FiCalendar className="mr-2 text-[#0b6654]" /> Monday - Saturday
              </div>
              <div className="flex items-center text-gray-600 text-sm bg-gray-50 inline-flex w-fit px-4 py-2 rounded border border-gray-100">
                <FiClock className="mr-2 text-[#0b6654]" /> {doctor.availability[0]}
              </div>
            </div>
          </div>

          
          <div className="mb-12">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#0b6654]">Patient Reviews</h3>
              <button className="bg-[#0b6654] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#095243]">Write a Review</button>
            </div>
            
            <div className="flex items-center mb-8">
              <span className="text-4xl font-bold text-[#112a36] mr-4">{doctor.rating}</span>
              <div>
                <div className="flex text-yellow-400 text-lg mb-1">
                  <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
                </div>
                <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
              </div>
            </div>

           
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-sm text-[#112a36]">Rasel Ahmed</h4>
                      <div className="flex text-yellow-400 text-xs"><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">2 weeks ago</span>
                </div>
                <p className="text-gray-600 text-sm ml-13">Excellent doctor! Very professional and caring. Highly recommend to everyone.</p>
              </div>
            </div>
          </div>

          
          <div className="bg-[#eef7f6] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between border border-emerald-100">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="bg-white p-3 rounded-lg text-[#0b6654] shadow-sm"><FiCalendar size={24} /></div>
              <div>
                <h4 className="font-bold text-[#112a36]">Have a health issue to discuss?</h4>
                <p className="text-gray-600 text-sm">Book an appointment and get expert advice.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#0b6654] text-white px-8 py-3 rounded font-medium hover:bg-[#095243] shadow-md transition-colors"
            >
              Book an Appointment
            </button>
          </div>

        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
            
           
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[#112a36]">Book Appointment</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <FiX size={24} />
              </button>
            </div>

          
            <div className="overflow-y-auto p-6">
              <form onSubmit={handleBookAppointment} className="space-y-4">
                
                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Patient Name</label>
                  <input type="text" name="patientName" defaultValue={user?.displayName || ""} required className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Gender</label>
                  <select name="gender" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black bg-white appearance-none">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="01712345678" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Appointment Date</label>
                  <input type="date" name="date" required className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Appointment Time</label>
                  <select name="time" className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black bg-white appearance-none">
                    {doctor.availability.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#112a36] mb-1">Note (Optional)</label>
                  <textarea name="note" rows="3" placeholder="Add any note for the doctor..." className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] text-sm text-black resize-none"></textarea>
                </div>

                
                <div className="flex gap-4 pt-4 mt-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-white border border-[#0b6654] text-[#0b6654] py-2.5 rounded font-bold hover:bg-emerald-50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 bg-[#0b6654] text-white py-2.5 rounded font-bold hover:bg-[#095243] transition-colors">
                    Book Appointment
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      )}

    </PrivateRoute>
  );
}