export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="max-w-[1200px] mx-auto px-6 py-12 md:py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <span className="text-[14px] font-bold tracking-widest uppercase text-vink-violeta">Cómo funciona</span>
        <h2 className="m-0 font-grotesk text-[32px] md:text-[44px] font-bold tracking-tight">
          Un plan de contenido en tres pasos.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-vink-borde rounded-[22px] p-7 flex flex-col gap-3">
          <span className="font-grotesk text-[40px] font-bold text-vink-violeta">1</span>
          <span className="text-[21px] font-semibold">Vink conoce tu negocio</span>
          <span className="text-[16px] text-vink-pizarra leading-relaxed">
            Le contás a Vink sobre tu marca, tus productos y tus objetivos. Lo hacés una sola vez.
          </span>
        </div>
        
        <div className="bg-white border border-vink-borde rounded-[22px] p-7 flex flex-col gap-3">
          <span className="font-grotesk text-[40px] font-bold text-vink-violeta">2</span>
          <span className="text-[21px] font-semibold">Te propone qué comunicar</span>
          <span className="text-[16px] text-vink-pizarra leading-relaxed">
            Arma un plan semanal con ideas específicas para tu negocio y genera el contenido inicial.
          </span>
        </div>
        
        <div className="bg-vink-noche text-white rounded-[22px] p-7 flex flex-col gap-3">
          <span className="font-grotesk text-[40px] font-bold text-vink-coral">3</span>
          <span className="text-[21px] font-semibold">Vos revisás y aprobás</span>
          <span className="text-[16px] text-vink-lavanda leading-relaxed">
            Vink propone, pero vos decidís. Ajustás lo que quieras y aprobás el contenido final.
          </span>
        </div>
      </div>
    </section>
  );
};