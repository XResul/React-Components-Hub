"use client";
import { useState } from "react";
import { Menu, Plus, MessageCircle } from "lucide-react";

export default function HomePage() {
  const [chats, setChats] = useState([
    { id: "1", title: "Sohbet 1" },
    { id: "2", title: "Sohbet 2" },
  ]);
  const [activeChat, setActiveChat] = useState<string | null>("1");
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Selam!" },
    { id: 2, sender: "bot", text: "Merhaba " },
  ]);
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Mobilde Sidebar açma butonu */}
      {isMobile && !isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute top-4 left-4 z-50 bg-[#095f79] p-2 rounded"
        >
          <Menu className="text-white" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-[#095f79] text-white flex flex-col transition-transform duration-500 z-50
          ${
            isMobile
              ? isSidebarOpen
                ? "translate-x-0 w-64"
                : "-translate-x-full w-64"
              : "translate-x-0 w-64"
          }`}
      >
        {/* Üst Başlık */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold truncate">ChatBot AI</h1>
          {isMobile && (
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer"
            >
              <Menu />
            </button>
          )}
        </div>

        {/* Yeni Sohbet Butonu */}
        <button className="flex items-center gap-2 p-2 m-2 bg-green-500 rounded hover:bg-green-600 transition-colors">
          <Plus /> Yeni Sohbet
        </button>

        {/* Sohbet Listesi */}
        <nav className="flex flex-col mt-2 px-2 flex-1 overflow-y-auto">
          {chats.map((chat, idx) => (
            <div
              key={`${chat.id}-${idx}`}
              className="flex flex-row items-center justify-between mb-2"
            >
              <button
                onClick={() => setActiveChat(chat.id)}
                className={`flex items-center gap-2 p-2 flex-1 rounded text-left hover:bg-blue-600 transition-colors ${
                  activeChat === chat.id ? "bg-blue-700" : ""
                }`}
              >
                <MessageCircle size={18} />
                <span className="truncate">{chat.title}</span>
              </button>

              <button className="ml-2 text-red-400 text-sm hover:text-red-300 transition-colors">
                Sil
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* Sohbet Alanı */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? "ml-0" : "ml-64"
        }`}
      >
        {/* Mesaj Alanı */}
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto flex flex-col gap-2 mt-15">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded max-w-xs self-start ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Alanı */}
        <div className="p-4 bg-white border-t flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 border rounded p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
