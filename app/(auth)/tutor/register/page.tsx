'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const steps = [
  { id: 1, title: '기본 정보', subtitle: '프로필 사진과 기본 인적사항' },
  { id: 2, title: '전문성 뒷받침', subtitle: '학력 및 경력 정보' },
  { id: 3, title: '티칭 전문 분야', subtitle: '수업 대상 및 특화 영역' },
  { id: 4, title: '소개 및 비디오', subtitle: '학생들에게 보여질 첫인상' }
];

export default function ExtendedRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const specialtyTags = [
    '비즈니스 회화', '토익/TOEFL 대비', 'TOPIK (한국어능력시험)',
    '어린이/키즈', '초보자 맞춤', '일상 회화', '발음 교정', '면접 준비'
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F1] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-orange-500/5 p-8 sm:p-12 border border-zinc-200">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">
            튜터 프로필 작성
          </h2>
          <p className="text-zinc-500 text-sm">
            전 세계의 학생들과 곧 만나게 됩니다. 꼼꼼히 작성해주세요!
          </p>
        </div>

        {/* Progress Bar & Step Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold inline-block py-1.5 px-3 uppercase rounded-full text-[#F25C1E] bg-orange-50 border border-orange-100">
                Step {currentStep} / {steps.length}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-zinc-900">
                {steps[currentStep - 1].title}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            {steps.map(step => (
              <div 
                key={step.id} 
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  step.id <= currentStep ? 'bg-[#F25C1E]' : 'bg-zinc-100'
                }`}
              />
            ))}
          </div>
        </div>

        <form className="min-h-[400px] flex flex-col" onSubmit={(e) => e.preventDefault()}>
          
          {/* STEP 1: Personal Info */}
          {currentStep === 1 && (
            <div className="flex-1 space-y-8">
              <div className="text-center sm:text-left mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">기본 정보</h3>
                <p className="text-sm text-zinc-500">학생들에게 보여질 이름과 사진, 그리고 모국어를 설정합니다.</p>
              </div>

              {/* Profile Photo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <div className="h-28 w-28 shrink-0 rounded-full bg-white border border-dashed border-zinc-300 flex flex-col items-center justify-center text-zinc-400 hover:border-[#F25C1E] hover:text-[#F25C1E] transition-colors cursor-pointer group shadow-sm">
                  <svg className="h-8 w-8 mb-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[11px] font-medium tracking-wide">사진 등록</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-zinc-900 mb-1">프로필 사진 업로드</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    얼굴이 선명하게 나온 밝은 사진을 권장합니다. (최대 5MB, JPG/PNG)
                  </p>
                  <button type="button" className="text-sm font-medium text-[#F25C1E] hover:text-[#D9531A] py-1">
                    PC 파일 브라우저 열기
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-900">
                    법적 성 <span className="text-zinc-400 font-normal ml-1">(Legal Last Name)</span>
                  </label>
                  <input id="lastName" type="text" placeholder="예: Hong" className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-900">
                    법적 이름 <span className="text-zinc-400 font-normal ml-1">(Legal First Name)</span>
                  </label>
                  <input id="firstName" type="text" placeholder="예: Gildong" className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] bg-white transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-900">
                  모국어 (Native Language)
                </label>
                <div className="relative">
                  <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 bg-white focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] appearance-none transition-all">
                    <option value="">모국어를 선택해주세요</option>
                    <option value="ko">한국어 (Korean)</option>
                    <option value="en">영어 (English)</option>
                    <option value="ja">일본어 (Japanese)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Professional Background */}
          {currentStep === 2 && (
            <div className="flex-1 space-y-8">
               <div className="text-center sm:text-left mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">전문성 배경</h3>
                <p className="text-sm text-zinc-500">학생들은 튜터의 배경과 자격을 보고 신뢰를 얻습니다.</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-900">최종 학력 (Highest Education)</label>
                <div className="relative">
                  <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 bg-white focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] appearance-none">
                    <option value="">학위 수준을 선택해주세요</option>
                    <option value="highschool">고등학교 졸업</option>
                    <option value="bachelor">학사 학위 (Bachelor's)</option>
                    <option value="master">석사 학위 (Master's)</option>
                    <option value="phd">박사 학위 (Ph.D.)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-900">
                  교육 경력 (Teaching Years)
                </label>
                <div className="relative">
                  <input type="number" placeholder="예: 3" min="0" max="50" className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E]" />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 text-sm">년</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  관련 자격증 (Certificates)
                </label>
                <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 text-center hover:border-[#F25C1E] transition-colors cursor-pointer bg-zinc-50 hover:bg-white group">
                  <div className="mx-auto h-12 w-12 text-zinc-300 group-hover:text-[#F25C1E] mb-3 transition-colors flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-zinc-900 mb-1">자격증 사본 스캔본 업로드</p>
                  <p className="text-xs text-zinc-500">클릭하거나 파일을 드래그하여 놓아주세요 (PDF, JPG)</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Teaching Specialties */}
          {currentStep === 3 && (
            <div className="flex-1 space-y-8">
               <div className="text-center sm:text-left mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">티칭 전문 분야</h3>
                <p className="text-sm text-zinc-500">어떤 언어를, 어떤 목적의 학생들에게 가르치고 싶은지 알려주세요.</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-900">
                  내가 가르칠 언어 (Subject)
                </label>
                <div className="relative">
                  <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 bg-white focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] appearance-none cursor-pointer">
                    <option value="">과목을 선택해주세요</option>
                    <option value="ko">한국어 (Korean)</option>
                    <option value="en">영어 (English)</option>
                    <option value="ja">일본어 (Japanese)</option>
                    <option value="zh">중국어 (Chinese)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <label className="block text-sm font-medium text-zinc-900">
                  나만의 특화 분야 (Specialties) <span className="text-zinc-400 text-xs font-normal ml-1">다중 선택 가능</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {specialtyTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        selectedTags.includes(tag)
                          ? 'border-[#F25C1E] bg-orange-50 text-[#F25C1E]'
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Video & Bio */}
          {currentStep === 4 && (
            <div className="flex-1 space-y-8">
               <div className="text-center sm:text-left mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">소개 및 비디오</h3>
                <p className="text-sm text-zinc-500">학생들의 시선을 사로잡을 환영 영상과 인삿말을 등록하세요.</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-900">
                  자기소개 (Introduction)
                </label>
                <textarea 
                  rows={4} 
                  placeholder="자신의 교육 철학, 재미있는 사실이나 수업 진행 방식을 적어보세요."
                  className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] transition-all resize-none leading-relaxed" 
                />
              </div>

              <div className="space-y-4 pt-2">
                <label className="block text-sm font-medium text-zinc-900">
                  소개 동영상 파일 업로드 (Introduction Video)
                </label>
                
                <div className="relative border-2 border-dashed border-zinc-300 rounded-3xl p-10 text-center hover:border-[#F25C1E] transition-colors cursor-pointer bg-zinc-50 hover:bg-white group">
                  <div className="mx-auto h-14 w-14 text-zinc-400 group-hover:text-[#F25C1E] mb-4 transition-colors flex items-center justify-center bg-white rounded-full shadow-sm border border-zinc-100">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 10l4.5 3-4.5 3v-6zm-6 8c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6zm0-10.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z" />
                    </svg>
                  </div>
                  <h4 className="text-[15px] font-semibold text-zinc-900 mb-1">여기를 클릭하여 동영상을 업로드하세요</h4>
                  <p className="text-sm text-zinc-500 max-w-sm mx-auto">1~2분 길이의 가로 형태 비디오를 권장합니다. MP4/MOV, 최대 50MB</p>
                </div>

                {/* Example of file selected state could go here */}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="pt-8 mt-auto sticky bottom-0 bg-white/80 backdrop-blur-md pb-[-1rem] flex gap-3 z-10 border-t border-zinc-100 sm:border-transparent mt-8">
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={handlePrev} 
                className="px-6 sm:px-8 py-4 rounded-full bg-zinc-100 text-zinc-700 font-bold hover:bg-zinc-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 outline-none"
              >
                이전으로
              </button>
            )}
            
            <button 
              type="button" 
              onClick={handleNext} 
              className="flex-1 px-8 py-4 rounded-full bg-[#F25C1E] text-white font-bold hover:bg-[#D9531A] shadow-md shadow-orange-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#F25C1E] outline-none"
            >
              {currentStep < steps.length ? '다음 단계 (Next)' : '최종 지원하기 (Submit)'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
