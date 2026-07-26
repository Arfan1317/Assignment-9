"use client";

import PrivateRoute from "@/components/shared/PrivateRoute";

export default function DashboardLayout({ children }) {
  return (
    <PrivateRoute>
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex">
       
        <div className="flex-1 p-8">
          {children}
        </div>

      </div>
    </PrivateRoute>
  );
}