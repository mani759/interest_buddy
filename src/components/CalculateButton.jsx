const CalculateButton = ({ onClick, t }) => {
  return (
    <button
      onClick={onClick}
      className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:translate-y-0"
    >
      <span>✨</span>
      {t.calculate}
      <span>→</span>
    </button>
  );
};

export default CalculateButton;
