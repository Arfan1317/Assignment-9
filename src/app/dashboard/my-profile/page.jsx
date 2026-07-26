"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";
import { FiX, FiBell } from "react-icons/fi";

export default function MyProfilePage() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
      setIsModalOpen(false);
     
      window.location.reload(); 
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
     
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#112a36]">My Profile</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your profile information.</p>
        </div>
        <button className="text-gray-500 hover:text-[#0b6654] p-2 bg-white rounded-full shadow-sm border border-gray-100">
          <FiBell size={20} />
        </button>
      </div>

     
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center max-w-md mx-auto mt-10">
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
          <img 
            src={user?.photoURL || "https://i.ibb.co/M91sZKj/default-avatar.png"} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-[#112a36] mb-1">{user?.displayName || "User Name"}</h2>
        <p className="text-gray-500 mb-6">{user?.email}</p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0b6654] text-white px-8 py-2.5 rounded font-medium hover:bg-[#095243] transition-colors shadow-sm"
        >
          Update Profile
        </button>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-[#112a36]">Update Profile</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <FiX size={20} />
              </button>
            </div>
            
            <form onSubmit={handleUpdateProfile} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  defaultValue={user?.displayName} 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                <input 
                  type="url" 
                  name="photoURL" 
                  defaultValue={user?.photoURL} 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  className="flex-1 py-2 bg-[#0b6654] text-white rounded font-medium hover:bg-[#095243] transition-colors text-sm disabled:opacity-70"
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}