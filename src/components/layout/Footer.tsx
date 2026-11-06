export const Footer = () => {
  return (
    <footer className="bg-vink-noche text-vink-lavanda">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <svg width="40" height="22" viewBox="0 0 120 64" aria-hidden="true" className="shrink-0">
            <rect x="0" y="0" width="120" height="64" rx="32" fill="#6A52C4"></rect>
            <circle cx="88" cy="32" r="24" fill="#FF6B57"></circle>
            <path d="M78.5 27 L88 40 L97.5 27" fill="none" stroke="#1A1B2E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span className="font-grotesk font-bold text-[22px] text-white tracking-tight">vink</span>
        </div>
        <span>Hecho en Argentina · govink.com</span>
      </div>
    </footer>
  );
};