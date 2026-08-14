import { useState } from "react";
import Header from "./components/Header";
import CalculatorSelector from "./components/CalculatorSelector";
import SimpleInterest from "./calculators/SimpleInterest";
import CompoundInterest from "./calculators/CompoundInterest";
import translations from "./translations/translations";

function App() {
  const [CalculatorType, setCalculatorType] = useState("simple");
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-xl">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 font-bold text-white shadow-sm">
              ₹
            </div>

            <span className="text-sm font-bold text-slate-800">{t.title}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <span className="text-sm">🌐</span>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="cursor-pointer bg-transparent text-sm font-medium text-slate-700 outline-none"
            >
              <option value="en">English</option>
              <option value="te">తెలుగు</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>

        {/* Header */}
        <Header t={t} />

        {/* Calculator */}
        <main className="mt-7 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6">
          {/* Calculator selector */}
          <CalculatorSelector
            CalculatorType={CalculatorType}
            setCalculatorType={setCalculatorType}
            t={t}
          />

          {/* Selected calculator */}
          <div className="mb-5 mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">
            {t.selectedCalculator}
          </div>

          {CalculatorType === "simple" && <SimpleInterest t={t} />}

          {CalculatorType === "compound" && <CompoundInterest t={t} />}
        </main>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Made with <span className="text-slate-700">♥</span> for smarter
          calculations
        </p>
      </div>
    </div>
  );
}

export default App;
