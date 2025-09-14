"use client";
import { useState } from "react";
import BankItem from "../bank/bankitem";
import { banks } from "../../data/banks";

interface Props {
  showToast: (msg: string) => void;
}

export default function BankList({ showToast }: Props) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {banks.map((b, idx) => (
        <BankItem
          key={b.id}
          bank={b}
          index={idx}
          isOpen={openId === b.id}
          onToggle={() => setOpenId(openId === b.id ? null : b.id)}
          showToast={showToast}
        />
      ))}
    </div>
  );
}
