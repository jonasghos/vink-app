export const ContentTypesSection = () => {
  return (
    <section id="contenido" className="bg-[#ECE8FA]">
      <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-10">
        <div className="flex flex-col gap-3 max-w-[820px]">
          <span className="text-[14px] font-bold tracking-widest uppercase text-[#4B3A9E]">Formatos de contenido</span>
          <h2 className="m-0 font-grotesk text-[32px] md:text-[44px] font-bold tracking-tight leading-tight">
            Todo lo que necesitás para mantener tus redes activas.
          </h2>
          <p className="m-0 text-[18px] text-vink-pizarra leading-relaxed">
            Vink genera ideas y contenido adaptado a los formatos que más funcionan hoy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-[20px] p-6 flex flex-col gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-vink-violeta flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <span className="text-[19px] font-semibold mt-2">Posts</span>
            <span className="text-[15px] text-vink-pizarra leading-relaxed">
              Imágenes y textos persuasivos para comunicar tus productos, servicios o promociones.
            </span>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 flex flex-col gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-vink-violeta flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <span className="text-[19px] font-semibold mt-2">Historias</span>
            <span className="text-[15px] text-vink-pizarra leading-relaxed">
              Contenido dinámico para interactuar con tu audiencia en el día a día.
            </span>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 flex flex-col gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-vink-violeta flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2 15h10"></path><path d="M9 18l3-3-3-3"></path></svg>
            </div>
            <span className="text-[19px] font-semibold mt-2">Carruseles</span>
            <span className="text-[15px] text-vink-pizarra leading-relaxed">
              Secuencias de imágenes para contar historias o explicar información en detalle.
            </span>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 flex flex-col gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-vink-violeta flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            </div>
            <span className="text-[19px] font-semibold mt-2">Guiones para Reels</span>
            <span className="text-[15px] text-vink-pizarra leading-relaxed">
              Estructuras listas para que puedas grabar videos cortos con facilidad.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};