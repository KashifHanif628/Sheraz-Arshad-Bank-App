"use client"

import { useState } from "react";
import BankList from "../components/bank/banklist";
import Toast from "../components/ui/toast";

export default function Home() {
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 1600);
  }

  return (
    <main
      className="min-h-screen bg-fixed-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Toast message={toast} />

      <div className="w-full max-w-4xl mx-4 md:mx-0 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">

        <header className="text-center mb-6">
          <h1 className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-extrabold">
            <span className="text-3xl md:text-4xl" aria-hidden style={{ color: "#F59E0B" }}>🏦</span>
            <span className="rainbow-blink">SHERAZ ARSHAD BANK ACCOUNTS</span>
          </h1>
          <p className="text-sm md:text-base text-white mt-2">
            Trusted accounts — tap a bank name to view details and copy.
          </p>
        </header>

        <section className="mb-4">
          <BankList showToast={showToast} />
        </section>

        <footer className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sheraz Arshad — All rights reserved.
        </footer>
      </div>
    </main>
  );
}
