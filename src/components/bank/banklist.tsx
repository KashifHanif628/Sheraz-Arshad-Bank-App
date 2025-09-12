import { banks } from "../../data/banks";
import BankItem from "../bank/bankitem";

export default function BankList() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {banks.map((bank) => (
        <BankItem key={bank.id} bank={bank} />
      ))}
    </div>
  );
}
