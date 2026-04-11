"use client";

import React from "react";
import Link from "next/link";
import { 
  Search, 
  Bell, 
  Moon, 
  Plus,
  ArrowRight,
  Download,
  Filter,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Medal,
  Wallet
} from "lucide-react";

const lessonsData = [
  { id: 1, date: "Oct 24, 2023", student: "Emma Watson", totalHours: "24H TOTAL WITH THIS STUDENT", duration: "1h 30m", amount: "$45.00", status: "PROCESSED" },
  { id: 2, date: "Oct 23, 2023", student: "Liam Smith", totalHours: "12H TOTAL WITH THIS STUDENT", duration: "1h 00m", amount: "$30.00", status: "PENDING NOTE" },
  { id: 3, date: "Oct 21, 2023", student: "Olivia Davis", totalHours: "30H TOTAL WITH THIS STUDENT", duration: "2h 00m", amount: "$60.00", status: "PROCESSED" },
  { id: 4, date: "Oct 20, 2023", student: "Noah Miller", totalHours: "8H TOTAL WITH THIS STUDENT", duration: "45m", amount: "$22.50", status: "PROCESSED" },
  { id: 5, date: "Oct 18, 2023", student: "Ava Wilson", totalHours: "18H TOTAL WITH THIS STUDENT", duration: "1h 00m", amount: "$30.00", status: "PENDING NOTE" },
];

export default function EarningsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 pb-16">
      {/* 1. 상단 섹션 (Header & Alerts) */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Earnings</h1>
            <div className="h-6 w-px bg-zinc-200"></div>
            {/* 'Payout method' 연한 녹색 배지 */}
            <div className="bg-green-100/80 text-green-800 text-xs px-3 py-1.5 rounded-full font-medium">
                Payout method: Bank Transfer (...4920)
            </div>
        </div>
        
        {/* 우측 도구: 검색창, 알림, 다크모드, Quick Add */}
        <div className="flex items-center gap-4">
            <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                    type="text" 
                    placeholder="Search earnings..." 
                    className="pl-10 pr-4 py-2.5 bg-white rounded-full text-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#F25C1E] focus:border-transparent w-64 shadow-sm transition-all"
                />
            </div>
            <button className="p-2.5 text-zinc-400 hover:text-zinc-900 hover:bg-white rounded-full transition-colors shadow-sm bg-transparent border border-transparent hover:border-zinc-200">
                <Bell size={20} />
            </button>
            <button className="p-2.5 text-zinc-400 hover:text-zinc-900 hover:bg-white rounded-full transition-colors shadow-sm bg-transparent border border-transparent hover:border-zinc-200">
                <Moon size={20} />
            </button>
            <button className="flex items-center gap-2 bg-[#F25C1E] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d94d13] transition-colors shadow-lg shadow-orange-500/20">
                <Plus size={16} />
                Quick Add
            </button>
        </div>
      </header>

      {/* '12 lessons ready for billing' 연한 파란색 알림 배너 */}
      <div className="bg-[#eff6ff] border border-blue-100 rounded-3xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2.5 rounded-full">
                  <CheckCircle2 size={20} className="text-blue-600" />
              </div>
              <p className="text-blue-900 text-sm font-semibold tracking-wide">12 lessons ready for billing</p>
          </div>
          <Link href="#" className="text-blue-600 text-sm font-bold flex items-center gap-1.5 hover:text-blue-800 transition-colors">
              REVIEW NOW <ArrowRight size={16} />
          </Link>
      </div>

      {/* 2. 메인 통계 카드 (Stats) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: TOTAL LIFETIME EARNINGS */}
          <div className="bg-[#1A2B3C] rounded-[32px] p-10 text-white relative overflow-hidden shadow-xl shadow-zinc-200/50">
              {/* 은은한 화폐 패턴 아이콘 삽입 */}
              <div className="absolute right-0 top-0 opacity-[0.03] w-[400px] h-[400px] -translate-y-20 translate-x-12 pointer-events-none">
                  <Wallet className="w-full h-full" />
              </div>
              <div className="relative z-10">
                  <p className="text-zinc-400 text-xs font-bold tracking-widest mb-3">TOTAL LIFETIME EARNINGS</p>
                  <h2 className="text-6xl font-bold tracking-tighter mb-10">$64,920<span className="text-zinc-500 text-4xl font-semibold">.00</span></h2>
                  
                  {/* Current Balance 박스 */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 inline-flex flex-col gap-1.5">
                      <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Current Balance</p>
                      <p className="text-3xl font-bold text-white">$4,280<span className="text-zinc-500 text-xl font-semibold">.50</span></p>
                  </div>
              </div>
          </div>

          {/* Right Card: TOTAL HOURS TAUGHT */}
          <div className="bg-white rounded-[32px] p-10 border border-zinc-100 relative shadow-xl shadow-zinc-200/50 flex flex-col justify-center">
              {/* 상단 훈장 아이콘 */}
              <div className="bg-orange-50/50 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                  <Medal size={28} className="text-[#F25C1E]" />
              </div>
              <p className="text-zinc-500 text-xs font-bold tracking-widest mb-3">TOTAL HOURS TAUGHT</p>
              <h2 className="text-6xl font-bold text-zinc-900 tracking-tighter mb-6">1,200<span className="text-zinc-400 text-4xl font-light">h</span></h2>
              
              {/* Top 5% Educator Status 캡션 */}
              <div className="flex items-center gap-2 mt-auto bg-zinc-50 inline-flex w-max px-4 py-2.5 rounded-full">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#F25C1E]"></div>
                 <p className="text-sm text-zinc-600 font-medium tracking-wide">Top <span className="font-bold text-zinc-900">5%</span> Educator Status</p>
              </div>
          </div>
      </div>

      {/* 3. 수업 로그 테이블 (Lesson Logs) */}
      <div className="bg-white rounded-[32px] border border-zinc-100 shadow-xl shadow-zinc-200/50 overflow-hidden flex flex-col">
          {/* Header - Filter & Export */}
          <div className="p-8 border-b border-zinc-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Recent Lesson Logs</h3>
              <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 rounded-full transition-colors border border-zinc-200 shadow-sm">
                      <Filter size={16} /> Filters
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 rounded-full transition-colors border border-zinc-200 shadow-sm">
                      <Download size={16} /> Export
                  </button>
              </div>
          </div>
          
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-[#FAF8F1]/50 border-b border-zinc-100 text-zinc-500 font-semibold tracking-wide text-xs uppercase">
                      <tr>
                          <th className="px-8 py-5">Date</th>
                          <th className="px-8 py-5">Student Name</th>
                          <th className="px-8 py-5">Duration</th>
                          <th className="px-8 py-5 text-right">Amount</th>
                          <th className="px-8 py-5">Status</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                      {lessonsData.map(lesson => (
                          <tr key={lesson.id} className="hover:bg-zinc-50/50 transition-colors group">
                              <td className="px-8 py-5 text-zinc-500 font-medium">{lesson.date}</td>
                              <td className="px-8 py-5">
                                  <p className="font-bold text-zinc-900 text-base">{lesson.student}</p>
                                  {/* 누적 수업 시간 표시 */}
                                  <p className="text-[11px] font-bold tracking-wider text-zinc-400 mt-1">{lesson.totalHours}</p>
                              </td>
                              <td className="px-8 py-5">
                                  <div className="flex items-center gap-2 text-zinc-600 font-medium">
                                      <Clock size={16} className="text-zinc-400" />
                                      {lesson.duration}
                                  </div>
                              </td>
                              <td className="px-8 py-5 text-right font-bold text-zinc-900 text-base">
                                  {lesson.amount}
                              </td>
                              <td className="px-8 py-5">
                                  {/* Status 배지 */}
                                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider ${
                                      lesson.status === "PROCESSED" 
                                      ? "bg-green-50 text-green-700 border border-green-200/50" 
                                      : "bg-orange-50 text-[#F25C1E] border border-orange-200/50"
                                  }`}>
                                      {lesson.status}
                                  </span>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/30">
              <p className="text-sm text-zinc-500 font-medium">Showing <span className="font-bold text-zinc-900">1</span> to <span className="font-bold text-zinc-900">5</span> of <span className="font-bold text-zinc-900">42</span> results</p>
              <div className="flex items-center gap-1.5">
                  <button className="p-2 rounded-xl border border-zinc-200 text-zinc-400 bg-white hover:text-zinc-800 hover:border-zinc-300 transition-colors disabled:opacity-50 shadow-sm" disabled>
                      <ChevronLeft size={18} />
                  </button>
                  <div className="flex items-center gap-1 px-2">
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#1A2B3C] text-white font-bold text-sm shadow-md">1</button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white border border-transparent hover:border-zinc-200 text-zinc-600 font-bold text-sm transition-all">2</button>
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white border border-transparent hover:border-zinc-200 text-zinc-600 font-bold text-sm transition-all">3</button>
                      <span className="text-zinc-400 px-1 font-bold">...</span>
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white border border-transparent hover:border-zinc-200 text-zinc-600 font-bold text-sm transition-all">9</button>
                  </div>
                  <button className="p-2 rounded-xl border border-zinc-200 text-zinc-400 bg-white hover:text-zinc-800 hover:border-zinc-300 transition-colors shadow-sm">
                      <ChevronRight size={18} />
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}
