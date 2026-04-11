import React from 'react';
import { 
  Play, Star, Users, MessageCircle, Clock, CheckCircle2, 
  ChevronRight, GraduationCap, Award, Calendar as CalendarIcon, ChevronLeft 
} from 'lucide-react';

export default async function TutorDetailPage({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) {
  const { tutorId } = await params;

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-zinc-900 pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* MAIN COLUMN - 70% */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Hero Section */}
            <section className="flex flex-col md:flex-row gap-8 items-start">
               {/* Avatar */}
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-zinc-200 overflow-hidden shrink-0 relative shadow-md">
                  <img src={`https://i.pravatar.cc/400?u=${tutorId}`} alt="Tutor avatar" className="object-cover w-full h-full" />
                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
               </div>
               
               <div className="flex-1 w-full">
                 <div className="flex items-center gap-3 mb-2 flex-wrap">
                   <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Jiwoo Kim</h1>
                   <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Super Tutor</span>
                 </div>
                 <p className="text-xl text-zinc-600 mb-8 font-medium leading-relaxed">
                   "Native Korean speaker and certified TOPIK examiner. Let's master conversational Korean effortlessly!"
                 </p>
                 
                 {/* Hero Stat Block */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                   {[
                     { label: 'Lessons', value: '1,240', icon: Play },
                     { label: 'Rating', value: '4.9', icon: Star },
                     { label: 'Students', value: '430', icon: Users },
                     { label: 'Response', value: '100%', icon: MessageCircle }
                   ].map((stat, i) => (
                     <div key={i} className="bg-white p-5 rounded-3xl border border-zinc-200 flex flex-col items-start gap-3 shadow-sm">
                       <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                         <stat.icon className="w-4 h-4 text-orange-600" />
                         <span>{stat.label}</span>
                       </div>
                       <span className="font-bold text-2xl tracking-tight text-zinc-900">{stat.value}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* 2. 소개글 (About Me) */}
            <section className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">About Me</h2>
              <div className="text-zinc-600 leading-relaxed space-y-6 text-lg">
                <p>
                  Hello! I'm Jiwoo, a passionate Korean tutor from Seoul with over 8 years of teaching experience. 
                  My classes are highly interactive, focusing on real-life conversations, cultural nuances, and building your confidence to speak naturally.
                </p>
                <p>
                  Whether you're preparing for a TOPIK exam, planning a trip to Korea, or simply learning for fun, 
                  I tailor my curriculum to meet your specific goals and learning style. My methodology ensures that grammar and vocabulary are acquired organically.
                </p>
              </div>
            </section>

            {/* 3. 비디오 (Video) */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Introduction Video</h2>
              <div className="aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-xl shadow-zinc-900/10">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-600/30">
                     <Play className="w-8 h-8 text-white" />
                   </div>
                 </div>
              </div>
            </section>

            {/* 4. 커리큘럼 (Curriculum Roadmap) */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Curriculum Roadmap</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Beginner', level: 'Level 1-2', modules: '12 Modules', desc: 'Hangul & essential survival phrases.' },
                  { title: 'Intermediate', level: 'Level 3-4', modules: '16 Modules', desc: 'Daily conversational fluency.' },
                  { title: 'Advanced', level: 'Level 5-6', modules: '10 Modules', desc: 'Idioms, news, and deep mastery.' }
                ].map((item, i) => (
                  <div key={i} className="bg-[#FDFCF6] border border-zinc-200 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide">{item.level}</div>
                      <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-bold tracking-tight text-xl mb-2 text-zinc-900">{item.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6 leading-relaxed bg-[#FDFCF6]">{item.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium pt-5 border-t border-zinc-200/60">
                      <Clock className="w-4 h-4 text-zinc-400" /> {item.modules}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. 언어 숙련도 (Linguistic Proficiencies) */}
            <section className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Linguistic Proficiencies</h2>
              <div className="space-y-8 pt-4">
                {[
                  { lang: 'Korean', level: 'Native', pct: '100%' },
                  { lang: 'English', level: 'C2 Proficient', pct: '95%' },
                  { lang: 'Japanese', level: 'B1 Intermediate', pct: '50%' }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-base font-bold text-zinc-800">
                      <span>{item.lang}</span>
                      <span className="text-zinc-500 font-medium">{item.level}</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600 rounded-full" style={{ width: item.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. 리뷰 (Reviews) */}
            <section className="space-y-8 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Student Feedback</h2>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors cursor-pointer text-zinc-600"><ChevronLeft className="w-5 h-5" /></div>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors cursor-pointer text-zinc-600"><ChevronRight className="w-5 h-5" /></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Michael T.', date: 'April 2026', text: "Jiwoo is fantastic! Her teaching method really helped me prepare for my trip. She is patient and very clear in her explanations." },
                  { name: 'Sarah W.', date: 'March 2026', text: "I've been taking lessons for 3 months now and my confidence in speaking has skyrocketed. The curriculum is perfectly tailored." }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-zinc-200 space-y-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
                    </div>
                    <p className="text-zinc-600 leading-relaxed font-serif italic text-lg">"{review.text}"</p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?u=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-zinc-900 tracking-tight">{review.name}</div>
                        <div className="text-sm text-zinc-500">{review.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* SIDEBAR - 30% */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-12 space-y-8">
              
              {/* Booking Card */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 shadow-2xl shadow-orange-500/5 space-y-8">
                
                {/* Header (가격) */}
                <div className="flex justify-between items-end border-b border-zinc-100 pb-8">
                  <div>
                    <h3 className="text-4xl font-bold tracking-tight text-orange-600">$35</h3>
                    <p className="text-zinc-500 font-medium text-sm mt-1">per 50-min lesson</p>
                  </div>
                  <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap">
                    Save 15% on 10-pack
                  </div>
                </div>

                {/* Date Slider */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-zinc-900">Select Date</span>
                    <span className="text-orange-600 flex items-center gap-1.5 cursor-pointer hover:text-orange-700 text-sm bg-orange-50 px-3 py-1 rounded-md transition-colors"><CalendarIcon className="w-4 h-4" /> April 2026</span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                    {[
                      { day: 'Mon', date: '12', active: false },
                      { day: 'Tue', date: '13', active: false },
                      { day: 'Wed', date: '14', active: true },
                      { day: 'Thu', date: '15', active: false },
                      { day: 'Fri', date: '16', active: false }
                    ].map((d, i) => (
                      <div key={i} className={`flex flex-col items-center justify-center min-w-[72px] h-[90px] rounded-2xl border-2 cursor-pointer transition-all ${
                        d.active 
                        ? 'border-orange-600 bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                        : 'border-zinc-100 bg-white hover:border-orange-200 hover:bg-orange-50 text-zinc-600'
                      }`}>
                        <span className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">{d.day}</span>
                        <span className="text-xl font-bold">{d.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                   <span className="text-sm font-bold text-zinc-900 block">Available Times (GMT+9)</span>
                   <div className="grid grid-cols-2 gap-3">
                     {['09:00 AM', '10:30 AM', '02:00 PM', '04:00 PM'].map((time, i) => (
                       <button key={i} className="py-3.5 border-2 border-zinc-100 bg-white rounded-xl text-sm font-bold text-zinc-600 hover:border-orange-600 hover:text-orange-600 transition-colors">
                         {time}
                       </button>
                     ))}
                   </div>
                </div>

                {/* CTAs */}
                <div className="space-y-4 pt-6 border-t border-zinc-100">
                  <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold text-lg tracking-wide transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 active:scale-95 flex justify-center items-center h-14">
                    Book Trial Lesson
                  </button>
                  <button className="w-full py-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-2xl font-bold text-lg tracking-wide transition-all active:scale-95 flex justify-center items-center h-14">
                    Send Message
                  </button>
                </div>
                
              </div>

              {/* Experience Highlights */}
              <div className="bg-[#FDFCF6] p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
                <h3 className="font-bold tracking-tight mb-8 flex items-center gap-2.5 text-zinc-900 text-lg">
                  <Award className="w-6 h-6 text-orange-600" />
                  Credentials & Highlights
                </h3>
                <div className="space-y-6">
                  {[
                    { title: 'PhD in Linguistics', desc: 'Seoul National University, 2018', icon: GraduationCap },
                    { title: 'TOPIK Examiner', desc: 'Certified globally since 2020', icon: CheckCircle2 },
                    { title: '10+ Years Experience', desc: 'Online and offline teaching', icon: Clock }
                  ].map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-0.5 bg-white p-2.5 rounded-xl border border-zinc-100 shadow-sm"><exp.icon className="w-5 h-5 text-orange-600/80" /></div>
                      <div>
                        <div className="font-bold text-zinc-900 text-base tracking-tight mb-1">{exp.title}</div>
                        <div className="text-zinc-500 text-sm font-medium">{exp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
