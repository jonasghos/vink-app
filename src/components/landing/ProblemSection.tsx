export const ProblemSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-10">
      <h2 className="m-0 font-grotesk text-[32px] md:text-[44px] font-bold tracking-tight leading-tight max-w-[820px]">
        Dejá de pensar qué publicar. Empezá a publicar.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-vink-borde rounded-[24px] p-8 flex flex-col gap-4">
          <span className="text-[14px] font-bold tracking-widest uppercase text-vink-pizarra">Hoy</span>
          <ul className="m-0 pl-5 flex flex-col gap-3 text-[17px] leading-relaxed text-vink-pizarra list-disc">
            <li>Abrís Instagram y no sabés qué subir.</li>
            <li>Publicás cuando te acordás, y después nada por semanas.</li>
            <li>Diseñar una imagen o pensar un texto te lleva muchísimo tiempo.</li>
            <li>Una agencia o un profesional no te entra en el presupuesto.</li>
          </ul>
        </div>
        
        <div className="bg-vink-noche text-white rounded-[24px] p-8 flex flex-col gap-4">
          <span className="text-[14px] font-bold tracking-widest uppercase text-vink-coral">Con Vink</span>
          <ul className="m-0 pl-5 flex flex-col gap-3 text-[17px] leading-relaxed list-disc">
            <li>Cada lunes recibís la semana armada, con ideas pensadas para tu negocio.</li>
            <li>Mantenés una comunicación constante con tus clientes.</li>
            <li>Imágenes y textos listos, adaptados a tu marca y tus productos.</li>
            <li>Ahorrás tiempo y te enfocás en vender.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};