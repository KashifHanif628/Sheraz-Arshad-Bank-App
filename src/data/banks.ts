export interface Bank {
    id: number;
    name: string;
    accountTitle: string;
    accountNumber: string;
    iban: string;
    branchName: string;
    branchCode: string;
  }
  
  export const banks: Bank[] = [
    {
      id: 1,
      name: "Habib Metropoliton Bank",
      accountTitle: "Sheraz Arshad",
      accountNumber: "6-01-25-20301-714-155341",
      iban: "PK86-MPBL-0125-0671-4015-5341",
      branchName: "Zamzama Branch, Karachi",
      branchCode: "0125",
    },
    {
      id: 2,
      name: "Meezan Bank Limited",
      accountTitle: "Sheraz Arshad",
      accountNumber: "9964-0112353664",
      iban: "PK47-MEZN-0099-6401-1235-3664",
      branchName: "DO Talwar Clifton Branch, Karachi",
      branchCode: "9964",
    },
    {
      id: 3,
      name: "Meezan Bank Limited (Online A/c)",
      accountTitle: "Amir Arshad / Sheraz Arshad",
      accountNumber: "9964-0112080455",
      iban: "PK34-MEZN-0099-6401-1208-0455",
      branchName: "DO Talwar Clifton Branch, Karachi",
      branchCode: "9964",
    },
    {
      id: 4,
      name: "Bank Alfalah (Clifton Branch)",
      accountTitle: "Sheraz Arshad / Faiza Sheraz",
      accountNumber: "0031-1006761521",
      iban: "PK03-ALFH-0031-0010-0676-1521",
      branchName: "Clifton Branch, Karachi",
        branchCode: "0031",
    },
    {
      id: 5,
      name: "Soneri Bank Ltd",
      accountTitle: "Sheraz Arshad",
      accountNumber: "0038-20001652037",
      iban: "PK63-SONE-0003-8200-0165-2037",
      branchName: "Zamzama Branch, Karachi",
      branchCode: "0038",
    },
    {
      id: 6,
      name: "Faysal Bank",
      accountTitle: "Sheraz Arshad",
      accountNumber: "3189-301000002487",
      iban: "PK10-FAYS-3189-3010-0000-2487",
      branchName: "IBB Clifton Branch, Karachi",
      branchCode: "3189",
    },
    {
      id: 7,
      name: "Bank Al Habib Limited",
      accountTitle: "Sheraz Arshad",
      accountNumber: "1241-2036-0681-3401",
      iban: "PK96-BAHL-1241-2036-0681-3401  ",
      branchName: "Do Talwar Branch, Karachi",
      branchCode: "1241",
    },
    {
      id: 8,
      name: "Habib Bank Limited-HBL Tower",
      accountTitle: "Sheraz Arshad / Faiza Sheraz",
      accountNumber: "25257001527103",
      iban: "PK16-HABB-0025-2570-0152-7103",
      branchName: "HBL Tower Branch, Karachi",
      branchCode: "2525",
    },
    {
      id: 9,
      name: "Habib Bank Limited-Badar Commercial",
      accountTitle: "Sheraz Arshad / Faiza Sheraz",
      accountNumber: "11557948465803",
      iban: "PK56-HABB-0011-5579-4846-5803",
      branchName: "Badar Commercial Branch, Karachi",
      branchCode: "1155",
    },
  ];
  
  
