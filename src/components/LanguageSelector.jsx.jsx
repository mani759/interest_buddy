import { useState } from "react";

const languages = [
  {
    value: "en",
    label: "English",
    native: "English",
  },
  {
    value: "te",
    label: "తెలుగు",
    native: "తెలుగు",
  },
  {
    value: "hi",
    label: "हिन्दी",
    native: "हिन्दी",
  },
];

const LanguageSelector = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);

  const selectedLanguage = languages.find((item) => item.value === language);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
      >
        <span className="text-lg">🌐</span>

        <span>{selectedLanguage.label}</span>

        <span
          className={`text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Mobile backdrop */}
          <div
            className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl shadow-slate-900/15">
            {languages.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setLanguage(item.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                  language === item.value
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="text-sm font-semibold">{item.native}</span>

                {language === item.value && (
                  <span className="text-indigo-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
