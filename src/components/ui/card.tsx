import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-lg border bg-white p-5 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
