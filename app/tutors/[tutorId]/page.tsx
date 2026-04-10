import React from 'react';

export default async function TutorDetailPage({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) {
  const { tutorId } = await params;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 bg-orange-50 rounded-3xl overflow-hidden border border-orange-100 shadow-xl shadow-orange-500/10">
                <div className="w-full h-full flex items-center justify-center text-orange-200 text-5xl font-serif italic">
                  Avatar
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Top Rated Tutor
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Tutor ID: {tutorId}</h1>
                <p className="text-xl text-gray-500 font-medium italic mb-6">"Passionate educator specializing in linguistic mastery"</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Online Now
                  </div>
                  <div className="text-gray-400">|</div>
                  <div className="text-gray-700">5.0 ★ (120 reviews)</div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
              <div className="prose prose-orange max-w-none text-gray-600 leading-relaxed">
                <p>
                  Welcome to my profile! I am a dedicated tutor with over 10 years of experience in helping students reach their full potential. My teaching methodology focuses on practical application and intuitive understanding.
                </p>
                <p>
                  Whether you are preparing for exams or looking to improve your conversation skills, I customize each session to meet your unique learning style and goals.
                </p>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white border border-gray-100 rounded-[2rem] p-8 shadow-2xl shadow-gray-200/50 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">Trial lesson</span>
                <span className="text-2xl font-bold text-gray-900">$25.00</span>
              </div>
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-600/20">
                Book Trial Lesson
              </button>
              <button className="w-full py-4 border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-2xl transition-all">
                Send Message
              </button>
              <p className="text-xs text-center text-gray-400">Usually responds within 2 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
