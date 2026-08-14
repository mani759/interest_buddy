const ResultCard = ({ result, t }) => {
  if (!result) return null;

  const formatMoney = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="mt-5 overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-xl shadow-slate-900/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            {t.result}
          </p>

          <h3 className="mt-1 text-lg font-bold">🎉 {t.result}</h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">
          ✓
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm text-slate-400">{t.interest}</span>

          <strong className="text-base sm:text-lg">
            {formatMoney(result.totalInterest)}
          </strong>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <span className="text-sm text-slate-400">{t.totalAmount}</span>

          <strong className="text-lg sm:text-xl">
            {formatMoney(result.totalAmount)}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
