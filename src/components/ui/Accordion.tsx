"use client";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  children: ReactNode;
  isOpen?: boolean; // controlled
  onToggle?: () => void;
  className?: string;
}

export default function Accordion({ title, children, isOpen, onToggle, className = "" }: Props) {
  const controlled = typeof isOpen === "boolean" && typeof onToggle === "function";

  return (
    <div className={`border rounded-xl overflow-hidden shadow-md ${className}`}>
      <button
        onClick={() => (controlled ? onToggle!() : onToggle && onToggle())}
        aria-expanded={Boolean(isOpen)}
        className="w-full flex justify-between items-center px-5 py-4
                   bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                   text-white text-lg font-semibold hover:scale-102 transform transition-all duration-200 focus:outline-none"
      >
        <div className="flex-1 text-left">{title}</div>
        <div className="ml-4 text-2xl select-none">{isOpen ? "−" : "+"}</div>
      </button>

      {isOpen && <div className="bg-white p-5 text-gray-800">{children}</div>}
    </div>
  );
}
