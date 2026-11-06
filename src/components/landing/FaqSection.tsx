export const FaqSection = () => {
  return (
    <section id="faq" className="max-w-[860px] mx-auto px-6 py-24 flex flex-col gap-6">
      <h2 className="m-0 mb-4 font-grotesk text-[32px] md:text-[40px] font-bold tracking-tight">
        Preguntas frecuentes
      </h2>
      
      <details className="group bg-white border border-vink-borde rounded-[18px] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="text-[17px] md:text-[18px] font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
          ¿Necesito saber de marketing o de diseño?
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="mt-4 text-[16px] text-vink-pizarra leading-relaxed animate-fade-in">
          No. Vink analiza tu negocio y te propone qué publicar. Además, genera el contenido inicial para que no tengas que empezar desde cero. Vos solo revisás, ajustás si es necesario y aprobás.
        </p>
      </details>
      
      <details className="group bg-white border border-vink-borde rounded-[18px] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="text-[17px] md:text-[18px] font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
          ¿Vink publica automáticamente sin que yo lo vea?
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="mt-4 text-[16px] text-vink-pizarra leading-relaxed animate-fade-in">
          Nunca. La inteligencia artificial propone, pero el humano decide. Todo pasa por tu aprobación antes de considerarse listo. Tú tienes el control total de la comunicación de tu negocio.
        </p>
      </details>
      
      <details className="group bg-white border border-vink-borde rounded-[18px] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="text-[17px] md:text-[18px] font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
          ¿Qué formatos de contenido genera?
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="mt-4 text-[16px] text-vink-pizarra leading-relaxed animate-fade-in">
          Actualmente Vink te ayuda a planificar y generar ideas para Posts (imágenes y texto), Historias, Carruseles y Guiones estructurados para grabar Reels o TikToks.
        </p>
      </details>
      
      <details className="group bg-white border border-vink-borde rounded-[18px] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="text-[17px] md:text-[18px] font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
          ¿Para qué tipo de negocios sirve?
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="mt-4 text-[16px] text-vink-pizarra leading-relaxed animate-fade-in">
          Vink está pensado especialmente para pequeños comercios, tiendas online, emprendedores, gastronómicos y profesionales independientes que necesitan mantener sus redes activas pero no cuentan con el tiempo o el presupuesto para delegarlo al 100%.
        </p>
      </details>
      
      <details className="group bg-white border border-vink-borde rounded-[18px] p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="text-[17px] md:text-[18px] font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
          ¿Cuándo podré probarlo y cuál será el precio?
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="mt-4 text-[16px] text-vink-pizarra leading-relaxed animate-fade-in">
          Actualmente estamos abriendo la lista de espera para los primeros usuarios piloto. Te recomendamos completar el formulario para asegurarte un lugar. El modelo de precios será una suscripción mensual mucho más accesible que contratar una agencia tradicional.
        </p>
      </details>
    </section>
  );
};