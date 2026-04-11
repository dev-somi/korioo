import React from 'react';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Video, 
  Calendar,
  MessageCircle,
  FileText
} from 'lucide-react';

const students = [
  {
    id: 1,
    name: 'Elena',
    level: 'Beginner',
    course: 'Korean Basics I',
    progress: 35,
    nextSession: 'Tomorrow, 10:00 AM',
    avatar: 'E'
  },
  {
    id: 2,
    name: 'Marcus',
    level: 'Intermediate',
    course: 'Conversational Fluency',
    progress: 68,
    nextSession: 'Thursday, 2:00 PM',
    avatar: 'M'
  },
  {
    id: 3,
    name: 'Sarah',
    level: 'Advanced',
    course: 'TOPIK II Preparation',
    progress: 82,
    nextSession: 'Friday, 9:00 AM',
    avatar: 'S'
  }
];

export default function StudentsPage() {
  return (
    <div className="w-full flex-1 flex flex-col min-h-screen">
      <div className="w-full flex-1 flex flex-col p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Student Roster</h1>
            <p className="text-zinc-600 mt-2 text-lg">Manage your enrolled students and track their progress.</p>
          </div>
          <button className="bg-[#F25C1E] text-white px-6 py-3.5 rounded-full font-medium shadow-xl shadow-[#F25C1E]/20 hover:bg-[#E04D12] transition-colors flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Enroll Student
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side: Student List */}
          <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#F25C1E]/20 focus:border-[#F25C1E] transition-all text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              {students.map((student, idx) => (
                <button 
                  key={student.id} 
                  className={`w-full text-left p-4 rounded-3xl flex items-center gap-4 transition-all
                  ${idx === 0 
                    ? 'bg-white border-2 border-[#F25C1E] shadow-sm' 
                    : 'bg-transparent border-2 border-transparent hover:bg-zinc-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center font-bold text-lg
                    ${idx === 0 
                      ? 'bg-[#F25C1E]/10 text-[#F25C1E]' 
                      : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {student.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-zinc-900 text-[15px] truncate">{student.name}</h3>
                    <p className="text-sm text-zinc-500 truncate">{student.course}</p>
                  </div>
                  {idx === 0 && <ChevronRight className="w-5 h-5 text-[#F25C1E] flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Student Detail Card */}
          <div className="w-full flex-1">
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-10 flex flex-col gap-10 shadow-sm relative overflow-hidden">
              {/* Top decoration - subtle orange glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
              
              {/* Header Info */}
              <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#F25C1E]/10 text-[#F25C1E] rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                    E
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Elena</h2>
                    <div className="flex flex-wrap items-center gap-3 mt-3 text-zinc-600 font-medium">
                      <span className="flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-sm"><BookOpen className="w-4 h-4" /> Beginner</span>
                      <span className="flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-sm"><Clock className="w-4 h-4" /> 2 hrs/week</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors bg-white shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 transition-colors bg-white shadow-sm">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                <div className="bg-zinc-50/80 rounded-2xl p-5 border border-zinc-100">
                  <p className="text-sm font-medium text-zinc-500 mb-1">Total Sessions</p>
                  <p className="text-2xl font-bold text-zinc-900">12</p>
                </div>
                <div className="bg-zinc-50/80 rounded-2xl p-5 border border-zinc-100">
                  <p className="text-sm font-medium text-zinc-500 mb-1">Attendance</p>
                  <p className="text-2xl font-bold text-zinc-900">100%</p>
                </div>
                <div className="bg-zinc-50/80 rounded-2xl p-5 border border-zinc-100">
                  <p className="text-sm font-medium text-zinc-500 mb-1">Homework</p>
                  <p className="text-2xl font-bold text-zinc-900">8/10</p>
                </div>
                <div className="bg-zinc-50/80 rounded-2xl p-5 border border-zinc-100">
                  <p className="text-sm font-medium text-zinc-500 mb-1">Next Goal</p>
                  <p className="text-lg font-bold text-zinc-900 truncate mt-1">TOPIK I</p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Continuing Course */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl text-zinc-900">Current Course</h3>
                  </div>
                  <div className="border border-zinc-200 rounded-3xl p-6 flex flex-col gap-5 h-full bg-white shadow-sm">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-50 text-[#F25C1E] mb-3">Module 3</span>
                      <h4 className="font-bold text-zinc-900 text-lg">Everyday Conversations</h4>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <div className="flex justify-between text-sm text-zinc-600 mb-3">
                        <span className="font-medium">Progress</span>
                        <span className="font-bold text-zinc-900">35%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-2.5">
                        <div className="bg-[#F25C1E] h-2.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>

                    <button className="w-full py-3 mt-2 bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-2xl font-semibold hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2">
                       <FileText className="w-4 h-4" />
                       View Syllabus
                    </button>
                  </div>
                </div>

                {/* Upcoming Session */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl text-zinc-900">Upcoming Session</h3>
                  </div>
                  <div className="border border-[#F25C1E]/20 bg-[#Fdfcf6] rounded-3xl p-6 flex flex-col gap-5 h-full shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white text-[#F25C1E] shadow-sm border border-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 text-lg">Tomorrow, 10:00 AM</p>
                        <p className="text-sm font-medium text-zinc-600 mt-0.5">60 minutes • Video Call</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 border border-orange-100/50 rounded-2xl mt-auto">
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        <span className="font-bold text-zinc-900">Topic:</span> Ordering food and asking for recommendations.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <button className="py-3 bg-[#F25C1E] text-white rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#E04D12] transition-colors shadow-sm">
                        <Video className="w-5 h-5" /> Join call
                      </button>
                      <button className="py-3 bg-white border border-zinc-200 text-zinc-700 rounded-2xl font-semibold text-sm hover:bg-zinc-50 transition-colors">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
