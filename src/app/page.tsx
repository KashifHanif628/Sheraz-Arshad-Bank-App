import BankList from "../components/bank/banklist";

export default function Home() {
  return (
    <main
  className="min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12 flex items-center justify-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8">
    <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
      <span>🏦</span>{" "}
      <span className="bg-gradient-to-r from-yellow-400 via-gray-700 to-red-600 text-transparent bg-clip-text animate-pulse">
        Amir Arshad Bank Accounts
      </span>
    </h1>
    <BankList />
    <footer className="mt-12 text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} Amir Arshad Bank App. All rights reserved.
    </footer>
  </div>
</main>


  );
}
