import React from 'react';

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600">Manage your teaching availability and upcoming sessions.</p>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">April 2026</h2>
            <div className="space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Prev</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">Next</button>
            </div>
          </div>
          <div className="h-[600px] flex items-center justify-center text-gray-400 italic">
            Calendar view will be implemented here...
          </div>
        </div>
      </div>
    </div>
  );
}
