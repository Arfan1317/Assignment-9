"use client";

import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";

export default function DashboardPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto text-center mt-10">
      
      <h1 className="text-3xl font-bold text-[#112a36] mb-6">Patient Dashboard</h1>
      
      {user?.photoURL && (
        <div className="flex justify-center mb-4">
          <Image 
            src={user.photoURL} 
            alt="Profile" 
            width={100} 
            height={100} 
            className="rounded-full object-cover border-4 border-emerald-50"
          />
        </div>
      )}
      
      <h2 className="text-xl font-bold text-[#0b6654] mb-2">
        Welcome back, {user?.displayName || "User"}!
      </h2>
      <p className="text-gray-600 mb-8">
        This entire dashboard section is completely protected. 
      </p>

      <div className="bg-[#eef7f6] p-4 rounded text-sm text-gray-700 font-medium">
        Your registered email: {user?.email}
      </div>

    </div>
  );
}