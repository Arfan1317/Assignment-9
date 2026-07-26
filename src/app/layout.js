import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocAppoint | Doctor Appointment Manager",
  description: "Book your doctor appointments easily and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        
        <Navbar />
        
        
        <main className="flex-grow">
          {children}
        </main>

        
        <Footer />
      </body>
    </html>
  );
}