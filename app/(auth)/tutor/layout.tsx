import Sidebar from "@/components/ui/sidebar";

export default function TutorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#FAF8F1]">
            <Sidebar />
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}