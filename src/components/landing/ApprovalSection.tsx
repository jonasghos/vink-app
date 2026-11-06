import Link from "next/link";

export const ApprovalSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-3 items-center">
        <span className="text-[14px] font-bold tracking-widest uppercase text-vink-violeta">Control humano</span>
        <h2 className="m-0 font-grotesk text-[32px] md:text-[44px] font-bold tracking-tight max-w-[700px]">
          La IA propone, pero vos decidís.
        </h2>
        <p className="text-[18px] text-vink-pizarra max-w-[600px] mt-2">
          Vink no publica nada sin tu permiso. Todo el contenido generado pasa por tu revisión para que tengas siempre el control total de la comunicación de tu negocio.
        </p>
      </div>

      <div className="bg-vink-noche text-white rounded-[24px] p-8 md:p-12 w-full max-w-[800px] flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 items-center w-full justify-center z-10">
          <div className="bg-white/10 p-5 rounded-2xl flex flex-col gap-2 w-full md:w-64 backdrop-blur-sm">
            <span className="text-[13px] text-vink-lavanda uppercase tracking-wider font-semibold">1. Propuesta de Vink</span>
            <span className="font-semibold text-lg">Post de lanzamiento</span>
            <span className="text-sm text-vink-lavanda">Texto e imagen generados</span>
          </div>
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vink-coral hidden md:block">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vink-coral block md:hidden rotate-90">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          
          <div className="bg-vink-violeta p-5 rounded-2xl flex flex-col gap-2 w-full md:w-64 shadow-lg">
            <span className="text-[13px] text-vink-durazno uppercase tracking-wider font-semibold">2. Tu decisión</span>
            <div className="flex gap-2 mt-1">
              <button className="flex-1 bg-white text-vink-noche text-sm font-bold py-2 rounded-lg" disabled>Aprobar</button>
              <button className="flex-1 bg-white/20 text-white text-sm font-bold py-2 rounded-lg" disabled>Editar</button>
            </div>
          </div>
        </div>
      </div>
      
      <Link href="#probar" className="h-[58px] px-[32px] rounded-xl bg-vink-coral text-vink-noche font-bold text-[17px] flex items-center hover:-translate-y-[1px] hover:opacity-90 transition-all mt-4">
        Quiero probar Vink
      </Link>
    </section>
  );
};