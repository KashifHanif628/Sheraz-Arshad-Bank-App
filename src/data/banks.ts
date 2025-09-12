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
      accountTitle: "Amir Arshad",
      accountNumber: "6-01-25-20311-714-155259",
      iban: "PK26-MPBL-0125-0271-4015-5259",
      branchName: "Zamzama Branch, Karachi",
      branchCode: "0125",
    },
    {
      id: 2,
      name: "Meezan Bank Limited",
      accountTitle: "Amir Arshad",
      accountNumber: "0112352890",
      iban: "PK90-MEZN-0099-6401-1235-2890",
      branchName: "DO Talwar Clifton Branch, Karachi",
      branchCode: "9964",
    },
    {
      id: 3,
      name: "Meezan Bank Limited (Online A/c)",
      accountTitle: "Amir Arshad / Sheraz Arshad",
      accountNumber: "0112080455",
      iban: "PK34-MEZN-0099-6401-1208-0455",
      branchName: "DO Talwar Clifton Branch, Karachi",
      branchCode: "9964",
    },
    {
      id: 4,
      name: "Bank Alfalah (Clifton Branch)",
      accountTitle: "Amir Arshad / Wajiha Amir",
      accountNumber: "0031-1008045991",
      iban: "PK14-ALFH-0031-0010-0804-5991",
      branchName: "Clifton Branch, Karachi",
      branchCode: "0031",
    },
    {
      id: 5,
      name: "Bank Alfalah (Phase-VIII)",
      accountTitle: "Amir Arshad / Wajiha Amir",
      accountNumber: "5968-5002126199",
      iban: "PK09-ALFH-5968-0050-0212-6199",
      branchName: "IBG Zulfiqar Avenue DHA Phase VIII Branch, Karachi",
      branchCode: "5968",
    },
    {
      id: 6,
      name: "Soneri Bank Ltd",
      accountTitle: "Amir Arshad",
      accountNumber: "0038-20001782283",
      iban: "PK59-SONE-0003-8200-0178-2283",
      branchName: "Zamzama Branch, Karachi",
      branchCode: "0038",
    },
    {
      id: 7,
      name: "Faysal Bank",
      accountTitle: "Amir Arshad",
      accountNumber: "3189-301000002488",
      iban: "PK80-FAYS-3189-3010-0000-2488",
      branchName: "IBB Clifton Branch, Karachi",
      branchCode: "3189",
    },
    {
      id: 8,
      name: "Bank Al Habib Limited",
      accountTitle: "Amir Arshad",
      accountNumber: "1241-203606812801",
      iban: "PK97-BAHL-1241-2036-0681-2801  ",
      branchName: "Do Talwar Branch, Karachi",
      branchCode: "1241",
    },
    {
      id: 9,
      name: "Habib Bank Limited",
      accountTitle: "Amir / wajiha",
      accountNumber: "11557948462403",
      iban: "PK94-HABB-0011-5579-4846-2403",
      branchName: "Badar Commercial Branch, Karachi",
      branchCode: "1155",
    },
    {
      id: 10,
      name: "United Bank Ltd",
      accountTitle: "Amir Arshad",
      accountNumber: "330074115",
      iban: "PK55-UNIL-0109-0003-3007-4115",
      branchName: "Ameen Schon Circle Branch, Karachi",
      branchCode: "1593",
    },
  ];
  