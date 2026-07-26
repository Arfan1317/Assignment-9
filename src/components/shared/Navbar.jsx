"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiBell, FiChevronDown, FiLogOut, FiUser, FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const { user, logOut } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Appointments", path: "/appointments" },
    { name: "Doctors", path: "/doctors" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
      router.push("/login"); 
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between">
        
      
        <Link href="/" className="flex items-center">
          <Image 
            src="/NavbarLogo.png" 
            alt="DocAppoint Logo" 
            width={180} 
            height={40} 
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium text-sm transition-all duration-300 relative py-2 ${
                  isActive ? "text-[#0b6654]" : "text-gray-600 hover:text-[#0b6654]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0b6654] rounded-t-md"></span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {!user ? (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="font-medium text-gray-700 hover:text-[#0b6654] transition-colors">
                Login
              </Link>
              <Link href="/register" className="bg-[#0b6654] text-white px-5 py-2.5 rounded font-medium hover:bg-[#095243] transition-colors">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <button className="text-gray-500 hover:text-[#0b6654] transition-colors">
                <FiBell size={22} />
              </button>

              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/M91sZKj/default-avatar.png"} 
                    alt="User Profile" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <FiChevronDown className="text-gray-500" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100">
                    <Link 
                      href="/dashboard" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0b6654]"
                    >
                      <FiUser className="mr-3" /> Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <FiLogOut className="mr-3" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

       
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-[#0b6654] hover:text-[#095243] focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="flex flex-col px-4 pt-4 pb-6 space-y-4">
            
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium text-base py-2 block ${
                    isActive ? "text-[#0b6654]" : "text-gray-600 hover:text-[#0b6654]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <hr className="border-gray-100" />

            {!user ? (
              <div className="flex flex-col space-y-3 pt-2">
                <Link 
                  href="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-center text-gray-700 hover:text-[#0b6654] py-2.5 border border-gray-200 rounded"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#0b6654] text-center text-white px-5 py-2.5 rounded font-medium hover:bg-[#095243]"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 pt-2">
                <div className="flex items-center space-x-3 mb-2">
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/M91sZKj/default-avatar.png"} 
                    alt="User Profile" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <span className="font-medium text-[#112a36]">{user?.displayName || "User"}</span>
                </div>
                <Link 
                  href="/dashboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-gray-700 hover:text-[#0b6654]"
                >
                  <FiUser className="mr-3" /> Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-left text-red-600 hover:text-red-700"
                >
                  <FiLogOut className="mr-3" /> Logout
                </button>
              </div>
            )}
            
          </div>
        </div>
      )}
    </nav>
  );
}