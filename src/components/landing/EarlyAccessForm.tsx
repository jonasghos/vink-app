"use client";

import { useState } from "react";

export const EarlyAccessForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulación demostrativa (MVP)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white text-vink-noche rounded-[24px] p-8 md:p-12 flex flex-col gap-4 items-center text-center animate-fade-in shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#ECE8FA] text-[#4B3A9E] flex items-center justify-center mb-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="font-grotesk text-[28px] font-bold m-0">¡Gracias por tu interés!</h3>
        <p className="text-[16px] text-vink-pizarra leading-relaxed max-w-[400px]">
          Esta es una versión demostrativa de la plataforma. Pronto habilitaremos el registro oficial para los primeros usuarios.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-vink-violeta font-semibold hover:underline"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-vink-noche rounded-[24px] p-6 md:p-10 flex flex-col gap-5 shadow-xl w-full max-w-[600px] animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="text-[14px] font-semibold text-vink-pizarra">Tu nombre *</label>
          <input id="nombre" type="text" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow" placeholder="Ej. María" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="negocio" className="text-[14px] font-semibold text-vink-pizarra">Nombre del negocio *</label>
          <input id="negocio" type="text" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow" placeholder="Ej. Tienda María" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="rubro" className="text-[14px] font-semibold text-vink-pizarra">Rubro o actividad *</label>
        <select id="rubro" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow">
          <option value="">Seleccioná una opción...</option>
          <option value="gastronomia">Gastronomía</option>
          <option value="indumentaria">Indumentaria</option>
          <option value="estetica">Estética y Belleza</option>
          <option value="servicios">Servicios Profesionales</option>
          <option value="tienda_online">Tienda Online / Retail</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[14px] font-semibold text-vink-pizarra">Email *</label>
          <input id="email" type="email" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow" placeholder="maria@ejemplo.com" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="text-[14px] font-semibold text-vink-pizarra">WhatsApp</label>
          <input id="whatsapp" type="tel" className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow" placeholder="+54 9 11 1234-5678" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dificultad" className="text-[14px] font-semibold text-vink-pizarra">Principal dificultad con tus redes *</label>
        <select id="dificultad" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow">
          <option value="">Seleccioná una opción...</option>
          <option value="ideas">No se me ocurren ideas</option>
          <option value="tiempo">No tengo tiempo para crear</option>
          <option value="constancia">Me cuesta ser constante</option>
          <option value="diseno">No sé cómo diseñar o redactar</option>
          <option value="otro">Otra</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="red" className="text-[14px] font-semibold text-vink-pizarra">Red social principal *</label>
        <select id="red" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow">
          <option value="">Seleccioná una opción...</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="tiktok">TikTok</option>
          <option value="linkedin">LinkedIn</option>
          <option value="varias">Varias por igual</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="pago" className="text-[14px] font-semibold text-vink-pizarra">¿Cuánto estarías dispuesto a pagar mensualmente por una solución que te resuelva esto? *</label>
        <select id="pago" required className="h-12 rounded-xl border border-vink-borde px-3.5 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow">
          <option value="">Seleccioná una opción...</option>
          <option value="hasta_15">Hasta USD 15 / mes</option>
          <option value="15_30">Entre USD 15 y USD 30 / mes</option>
          <option value="mas_30">Más de USD 30 / mes</option>
          <option value="ns_nc">No lo sé todavía</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="comentarios" className="text-[14px] font-semibold text-vink-pizarra">Comentarios adicionales (Opcional)</label>
        <textarea id="comentarios" rows={3} className="rounded-xl border border-vink-borde p-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-vink-violeta transition-shadow resize-none" placeholder="¿Algo más que nos quieras contar sobre tu negocio?"></textarea>
      </div>

      <div className="flex items-start gap-3 mt-2">
        <input id="consentimiento" type="checkbox" required className="mt-1 w-4 h-4 text-vink-violeta rounded border-vink-borde focus:ring-vink-violeta cursor-pointer" />
        <label htmlFor="consentimiento" className="text-[13px] text-vink-pizarra leading-relaxed cursor-pointer">
          Acepto ser contactado por Vink y entiendo que este formulario es para solicitar acceso anticipado a la plataforma. *
        </label>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="h-14 rounded-xl border-none bg-vink-noche text-white font-bold text-[16px] mt-2 hover:bg-vink-noche/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {status === 'submitting' ? 'Enviando...' : 'Quiero sumarme a Vink'}
      </button>
    </form>
  );
};