"use client";

import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      
      await signIn(email, password);
     
      toast.success("Login Successful!");
      
      router.push("/");
      
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password. Please try again.");
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

  const handleForgotPassword = () => {
    toast("Forgot Password functionality is not required for this assignment!", {
      icon: "ℹ️",
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-gray-100">
        
       
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#112a36] mb-2">Login</h2>
          <p className="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@gmail.com"
              className="w-full px-4 py-3 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#112a36] mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b6654] focus:border-transparent transition-all pr-32"
              />
              <button
                type="button"
                onClick={handleForgotPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-[#0b6654] hover:text-[#095243] focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0b6654] text-white py-3 rounded font-medium hover:bg-[#095243] transition-colors mt-2"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="h-px bg-gray-200 w-full"></div>
          <span className="text-gray-400 text-sm whitespace-nowrap">or continue with</span>
          <div className="h-px bg-gray-200 w-full"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="mt-6 w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

       
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="font-bold text-[#0b6654] hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}