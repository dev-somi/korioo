import Image from "next/image";
import Link from "next/link";
import { Calendar, DollarSign, Users, Star } from "lucide-react";

export default function TutorLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            한국어 강사로 <br /> 수익을 만들어보세요
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg">
            전 세계 학생들과 연결되어 나만의 스케줄로 수업하세요.
          </p>
          <div>
            <Link 
              href="/tutor/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#F25C1E] hover:bg-orange-700 transition-colors rounded-full shadow-lg shadow-orange-500/20"
            >
              강사 시작하기
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Tutor working on laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Metric Card 1 */}
            <div className="p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F25C1E] mb-4 tracking-tight">2,400+</div>
              <div className="text-zinc-600 font-medium">등록 강사</div>
            </div>
            
            {/* Metric Card 2 */}
            <div className="p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F25C1E] mb-4 tracking-tight">월 평균 120만원</div>
              <div className="text-zinc-600 font-medium">강사 수입</div>
            </div>
            
            {/* Metric Card 3 */}
            <div className="p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F25C1E] mb-4 tracking-tight">98%</div>
              <div className="text-zinc-600 font-medium">학생 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-orange-500/5">
            <div className="w-14 h-14 bg-orange-50 text-[#F25C1E] rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">자유로운 스케줄</h3>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Set your own schedule, teach anytime
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-orange-500/5">
            <div className="w-14 h-14 bg-orange-50 text-[#F25C1E] rounded-2xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">간편한 정산</h3>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Automatic monthly payout
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-orange-500/5">
            <div className="w-14 h-14 bg-orange-50 text-[#F25C1E] rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">검증된 학생 매칭</h3>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Matched with serious learners
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">강사들의 이야기</h2>
          
          <div className="grid md:grid-cols-3 gap-8 w-full">
            {/* Review 1 */}
            <div className="p-8 md:p-10 rounded-3xl border border-zinc-100 flex flex-col h-full bg-[#FDFCF6]">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                  alt="김민지" 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-bold text-zinc-900">김민지</div>
                  <div className="text-sm text-zinc-500">한국, 서울</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#F25C1E]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm">
                유연한 스케줄로 본업과 병행하며 안정적인 수입을 만들고 있어요. 학생들도 열정적이라 가르치는 보람이 있습니다.
              </p>
            </div>

            {/* Review 2 */}
            <div className="p-8 md:p-10 rounded-3xl border border-zinc-100 flex flex-col h-full bg-[#FDFCF6]">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" 
                  alt="박준호" 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-bold text-zinc-900">박준호</div>
                  <div className="text-sm text-zinc-500">한국, 부산</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#F25C1E]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm">
                플랫폼이 사용하기 쉽고 정산도 투명해요. 전 세계 학생들과 소통하며 문화 교류까지 할 수 있어서 매일이 즐겁습니다.
              </p>
            </div>

            {/* Review 3 */}
            <div className="p-8 md:p-10 rounded-3xl border border-zinc-100 flex flex-col h-full bg-[#FDFCF6]">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" 
                  alt="이수현" 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-bold text-zinc-900">이수현</div>
                  <div className="text-sm text-zinc-500">한국, 서울</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#F25C1E]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm">
                처음에는 걱정했는데, 매칭 시스템이 훌륭해서 제 수업 스타일에 맞는 학생들을 만날 수 있었어요. 추천합니다!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAF8F1] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            지금 바로 시작해보세요
          </h2>
          <div>
            <Link 
              href="/tutor/register"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#F25C1E] hover:bg-orange-700 transition-colors rounded-full shadow-xl shadow-orange-500/20"
            >
              강사 등록하기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
