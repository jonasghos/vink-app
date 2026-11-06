import { EarlyAccessForm } from "./EarlyAccessForm";

export const EarlyAccessSection = () => {
  return (
    <section id="probar" className="bg-vink-violeta text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
        <div className="flex-1 flex flex-col gap-5 max-w-[500px]">
          <span className="text-[14px] font-bold tracking-widest uppercase text-vink-durazno">Acceso Anticipado</span>
          <h2 className="m-0 font-grotesk text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.05]">
            Sumá a tu equipo de marketing.
          </h2>
          <p className="m-0 text-[18px] text-vink-lavanda leading-relaxed">
            Estamos abriendo lugares para los primeros comercios. Dejanos tus datos y te avisamos cuando sea tu turno para probar Vink.
          </p>
        </div>
        
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <EarlyAccessForm />
        </div>
      </div>
    </section>
  );
};