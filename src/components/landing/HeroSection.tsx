import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="bg-vink-noche text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-wrap gap-14 items-center">
        
        <div className="flex-1 min-w-[320px] md:min-w-[480px] flex flex-col gap-6 animate-fade-in">
          <span className="self-start text-[13px] font-bold tracking-widest uppercase text-vink-noche bg-vink-coral py-1.5 px-3 rounded-full">
            Para comercios y emprendedores
          </span>
          <h1 className="m-0 font-grotesk text-[44px] md:text-[66px] font-bold tracking-tighter leading-tight">
            Que pensar qué publicar <span className="text-vink-coral">no sea otro trabajo más.</span>
          </h1>
          <p className="m-0 text-[18px] md:text-[20px] leading-relaxed text-vink-lavanda">
            Vink conoce tu negocio, te ayuda a definir qué comunicar y transforma esas ideas en contenido para tus redes. Vos revisás, ajustás y aprobás.
          </p>
          <div className="flex flex-wrap gap-3 items-center mt-2">
            <Link href="#probar" className="h-[58px] px-[30px] rounded-xl bg-vink-coral text-vink-noche font-bold text-[17px] flex items-center hover:-translate-y-[1px] hover:opacity-90 transition-all">
              Pedir acceso anticipado
            </Link>
            <Link href="#como-funciona" className="h-[58px] px-[24px] rounded-xl border border-vink-pizarra text-white font-semibold text-[17px] flex items-center hover:bg-white/5 transition-all">
              Ver cómo funciona
            </Link>
          </div>
        </div>

        <div className="flex-1 min-w-[320px] md:min-w-[400px] bg-[#34305E] rounded-[28px] p-6 flex flex-col gap-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-center px-1">
            <span className="text-[13px] font-semibold text-vink-lavanda">Lunes 8:00</span>
            <span className="text-[12px] font-bold text-vink-noche bg-vink-coral py-1 px-2.5 rounded-full">Tu semana está lista</span>
          </div>
          
          <div className="bg-white text-vink-noche rounded-[18px] p-3.5 flex items-center gap-3.5 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-vink-violeta shrink-0"></div>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[15px] font-semibold truncate">Promo 2x1 del jueves</span>
              <span className="text-[13px] text-vink-pizarra truncate">Post · Instagram y Facebook</span>
            </div>
            <span className="text-[13px] font-bold py-2 px-3 rounded-lg bg-[#ECE8FA] text-[#4B3A9E] shrink-0">Aprobada</span>
          </div>
          
          <div className="bg-white text-vink-noche rounded-[18px] p-3.5 flex items-center gap-3.5 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-vink-coral shrink-0"></div>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[15px] font-semibold truncate">Combo de la semana</span>
              <span className="text-[13px] text-vink-pizarra truncate">Carrusel · Instagram</span>
            </div>
            <span className="text-[13px] font-bold py-2 px-3 rounded-lg bg-vink-violeta text-white shrink-0">Aprobar</span>
          </div>
          
          <div className="bg-white text-vink-noche rounded-[18px] p-3.5 flex items-center gap-3.5 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-vink-noche shrink-0"></div>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[15px] font-semibold truncate">Así preparamos tu café</span>
              <span className="text-[13px] text-vink-pizarra truncate">Guion de reel</span>
            </div>
            <span className="text-[13px] font-bold py-2 px-3 rounded-lg bg-vink-violeta text-white shrink-0">Aprobar</span>
          </div>
        </div>

      </div>
    </section>
  );
};