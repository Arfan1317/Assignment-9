"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiBell, FiX } from "react-icons/fi";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([
    {
      _id: "b1",
      doctorName: "Dr. Ayesha Rahman",
      specialty: "Cardiologist",
      image: "/Dr.AyeshaRahman.png",
      date: "2026-05-12",
      time: "09:00 AM",
      patientName: "Rahim Uddin",
      phone: "01712345678",
      status: "Confirmed"
    },
    {
      _id: "b2",
      doctorName: "Dr. Rafiq Ahmed",
      specialty: "Dermatologist",
      image: "/Dr.RafiqAhmed.png",
      date: "2026-05-30",
      time: "02:00 PM",
      patientName: "Rahim Uddin",
      phone: "01712345678",
      status: "Pending"
    }
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this appointment?");
    if (isConfirmed) {
      setBookings(bookings.filter((b) => b._id !== id));
      toast.success("Appointment deleted successfully!");
    }
  };

  const handleOpenUpdate = (booking) => {
    setSelectedBooking(booking);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const updatedData = {
      ...selectedBooking,
      date: form.date.value,
      time: form.time.value,
      phone: form.phone.value,
      patientName: form.patientName.value
    };

    setBookings(bookings.map((b) => (b._id === selectedBooking._id ? updatedData : b)));
    setIsUpdateModalOpen(false);
    toast.success("Appointment updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#112a36]">My Bookings</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your all appointments.</p>
        </div>
        <button className="text-gray-500 hover:text-[#0b6654] p-2 bg-white rounded-full shadow-sm border border-gray-100">
          <FiBell size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-center py-10 bg-white rounded-xl border border-gray-100">You have no booked appointments.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
              
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                  <img src={booking.image} alt={booking.doctorName} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-bold text-[#112a36] text-sm md:text-base">{booking.doctorName}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{booking.specialty}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 text-sm">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Date</p>
                  <p className="font-medium text-gray-800">{booking.date}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Time</p>
                  <p className="font-medium text-gray-800">{booking.time}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Patient</p>
                  <p className="font-medium text-gray-800">{booking.patientName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Phone</p>
                  <p className="font-medium text-gray-800">{booking.phone}</p>
                </div>
              </div>

              <div className="flex flex-col md:items-end justify-center w-full md:w-1/4 gap-3">
                <span className={`px-3 py-1 rounded text-xs font-bold inline-block text-center w-24 ${
                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {booking.status}
                </span>
                
                <div className="flex gap-2 w-full md:justify-end">
                  <button 
                    onClick={() => handleOpenUpdate(booking)}
                    className="px-4 py-1.5 border border-[#0b6654] text-[#0b6654] rounded text-sm font-medium hover:bg-emerald-50 transition-colors flex-1 md:flex-none text-center"
                  >
                    Update
                  </button>
                  <button 
                    onClick={() => handleDelete(booking._id)}
                    className="px-4 py-1.5 border border-red-500 text-red-500 rounded text-sm font-medium hover:bg-red-50 transition-colors flex-1 md:flex-none text-center"
                  >
                    Delete
                  </button>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {isUpdateModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-[#112a36]">Update Appointment</h2>
              <button onClick={() => setIsUpdateModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <FiX size={20} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-5">
              <form onSubmit={handleUpdateSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
                  <input type="text" disabled defaultValue={selectedBooking.doctorName} className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded text-sm text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                  <input type="text" name="patientName" required defaultValue={selectedBooking.patientName} className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="text" name="phone" required defaultValue={selectedBooking.phone} className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Date</label>
                  <input type="date" name="date" required defaultValue={selectedBooking.date} className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Time</label>
                  <input type="time" name="time" required defaultValue={selectedBooking.time?.replace(" AM", "")?.replace(" PM", "")} className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-black focus:ring-2 focus:ring-[#0b6654] focus:outline-none" />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setIsUpdateModalOpen(false)} className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors text-sm">Cancel</button>
                  <button type="submit" className="flex-1 py-2 bg-[#0b6654] text-white rounded font-medium hover:bg-[#095243] transition-colors text-sm">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}