"use client";
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center px-6 py-4 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             text-white text-lg font-semibold rounded-lg 
             shadow-lg hover:scale-105 transform transition-all duration-300">
            <span className="typewriter">{title}</span>
            <span className="text-xl">{isOpen ? "−" : "+"}</span>
        </button>

      {isOpen && <div className="bg-white p-5 text-gray-800">{children}</div>}
    </div>
  );
}
