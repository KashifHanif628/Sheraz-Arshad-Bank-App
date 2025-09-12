import Accordion from  "../ui/Accordion";
import Card from "../ui/card";
import { Bank } from "../../data/banks";

interface Props {
  bank: Bank;
}

export default function BankItem({ bank }: Props) {
  return (
    <Accordion title={bank.name}>
      <Card>
        <div className="space-y-2 text-gray-700">
          <p><strong>A/c Title:</strong> {bank.accountTitle}</p>
          <p><strong>A/c Number:</strong> {bank.accountNumber}</p>
          <p><strong>IBAN:</strong> {bank.iban}</p>
          <p><strong>Branch Name:</strong> {bank.branchName}</p>
          <p><strong>Branch Code:</strong> {bank.branchCode}</p>
        </div>
      </Card>
    </Accordion>
  );
}
