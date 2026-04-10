import React from 'react';

export default function ChatPage() {
  return (
    <div className="h-screen flex bg-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-50 bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border-b border-gray-50 hover:bg-orange-50/30 cursor-pointer transition-colors">
              <div className="font-semibold text-gray-800">Student {i}</div>
              <div className="text-sm text-gray-500 truncate">Looking forward to our next lesson!</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/30">
        <div className="p-4 border-b border-gray-100 bg-white shadow-sm flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-full mr-3" />
          <h3 className="font-bold text-gray-900">Conversation</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-400 italic">
          Select a chat to start messaging...
        </div>
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-3 border border-gray-200">
            <span className="text-gray-400">Type a message...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
