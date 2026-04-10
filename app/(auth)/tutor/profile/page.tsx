import React from 'react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-sm border border-gray-100 rounded-3xl p-8">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl font-bold">
            T
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tutor Profile</h1>
            <p className="text-gray-500">Manage your personal information and preferences.</p>
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-700">Account Settings</h3>
            <p className="text-sm text-gray-500 mt-1">Update your email and password.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-700">Payment Methods</h3>
            <p className="text-sm text-gray-500 mt-1">Manage how you get paid.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
