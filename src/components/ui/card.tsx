import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg shadow-xl border bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}
