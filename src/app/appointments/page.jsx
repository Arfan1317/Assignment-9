"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMapPin, FiCalendar, FiStar } from "react-icons/fi";
import { doctors } from "@/lib/doctorsData";

export default function AllAppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(searchLower) ||
      doctor.specialty.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        
       
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#112a36] mb-2">All Appointments</h1>
          <p className="text-gray-500 text-sm">Find and manage your all doctor appointments.</p>
        </div>

       
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 gap-4">
          <div className="relative w-full sm:w-[60%]">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent text-sm text-black placeholder-gray-500 transition-all"
            />
          </div>
          
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start">
            <span className="text-sm text-gray-500 mr-3">Sort By:</span>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#0b6654]">
              <option>Default</option>
              <option>Highest Rated</option>
              <option>Lowest Fee</option>
            </select>
          </div>
        </div>

       
        <div className="space-y-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow"
              >
                
              
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden w-24 h-24 flex items-center justify-center mb-2">
                    <Image 
                      src={doctor.image} 
                      alt={doctor.name} 
                      width={90} 
                      height={90} 
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="flex items-center text-sm">
                    <FiStar className="text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-gray-700">{doctor.rating}</span>
                    <span className="text-gray-400 ml-1">({doctor.reviews})</span>
                  </div>
                </div>

               
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h3 className="text-lg font-bold text-[#112a36]">{doctor.name}</h3>
                  <p className="text-[#0b6654] text-sm font-medium">{doctor.specialty}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start text-sm text-gray-500 mt-2">
                    <FiMapPin className="text-[#0b6654] mr-2" />
                    {doctor.hospital}, {doctor.location}
                  </div>
                  
                  <div className="flex items-center justify-center sm:justify-start text-sm text-gray-500">
                    <FiCalendar className="text-[#0b6654] mr-2" />
                    Available: {doctor.availability[0]}
                  </div>
                </div>

               
                <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto h-full sm:mt-6">
                  <Link 
                    href={`/doctors/${doctor.id}`}
                    className="w-full sm:w-auto bg-[#0b6654] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#095243] transition-colors text-center shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
                
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">No doctors found matching "{searchTerm}".</p>
            </div>
          )}
        </div>

        
        {filteredDoctors.length > 0 && (
          <div className="flex justify-center mt-10 space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0b6654] text-white font-medium text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium text-sm">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-500">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium text-sm text-lg">&gt;</button>
          </div>
        )}

      </div>
    </div>
  );
}