const CompoundFrequency = ({ frequency, setFrequency, t }) => {
  return (
    <div className="space-y-3 mb-5 mt-3">
      <label className="block text-[15px] font-bold leading-6 text-slate-800">
        {t.frequency}:
      </label>

      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
      >
        <option value="annually">{t.annually}</option>
        <option value="half-yearly">{t.halfYearly}</option>
        <option value="quarterly">{t.quarterly}</option>
        <option value="monthly">{t.monthly}</option>
        <option value="daily">{t.daily}</option>
      </select>
    </div>
  );
};

export default CompoundFrequency;
