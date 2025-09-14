import React from "react";

interface Props {
  message: string | null;
}

export default function Toast({ message }: Props) {
  if (!message) return null;
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-black/85 text-white px-4 py-2 rounded-md shadow-lg animate-fadeIn">
        {message}
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
