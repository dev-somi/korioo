import React from "react";

/**
 * [강사 대시보드 메인 페이지]
 * 교습 현황, 수익, 학생 목록 등을 한눈에 볼 수 있는 요약 화면입니다.
 */
export default function DashboardPage() {
    return (
        <div className="p-8 font-sans text-zinc-900">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Dashboard</h1>
                    <p className="text-zinc-600 text-lg">안녕하세요, Somi 강사님! 오늘 예정된 수업은 2건입니다.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* 통계 카드 예시 */}
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                        <p className="text-sm font-medium text-zinc-500 mb-1">이번 달 수익</p>
                        <h3 className="text-2xl font-bold text-zinc-900">₩ 1,240,000</h3>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                        <p className="text-sm font-medium text-zinc-500 mb-1">전체 수업 횟수</p>
                        <h3 className="text-2xl font-bold text-zinc-900">48회</h3>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                        <p className="text-sm font-medium text-zinc-500 mb-1">학생 수</p>
                        <h3 className="text-2xl font-bold text-zinc-900">12명</h3>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
                    <h2 className="text-xl font-semibold mb-6">최근 활동</h2>
                    <div className="space-y-4">
                        <p className="text-zinc-500 text-center py-12">표시할 활동 내역이 없습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
