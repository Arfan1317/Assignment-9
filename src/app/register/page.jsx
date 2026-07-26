"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setPasswordError(""); 
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    try {
      
      await createUser(email, password);
      
      await updateUserProfile(name, photo);
      
      toast.success("Registration Successful!");
      
      router.push("/");
      
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to register. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-gray-100">
       
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#112a36] mb-2">Register</h2>
          <p className="text-gray-500 text-sm">Create your account to get started.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Rubin Uddin"
              className="w-full px-4 py-2.5 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@gmail.com"
              className="w-full px-4 py-2.5 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Photo URL</label>
            <input
              type="url"
              name="photo"
              required
              placeholder="https://i.ibb.co/vaerj2g"
              className="w-full px-4 py-2.5 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            
            {passwordError ? (
              <p className="mt-2 text-sm text-red-600 font-medium">{passwordError}</p>
            ) : (
              <p className="mt-2 text-xs text-[#0b6654]">
                Password must contain at least 1 uppercase, 1 lowercase & be 6+ characters.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0b6654] text-white py-2.5 rounded font-medium hover:bg-[#095243] transition-colors mt-2"
          >
            Register
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="h-px bg-gray-200 w-full"></div>
          <span className="text-gray-400 text-sm whitespace-nowrap">or continue with</span>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="mt-6 w-full flex items-center justify-center space-x-2 border border-gray-300 py-2.5 rounded hover:bg-gray-50 transition-colors"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#0b6654] hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}