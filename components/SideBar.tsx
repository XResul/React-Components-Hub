"use client";
import Link from "next/link";
import { Home, MessageCircle, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Yaver Paneli
      </h1>

      <nav className="flex flex-col gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 p-2 rounded-md transition-all"
        >
          <Home size={20} /> Ana Sayfa
        </Link>

        <Link
          href="/messages"
          className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 p-2 rounded-md transition-all"
        >
          <MessageCircle size={20} /> Mesajlar
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 p-2 rounded-md transition-all"
        >
          <Settings size={20} /> Ayarlar
        </Link>
      </nav>
    </aside>
  );
}
