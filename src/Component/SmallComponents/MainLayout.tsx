// app/layouts/MainLayout.tsx
"use client";
import { useState } from "react";
import Sidebar from "../Page/Sidebar";
import { Menu } from "lucide-react"; // for hamburger icon

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar (hidden on small screens unless toggled) */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md md:hidden">
                    {/* Hamburger menu to open sidebar */}
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="h-6 w-6" />
                    </button>
                </header>

                <main className="flex-1 overflow-auto p-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
