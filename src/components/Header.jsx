const Header = ({ t }) => {
  return (
    <header className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-3xl shadow-lg shadow-slate-900/10">
        💰
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {t.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500 sm:text-base">{t.subtitle}</p>
    </header>
  );
};

export default Header;
