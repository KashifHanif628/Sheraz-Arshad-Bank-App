"use client";
import { useState } from "react";
import Accordion from "../ui/Accordion";
import Card from "../ui/card";
import { Bank } from "../../data/banks";

interface Props {
  bank: Bank;
  isOpen: boolean;
  onToggle: () => void;
  showToast: (msg: string) => void;
  index: number;
}

export default function BankItem({ bank, isOpen, onToggle, showToast, index }: Props) {
  const [busy, setBusy] = useState(false);

  async function copyText(text: string, label = "Copied") {
    try {
      setBusy(true);
      await navigator.clipboard.writeText(text);
      showToast(`${label} ✓`);
    } catch {
      showToast("Copy failed");
    } finally {
      setBusy(false);
    }
  }

  const titleNode = (
    <div className="flex items-center gap-3">
      <span className="text-2xl" aria-hidden style={{ color: "#F59E0B" }}>🏦</span>
      <span
        className="typewriter text-base md:text-lg font-semibold"
        style={{ animationDelay: `${index * 200}ms`, display: "inline-block", maxWidth: "100%" }}
      >
        {bank.name}
      </span>
    </div>
  );

  return (
    <div>
      <Accordion title={titleNode} isOpen={isOpen} onToggle={onToggle} className="mb-4">
        <Card>
          <div className="space-y-3">
            {/* Account Title */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600"><strong>A/c Title</strong></p>
                <p className="text-gray-800 break-words">{bank.accountTitle}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" onClick={() => copyText(bank.accountTitle, "Title copied")}>
                {busy ? "..." : "Copy"}
              </button>
            </div>

            {/* Account Number */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600"><strong>A/c Number</strong></p>
                <p className="text-gray-800 break-words">{bank.accountNumber}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" onClick={() => copyText(bank.accountNumber, "Number copied")}>
                Copy
              </button>
            </div>

            {/* IBAN */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600"><strong>IBAN</strong></p>
                <p className="text-gray-800 break-words">{bank.iban}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" onClick={() => copyText(bank.iban, "IBAN copied")}>
                Copy
              </button>
            </div>

            {/* Branch */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600"><strong>Branch</strong></p>
                <p className="text-gray-800 break-words">{bank.branchName}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" onClick={() => copyText(bank.branchName, "Branch copied")}>
                Copy
              </button>
            </div>

            {/* Branch Code */}
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600"><strong>Branch Code</strong></p>
                <p className="text-gray-800 break-words">{bank.branchCode}</p>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" onClick={() => copyText(bank.branchCode, "Branch Code copied")}>
                Copy
              </button>
            </div>

            {/* Copy All */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() =>
                  copyText(
                    `A/c Title: ${bank.accountTitle}\nA/c Number: ${bank.accountNumber}\nIBAN: ${bank.iban}\nBranch: ${bank.branchName}\nBranch Code: ${bank.branchCode}`,
                    "All copied"
                  )
                }
                className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium"
              >
                Copy All
              </button>

              <div className="text-sm text-gray-500">
                {isOpen ? <span>Open</span> : <span>Closed</span>}
              </div>
            </div>
          </div>
        </Card>
      </Accordion>
    </div>
  );
}
