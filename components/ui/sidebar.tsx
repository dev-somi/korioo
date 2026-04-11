"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** 
 * [아이콘 도구함]
 * 화면에 보여줄 예쁜 아이콘들을 가져옵니다. 
 * 이름만 봐도 대충 어떤 모양일지 알 수 있어요 (예: CalendarDays -> 달력 모양)
 */
import {
    LayoutDashboard,
    CalendarDays,
    Users,
    Banknote,
    UserCircle,
    Settings,
    MessageSquare
} from "lucide-react";

/**
 * [메인 메뉴 목록]
 * 사이드바 위쪽에 들어갈 주요 메뉴들을 정의합니다.
 * 이름, 이동할 주소, 아이콘을 한 세트로 묶어두었습니다.
 */
const mainMenus = [
    { name: "Dashboard", href: "/tutor/dashboard", icon: LayoutDashboard },
    { name: "Calendar", href: "/tutor/calendar", icon: CalendarDays },
    { name: "Chat", href: "/tutor/chat", icon: MessageSquare },
    { name: "Students", href: "/tutor/students", icon: Users },
    { name: "Earnings", href: "/tutor/earnings", icon: Banknote },
];

/**
 * [하단 메뉴 목록]
 * 사이드바 아래쪽(프로필, 설정 등)에 들어갈 메뉴들입니다.
 */
const bottomMenus = [
    { name: "Profile", href: "/tutor/profile", icon: UserCircle },
    { name: "Settings", href: "/tutor/settings", icon: Settings },
];

/**
 * [사이드바 메인 기능]
 * 화면 왼쪽의 고정된 메뉴 바를 만드는 핵심 부분입니다.
 */
export default function Sidebar() {
    // 현재 사용자가 어떤 페이지를 보고 있는지 확인하는 '내비게이션' 역할을 합니다.
    const pathname = usePathname();

    /**
     * [개별 메뉴 버튼 만들기]
     * 위에서 정의한 메뉴 목록을 하나씩 예쁜 버튼으로 변환해주는 '틀'입니다.
     */
    const NavItem = ({ item }: { item: any }) => {
        // 현재 보고 있는 페이지와 메뉴가 같으면 '활성화(색깔 변경)' 상태로 만듭니다.
        const isActive = pathname?.startsWith(item.href);

        return (
            <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${isActive
                    ? "bg-[#F25C1E] text-white font-semibold shadow-lg shadow-orange-500/10" // 선택되었을 때: 브랜드 주황색 배경
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900" // 선택되지 않았을 때: 회색 글자, 마우스 올리면 밝은 회색
                    }`}
            >
                {/* 아이콘: 선택 여부에 따라 색상이 바뀝니다. */}
                <item.icon size={20} className={isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-900"} />
                {/* 메뉴 이름 */}
                <span className="text-sm font-medium">{item.name}</span>
            </Link>
        );
    };

    /**
     * [실제 화면에 그려지는 구조]
     */
    return (
        <aside className="w-64 shrink-0 bg-white border-r border-zinc-200 flex flex-col p-6 min-h-screen sticky top-0">
            {/* 로고 영역: 클릭하면 대시보드 페이지로 이동합니다. */}
            <div className="mb-8 px-4">
                <Link href="/tutor/dashboard">
                    <h2 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-[#F25C1E] transition-colors">
                        Korioo <span className="font-light italic text-zinc-500">Tutor</span>
                    </h2>
                </Link>
            </div>

            {/* 1. 중앙 메인 메뉴 구역 */}
            <nav className="flex-1 space-y-1.5">
                {mainMenus.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </nav>

            {/* 2. 하단 설정 메뉴 구역 (구분선으로 나뉘어 있음) */}
            <div className="pt-6 border-t border-zinc-100 space-y-1.5">
                {bottomMenus.map((item) => (
                    <NavItem key={item.href} item={item} />
                ))}
            </div>
        </aside>
    );
}
