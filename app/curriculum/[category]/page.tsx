import React from 'react';

export default async function CurriculumCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  
  // Format the category name for display
  const displayName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-6">
            Curriculum Path
          </div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">
            {displayName} Mastery
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            A comprehensive roadmap designed to take you from fundamentals to professional fluency in {category}.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 font-bold mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {i}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Module {i}: Advanced Concepts</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Deep dive into the core principles and complex structures of {category} that define expertise.
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                Explore Module 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
