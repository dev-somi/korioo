import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-orange-500/5 p-8 sm:p-12 border border-zinc-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
            튜터 지원하기
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-sm mx-auto">
            언어의 장벽을 넘어 전 세계 학생들의 성장을 돕는 여정에 함께하세요.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-zinc-900">
                성
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="홍"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] transition-colors"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-zinc-900">
                이름
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="길동"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] transition-colors"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-900">
              이메일 주소
            </label>
            <input
              id="email"
              type="email"
              placeholder="hello@example.com"
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] transition-colors"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-900">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 focus:border-[#F25C1E] focus:outline-none focus:ring-1 focus:ring-[#F25C1E] transition-colors"
              readOnly
            />
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="w-full rounded-full bg-[#F25C1E] py-4 text-base font-bold text-white shadow-sm hover:bg-[#D9531A] transition-all"
            >
              회원가입
            </button>
          </div>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-zinc-500">또는 다음으로 계속하기</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.224.86-3.63.86-1.52 0-2.466-1.26-3.472-2.73-2.004-2.92-3.446-8.31-1.393-11.89 1.006-1.74 2.766-2.85 4.67-2.85 1.424 0 2.76.92 3.593.92.833 0 2.27-1.03 3.93-1.03 1.63 0 3.18.76 4.14 2 0 0-2.58 1.44-2.58 4.54 0 3.55 3.16 4.79 3.26 4.83-.02.05-.28.94-.94 2.4z" />
            </svg>
            Apple
          </button>
        </div>
        
        <div className="mt-10 text-center text-sm text-zinc-600">
          이미 튜터 계정이 있으신가요?{' '}
          <Link href="/auth/login" className="font-semibold text-[#F25C1E] hover:underline underline-offset-4">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
