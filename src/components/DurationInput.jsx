const DurationInput = ({ time, setTime, timeUnit, setTimeUnit, t }) => {
  const handleTimeChange = (e) => {
    const value = e.target.value;

    // Only allow whole numbers
    if (/^\d*$/.test(value)) {
      setTime(value);
    }
  };

  const handleUnitChange = (e) => {
    setTimeUnit(e.target.value);
    setTime("");
  };

  return (
    <div className="mt-3">
      <label className="block text-sm font-semibold text-slate-700">
        {t.time}:
      </label>

      <div className="grid grid-cols-[1fr_120px] gap-2">
        <input
          type="number"
          min="1"
          step="1"
          value={time}
          onChange={handleTimeChange}
          placeholder="Enter duration"
          className="h-14 min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
        />

        <select
          value={timeUnit}
          onChange={handleUnitChange}
          className="h-14 min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
        >
          <option value="years">{t.years}</option>
          <option value="months">{t.months}</option>
          <option value="days">{t.days}</option>
        </select>
      </div>
    </div>
  );
};

export default DurationInput;
