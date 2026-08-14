const InputField = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="space-y-3 mb-3">
      <label className="block text-[15px] font-bold leading-6 text-slate-800">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-indigo-500">
          ₹
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
        />
      </div>
    </div>
  );
};

export default InputField;
