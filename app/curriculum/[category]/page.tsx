import React from 'react';

export default async function CurriculumCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // Allow category to be ignored purely for display consistency with the design mock.
  // The layout follows the "Explore Our Curriculums" screen exact design.

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-zinc-900 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:pr-8">
            <div className="inline-block px-4 py-1.5 bg-[#FDECE2] text-[#F25C1E] rounded-full text-[0.65rem] sm:text-xs font-bold tracking-widest mb-8 uppercase shadow-sm">
              Academic Rigor & Warmth
            </div>
            <h1 className="text-6xl md:text-[5rem] font-black tracking-tight leading-[1] mb-8">
              <span className="italic block mb-2 text-zinc-900 font-serif">Explore Our</span>
              <span className="text-[#F25C1E] block">Curriculums</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg mb-8">
              From street slang in Hongdae to high-level academic TOPIK mastery. Our courses are designed like curated magazines for the modern scholar.
            </p>
          </div>

          <div className="lg:col-span-6 relative mt-16 lg:mt-0">
            {/* Image Placeholder */}
            <div className="relative w-[90%] md:w-[80%] mx-auto lg:ml-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-200 transform hover:scale-[1.01] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-400">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Stack of academic books"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-4 md:left-12 lg:bottom-12 lg:-left-6 bg-[#38A3A5] text-white p-6 rounded-[2rem] shadow-2xl shadow-teal-900/20 rotate-[-6deg] hover:rotate-0 transition-all duration-300 w-48 md:w-52 text-center border-[6px] border-[#FAF8F1]">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="font-black text-lg md:text-xl tracking-wide">120+ Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-zinc-200/60">
          <div className="flex flex-wrap gap-2 lg:gap-3 items-center">
            <button className="px-5 py-2 md:px-6 md:py-2.5 bg-[#F25C1E] text-white rounded-full text-sm font-semibold shadow-sm transition-colors">
              All Paths
            </button>
            <button className="px-5 py-2 md:px-6 md:py-2.5 bg-zinc-200/50 text-zinc-600 hover:bg-zinc-200 rounded-full text-sm font-medium transition-colors">
              K-Pop & Media
            </button>
            <button className="px-5 py-2 md:px-6 md:py-2.5 bg-zinc-200/50 text-zinc-600 hover:bg-zinc-200 rounded-full text-sm font-medium transition-colors">
              Business Korean
            </button>
            <button className="px-5 py-2 md:px-6 md:py-2.5 bg-zinc-200/50 text-zinc-600 hover:bg-zinc-200 rounded-full text-sm font-medium transition-colors">
              Travel Mastery
            </button>
            <button className="px-5 py-2 md:px-6 md:py-2.5 bg-zinc-200/50 text-zinc-600 hover:bg-zinc-200 rounded-full text-sm font-medium transition-colors">
              Academic/TOPIK
            </button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-[#FAF8F1] pb-32 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-zinc-100 flex flex-col h-full cursor-pointer hover:-translate-y-1">
              <div className="relative h-56 bg-zinc-200 p-4 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#38A3A5] text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                  K-Pop & Media
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1620027787265-f4325a7eb8ac?auto=format&fit=crop&q=80&w=800" 
                  alt="Neon street style Korea" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[0.65rem] font-bold tracking-widest uppercase">
                  <div className="flex items-center text-[#DC2626]">
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="14" width="3" height="6" />
                      <rect x="10" y="9" width="3" height="11" />
                      <rect x="16" y="4" width="3" height="16" fillOpacity="0.3" />
                    </svg>
                    INTERMEDIATE
                  </div>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="text-zinc-500">12 LESSONS</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight group-hover:text-[#F25C1E] transition-colors">
                  Modern Slang through K-Dramas
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-10 flex-grow text-sm">
                  Speak like a local by analyzing trending scripts from the latest hits. Master nuances that textbooks don't teach.
                </p>
                <div className="flex items-center text-[#F25C1E] font-bold text-sm tracking-wide mt-auto">
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-zinc-100 flex flex-col h-full cursor-pointer hover:-translate-y-1">
              <div className="relative h-56 bg-zinc-200 p-4 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#C2410C] text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                  Business Korean
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern clean office" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[0.65rem] font-bold tracking-widest uppercase">
                  <div className="flex items-center text-[#EA580C]">
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="14" width="3" height="6" />
                      <rect x="10" y="9" width="3" height="11" />
                      <rect x="16" y="4" width="3" height="16" />
                    </svg>
                    ADVANCED
                  </div>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="text-zinc-500">20 LESSONS</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight group-hover:text-[#F25C1E] transition-colors">
                  Corporate Protocol & Negotiations
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-10 flex-grow text-sm">
                  Master the art of 'Honorifics' in a corporate setting. Perfect for professionals entering the Korean market.
                </p>
                <div className="flex items-center text-[#F25C1E] font-bold text-sm tracking-wide mt-auto">
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-zinc-100 flex flex-col h-full cursor-pointer hover:-translate-y-1">
              <div className="relative h-56 bg-zinc-200 p-4 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#0F766E] text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                  Travel Mastery
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800" 
                  alt="Lush green Korean landscape" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[0.65rem] font-bold tracking-widest uppercase">
                  <div className="flex items-center text-[#059669]">
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="14" width="3" height="6" />
                      <rect x="10" y="9" width="3" height="11" fillOpacity="0.3" />
                      <rect x="16" y="4" width="3" height="16" fillOpacity="0.3" />
                    </svg>
                    BEGINNER
                  </div>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="text-zinc-500">8 LESSONS</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight group-hover:text-[#F25C1E] transition-colors">
                  First Landing: Survival Korean
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-10 flex-grow text-sm">
                  Everything you need from Incheon Airport to your first Bibimbap. Practical, fast-track learning for travelers.
                </p>
                <div className="flex items-center text-[#F25C1E] font-bold text-sm tracking-wide mt-auto">
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-zinc-100 flex flex-col h-full cursor-pointer hover:-translate-y-1">
              <div className="relative h-56 bg-zinc-200 p-4 overflow-hidden">
                <div className="absolute top-4 left-4 bg-zinc-700 text-white text-[0.7rem] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                  Academic
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800" 
                  alt="Fountain pen" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-[0.65rem] font-bold tracking-widest uppercase">
                  <div className="flex items-center text-[#6366F1]">
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="14" width="3" height="6" />
                      <rect x="10" y="9" width="3" height="11" />
                      <rect x="16" y="4" width="3" height="16" fillOpacity="0.5" />
                    </svg>
                    MIXED LEVELS
                  </div>
                  <span className="text-zinc-300">&bull;</span>
                  <span className="text-zinc-500">45 LESSONS</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight group-hover:text-[#F25C1E] transition-colors">
                  TOPIK II Mastery: Writing Lab
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-10 flex-grow text-sm">
                  Intensive focus on the writing section of the TOPIK II exam. Structured feedback and academic vocabulary building.
                </p>
                <div className="flex items-center text-[#F25C1E] font-bold text-sm tracking-wide mt-auto">
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAF8F1] pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[#F25C1E] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-orange-600/30">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#4A1600] mb-6 tracking-tight">Not sure where to start?</h2>
            <p className="text-lg md:text-xl text-[#7A2E0A] font-medium max-w-2xl mx-auto mb-12">
              Take our 5-minute smart placement test to find the perfect curriculum tailored to your current proficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#4A1600] text-white rounded-full font-bold text-lg hover:bg-black transition-colors shadow-xl">
                Start Level Test
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-[#FE8B5C] text-[#4A1600] rounded-full font-bold text-lg hover:bg-[#FF9B72] transition-colors shadow-lg border border-[#FE8B5C]">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
