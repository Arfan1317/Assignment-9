import Link from "next/link";
import { FiInfo } from "react-icons/fi";

export default function DoctorsIndexPage() {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center max-w-md text-center shadow-sm">
        
        <div className="w-16 h-16 bg-emerald-50 text-[#0b6654] rounded-full flex items-center justify-center mb-4">
          <FiInfo size={32} />
        </div>
        
        <h1 className="text-2xl font-bold text-[#112a36] mb-2">
          Nothing to show right now
        </h1>
        
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          You need to select a specific doctor to view this page. Please browse our list of specialized doctors to view their details and book an appointment.
        </p>
        
        <Link 
          href="/appointments" 
          className="bg-[#0b6654] text-white px-6 py-2.5 rounded font-medium hover:bg-[#095243] transition-colors shadow-sm"
        >
          View All Doctors
        </Link>
        
      </div>
    </div>
  );
}