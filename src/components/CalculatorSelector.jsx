const CalculatorSelector = ({ CalculatorType, setCalculatorType, t }) => {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1">
      <button
        onClick={() => {
          setCalculatorType("simple");
        }}
        className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
          CalculatorType === "simple"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-800"
        }`}
      >
        📈 {t.simpleInterest}
      </button>
      <button
        onClick={() => {
          setCalculatorType("compound");
        }}
        className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
          CalculatorType === "compound"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-800"
        }`}
      >
        📊 {t.compoundInterest}
      </button>
    </div>
  );
};

export default CalculatorSelector;
