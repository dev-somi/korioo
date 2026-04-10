import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/> },
    { name: 'Schedule', active: true, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/> },
    { name: 'Students', active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/> },
    { name: 'Earnings', active: false, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/> },
    { name: 'Settings', active: false, icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></> },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-zinc-200/50 flex flex-col p-6 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-[#F25C1E] flex items-center justify-center shadow-sm shadow-orange-500/20">
          <span className="text-white font-bold text-xl leading-none">K</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-zinc-900">Korioo</span>
      </div>

      <nav className="flex-1 space-y-1.5">
        {menuItems.map((item) => (
          <button 
            key={item.name}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-medium transition-all duration-200
              ${item.active 
                ? 'bg-[#F25C1E]/10 text-[#F25C1E]' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}`}
          >
            <svg className={`w-5 h-5 ${item.active ? 'text-[#F25C1E]' : 'text-zinc-400 group-hover:text-zinc-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
            <span className={item.active ? 'font-semibold' : ''}>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-100">
        <div className="group flex items-center gap-3 p-2 -mx-2 rounded-2xl hover:bg-zinc-50 cursor-pointer transition-colors border border-transparent hover:border-zinc-100">
          <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0 border border-zinc-200">
            <img src="https://i.pravatar.cc/150?img=32" alt="Tutor" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-semibold text-zinc-900 truncate">Somi Kim</p>
            <p className="text-xs text-zinc-500 truncate">Korean Tutor</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default function CalendarPage() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  return (
    <div className="flex min-h-screen bg-[#FAF8F1] font-sans text-zinc-900">
      <Sidebar />
      <main className="flex-1 ml-64 p-4 md:p-8 shrink-0">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Schedule</h1>
              <p className="text-zinc-600 text-base md:text-lg">Manage your teaching availability and upcoming sessions.</p>
            </div>
            <div className="flex items-center gap-3">
               <button className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-900 font-medium hover:bg-zinc-50 transition-colors shadow-sm text-sm">
                 Sync Calendar
               </button>
               <button className="px-5 py-2.5 rounded-full bg-[#F25C1E] text-white font-medium hover:bg-[#d9521a] transition-colors shadow-md shadow-orange-500/10 text-sm">
                 Add Availability
               </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Areas ... */}
            <div className="space-y-6 md:space-y-8">
              {/* Mini Calendar / Month Picker */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold tracking-tight">April 2026</h2>
                  <div className="flex space-x-1">
                    <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-3 text-center text-sm mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                    <span key={day} className="text-zinc-400 font-medium text-xs uppercase tracking-wider">{day}</span>
                  ))}
                  
                  {/* Empty days before start of month */}
                  <span className="text-zinc-300 py-1 flex items-center justify-center">30</span>
                  <span className="text-zinc-300 py-1 flex items-center justify-center">31</span>
                  
                  {/* Month days */}
                  {[...Array(30)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full mx-auto flex items-center justify-center text-sm transition-colors hover:bg-zinc-100 
                        ${i + 1 === 14 ? 'bg-[#F25C1E] text-white font-medium hover:bg-[#d9521a]' : 'text-zinc-700'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-semibold tracking-tight">Upcoming</h3>
                  <button className="text-sm font-medium text-[#F25C1E] hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {/* Session Card */}
                  <div className="group border border-zinc-200 rounded-2xl p-4 hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#F25C1E]"></div>
                      <span className="text-xs font-semibold tracking-wide text-zinc-900 uppercase">10:00 AM - 11:00 AM</span>
                    </div>
                    <p className="text-zinc-900 font-medium mb-1">Conversational Korean</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
                        <svg className="w-full h-full text-zinc-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-zinc-500">Sarah Jenkins</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-2 text-xs font-medium rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors">Details</button>
                      <button className="flex-1 py-2 text-xs font-medium rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm">Join Class</button>
                    </div>
                  </div>

                  {/* Session Card */}
                  <div className="group border border-zinc-200 rounded-2xl p-4 hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#F25C1E]"></div>
                      <span className="text-xs font-semibold tracking-wide text-zinc-900 uppercase">02:00 PM - 03:00 PM</span>
                    </div>
                    <p className="text-zinc-900 font-medium mb-1">TOPIK Preparation</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
                        <svg className="w-full h-full text-zinc-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-zinc-500">Michael Chen</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-2 text-xs font-medium rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors">Details</button>
                      <button className="flex-1 py-2 text-xs font-medium rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm">Join Class</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Calendar View */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-zinc-100 flex flex-col h-auto lg:h-[800px]">
              {/* Calendar Controls Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Week of April 12, 2026</h2>
                <div className="flex items-center self-start sm:self-auto bg-zinc-50/80 p-1 rounded-xl border border-zinc-200/60">
                  <button className="px-4 py-1.5 text-sm font-medium rounded-lg bg-white text-zinc-900 shadow-sm">Week</button>
                  <button className="px-4 py-1.5 text-sm font-medium rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors">Month</button>
                </div>
              </div>

              {/* Calendar Grid Container */}
              <div className="flex flex-col flex-1 min-h-0">
                {/* Days Header */}
                <div className="flex border-b border-zinc-100 pb-4 shrink-0">
                  <div className="w-12 md:w-16"></div> {/* Time column spacer */}
                  <div className="flex-1 grid grid-cols-7 gap-2 md:gap-4">
                    {days.map((day, idx) => (
                      <div key={day} className="text-center">
                        <div className="text-[10px] md:text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">{day}</div>
                        <div className={`text-lg md:text-xl mx-auto w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-colors
                          ${idx === 2 ? 'bg-[#F25C1E] text-white font-semibold shadow-md shadow-orange-500/10' : 'text-zinc-900 font-medium hover:bg-zinc-50'}`}>
                          {dates[idx]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Grid Scrollable Area */}
                <div className="flex-1 overflow-y-auto pr-1 md:pr-2 relative min-h-[500px]">
                  <div className="flex">
                    {/* Time Labels */}
                    <div className="w-12 md:w-16 flex flex-col pt-3 shrink-0">
                      {timeSlots.map(time => (
                        <div key={time} className="h-24 md:h-28 text-[10px] md:text-xs font-medium text-zinc-400 relative">
                          <span className="absolute -top-2.5 bg-white pr-2 md:pr-3">{time}</span>
                        </div>
                      ))}
                    </div>

                    {/* Grid Lines & Content */}
                    <div className="flex-1 grid grid-cols-7 gap-2 md:gap-4 relative">
                      {/* Background Lines */}
                      <div className="absolute inset-0 flex flex-col pointer-events-none">
                        {timeSlots.map(time => (
                          <div key={time} className="h-24 md:h-28 border-t border-zinc-100 w-full"></div>
                        ))}
                      </div>

                      {/* Columns */}
                      {[0, 1, 2, 3, 4, 5, 6].map(dayIdx => (
                        <div key={dayIdx} className="relative z-10 flex flex-col border-r border-dashed border-zinc-100/70 last:border-0 group cursor-pointer">
                          {/* Interactive hover background */}
                          <div className="absolute inset-0 bg-zinc-50/0 group-hover:bg-zinc-50/50 transition-colors pointer-events-none rounded-xl"></div>
                          
                          {/* Quick-add '+' icon on hover */}
                          <div className="opacity-0 group-hover:opacity-100 absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-zinc-200 text-zinc-400 shadow-sm transition-opacity pointer-events-none z-20">
                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
                          </div>

                          {/* --- Sample Blocks for Mockup --- */}
                          
                          {/* Tuesday (idx 2) Blocks */}
                          {dayIdx === 2 && (
                            <>
                              {/* Available Slot */}
                              <div className="absolute top-[28px] md:top-[32px] left-0.5 right-0.5 h-[56px] md:h-[64px] bg-[#FAF8F1] border border-[#F25C1E]/20 rounded-xl md:rounded-2xl flex items-center justify-center hover:border-[#F25C1E]/40 transition-colors">
                                 <span className="text-[10px] md:text-xs font-semibold text-[#F25C1E]">Available</span>
                              </div>

                              {/* Booked Session 1 */}
                              <div className="absolute top-[112px] md:top-[128px] left-0.5 right-0.5 h-[112px] md:h-[128px] bg-[#F25C1E] rounded-xl md:rounded-2xl p-2 md:p-3 shadow-md shadow-orange-500/20 text-white hover:bg-[#d9521a] transition-all hover:scale-[1.02] hover:z-30 overflow-hidden flex flex-col justify-between group/card">
                                <div>
                                  <p className="text-[10px] md:text-xs font-bold leading-none mb-1 md:mb-1.5 opacity-90 tracking-wide uppercase">10:00 - 11:00</p>
                                  <p className="text-xs md:text-sm font-semibold leading-tight line-clamp-1 mb-0.5 w-full">Sarah Jenkins</p>
                                  <p className="text-[10px] font-medium opacity-80 leading-tight">Korean</p>
                                </div>
                                {/* Avatar cluster or icon */}
                                <div className="self-end opacity-60 group-hover/card:opacity-100 transition-opacity">
                                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                </div>
                              </div>
                              
                              {/* Available Slot Afternoon */}
                              <div className="absolute top-[336px] md:top-[384px] left-0.5 right-0.5 h-[112px] md:h-[128px] bg-[#FAF8F1] border border-[#F25C1E]/20 rounded-xl md:rounded-2xl flex items-center justify-center hover:border-[#F25C1E]/40 transition-colors">
                                 <span className="text-[10px] md:text-xs font-semibold text-[#F25C1E]">Available</span>
                              </div>

                              {/* Booked Session 2 */}
                              <div className="absolute top-[560px] md:top-[640px] left-0.5 right-0.5 h-[112px] md:h-[128px] bg-zinc-900 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-md text-white hover:bg-zinc-800 transition-all hover:scale-[1.02] hover:z-30 overflow-hidden flex flex-col justify-between group/card">
                                <div>
                                  <p className="text-[10px] md:text-xs font-bold leading-none mb-1 md:mb-1.5 text-zinc-400 tracking-wide uppercase">14:00 - 15:00</p>
                                  <p className="text-xs md:text-sm font-semibold leading-tight line-clamp-1 mb-0.5">Michael Chen</p>
                                  <p className="text-[10px] font-medium text-zinc-400 leading-tight">TOPIK</p>
                                </div>
                                <div className="self-end opacity-60 group-hover/card:opacity-100 transition-opacity">
                                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                </div>
                              </div>
                            </>
                          )}
                          
                          {/* Wednesday (idx 3) Blocks */}
                          {dayIdx === 3 && (
                            <>
                               <div className="absolute top-[224px] md:top-[256px] left-0.5 right-0.5 h-[224px] md:h-[256px] bg-[#FAF8F1] border border-[#F25C1E]/20 rounded-xl md:rounded-2xl flex flex-col items-center justify-center hover:border-[#F25C1E]/40 transition-colors">
                                 <span className="text-[10px] md:text-xs font-semibold text-[#F25C1E] mb-1">Available Box</span>
                                 <span className="text-[9px] text-[#F25C1E]/60">11:00 - 13:00</span>
                              </div>
                            </>
                          )}

                          {/* Friday (idx 5) Blocks */}
                          {dayIdx === 5 && (
                            <>
                              {/* Empty Add Slot Area Simulator */}
                              <div className="absolute top-[224px] md:top-[256px] left-0.5 right-0.5 h-[168px] md:h-[192px] bg-[#FDFCF6] border-2 border-dashed border-zinc-200 rounded-xl md:rounded-2xl flex items-center justify-center hover:border-zinc-300 transition-colors group/empty">
                                 <div className="flex flex-col items-center opacity-0 group-hover/empty:opacity-100 transition-opacity">
                                   <svg className="w-5 h-5 text-zinc-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                                   <span className="text-[10px] font-medium text-zinc-500">Open Slot</span>
                                 </div>
                              </div>
                            </>
                          )}

                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
