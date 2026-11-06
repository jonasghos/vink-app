import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-vink-noche text-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <svg width="52" height="28" viewBox="0 0 120 64" aria-hidden="true" className="shrink-0">
            <rect x="0" y="0" width="120" height="64" rx="32" fill="#6A52C4"></rect>
            <circle cx="88" cy="32" r="24" fill="#FF6B57"></circle>
            <path d="M78.5 27 L88 40 L97.5 27" fill="none" stroke="#1A1B2E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span className="font-grotesk font-bold text-[26px] tracking-tight">vink</span>
        </Link>
        <nav aria-label="Secciones" className="flex flex-wrap items-center gap-6 text-[15px]">
          <Link href="#como-funciona" className="text-vink-lavanda hover:text-white transition-colors hidden sm:block">Cómo funciona</Link>
          <Link href="#contenido" className="text-vink-lavanda hover:text-white transition-colors hidden sm:block">Contenido</Link>
          <Link href="#faq" className="text-vink-lavanda hover:text-white transition-colors hidden sm:block">Preguntas</Link>
          <Link href="#probar" className="h-11 px-[18px] rounded-xl bg-vink-coral text-vink-noche font-bold flex items-center hover:-translate-y-[1px] hover:opacity-90 transition-all">
            Acceso anticipado
          </Link>
        </nav>
      </div>
    </header>
  );
};