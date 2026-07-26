"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import PrivateRoute from "@/components/shared/PrivateRoute";
import { FiCalendar, FiUser, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-[calc(100vh-80px)] bg-[#f8f9fa] flex flex-col md:flex-row">
        
      
        <aside className="w-full md:w-64 bg-[#112a36] text-white flex flex-col md:min-h-[calc(100vh-80px)]">
          <div className="p-6 hidden md:block">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="bg-white text-[#112a36] p-1 rounded-full w-8 h-8 flex items-center justify-center">♥</span> 
              DocAppoint
            </h2>
          </div>
          
          <nav className="flex md:flex-col flex-row w-full overflow-x-auto md:overflow-hidden flex-1 p-4 md:p-0 gap-2 md:gap-0">
            <Link 
              href="/dashboard/my-bookings" 
              className={`flex items-center gap-3 px-6 py-4 transition-colors whitespace-nowrap ${pathname === '/dashboard/my-bookings' ? 'bg-[#0b6654] border-l-4 border-white' : 'hover:bg-[#1a3d4f] border-l-4 border-transparent'}`}
            >
              <FiCalendar size={20} /> My Bookings
            </Link>
            
            <Link 
              href="/dashboard/my-profile" 
              className={`flex items-center gap-3 px-6 py-4 transition-colors whitespace-nowrap ${pathname === '/dashboard/my-profile' ? 'bg-[#0b6654] border-l-4 border-white' : 'hover:bg-[#1a3d4f] border-l-4 border-transparent'}`}
            >
              <FiUser size={20} /> My Profile
            </Link>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-6 py-4 hover:bg-[#1a3d4f] border-l-4 border-transparent text-left w-full mt-auto mb-4 md:mb-0 text-red-300 hover:text-red-200 transition-colors"
            >
              <FiLogOut size={20} /> Logout
            </button>
          </nav>
        </aside>

        
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </div>

      </div>
    </PrivateRoute>
  );
}