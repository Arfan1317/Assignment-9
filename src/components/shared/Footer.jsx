"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b6654] text-white pt-14 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
         
          <div className="space-y-5">
            <Image 
              src="/FooterLogo.png" 
              alt="DocAppoint Logo" 
              width={180} 
              height={45} 
              className="object-contain"
            />
            <p className="text-sm text-gray-200 leading-relaxed">
              Your health is our priority.<br />
              We are here to help you.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
                <FaXTwitter size={16} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link href="/" className="hover:text-white hover:underline transition">Home</Link></li>
              <li><Link href="/appointments" className="hover:text-white hover:underline transition">All Appointments</Link></li>
              <li><Link href="/doctors" className="hover:text-white hover:underline transition">Doctors</Link></li>
              <li><Link href="/dashboard" className="hover:text-white hover:underline transition">Dashboard</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link href="#" className="hover:text-white hover:underline transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-5">Newsletter</h3>
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Subscribe to get health tips<br />and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 border border-white rounded text-sm font-medium hover:bg-white hover:text-[#0b6654] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} DocAppoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}