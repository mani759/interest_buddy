const Header = ({ t }) => {
  return (
    <header className="px-2 text-center">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-4xl shadow-xl shadow-indigo-500/20">
        💰
      </div>
      <h1 className="text-[clamp(2.25rem,10vw,3.5rem)] font-extrabold leading-[1.15] tracking-normal text-slate-950">
        {t.title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-6 text-slate-500 sm:text-base">
        {t.subtitle}
      </p>
    </header>
  );
};

export default Header;
