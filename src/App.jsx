import { useState } from "react";
import Header from "./components/Header";
import CalculatorSelector from "./components/CalculatorSelector";
import SimpleInterest from "./calculators/SimpleInterest";
import CompoundInterest from "./calculators/CompoundInterest";
import translations from "./translations/translations";
import LanguageSelector from "./components/LanguageSelector.jsx";

function App() {
  const [CalculatorType, setCalculatorType] = useState("simple");
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-4 py-5 sm:px-6">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/finance-bg.jpg')",
        }}
      />

      {/* Blur */}

      <div className="fixed inset-0 z-0 bg-white/30 backdrop-blur-xl" />

      {/* Color Overlay */}

      <div className="relative z-10 px-4 py-5">
        <div className="mx-auto w-full max-w-xl">
          {/* Top bar */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 font-bold text-white shadow-sm">
                ₹
              </div>

              <span className="text-sm font-bold text-slate-800">
                {t.title}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <LanguageSelector language={language} setLanguage={setLanguage} />
            </div>
          </div>

          {/* Header */}
          <Header t={t} />

          {/* Calculator */}
          <main className="mt-9 rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_25px_70px_rgba(79,70,229,0.10)] backdrop-blur sm:p-7">
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
    </div>
  );
}

export default App;
