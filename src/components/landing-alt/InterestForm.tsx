"use client";

import { FormEvent, useState } from "react";

export function InterestForm() {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setFeedback(
      "¡Gracias por tu interés! Este es un prototipo: el formulario todavía no envía los datos. Antes de publicar la landing, hay que conectarlo para guardar las respuestas."
    );
  };

  return (
    <div className="form-card">
      <h3>Quiero conocer Vink</h3>
      <p className="form-intro">
        Completá estos datos. Nos ayudan a entender qué negocios podrían aprovechar mejor la herramienta.
      </p>
      <form id="interest-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="alt-name">Tu nombre *</label>
            <input
              id="alt-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Cómo te llamás"
            />
          </div>
          <div className="field">
            <label htmlFor="alt-business">Nombre del negocio *</label>
            <input
              id="alt-business"
              name="business"
              required
              placeholder="Nombre de tu marca"
            />
          </div>
          <div className="field">
            <label htmlFor="alt-category">¿De qué rubro es? *</label>
            <select id="alt-category" name="category" required defaultValue="">
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option>Gastronomía</option>
              <option>Indumentaria y accesorios</option>
              <option>Estética y belleza</option>
              <option>Salud y bienestar</option>
              <option>Servicios profesionales</option>
              <option>Comercio / tienda</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="alt-contact">Email o WhatsApp *</label>
            <input
              id="alt-contact"
              name="contact"
              required
              placeholder="Tu forma de contacto"
            />
          </div>
          <div className="field full">
            <label htmlFor="alt-challenge">
              ¿Qué es lo que más te cuesta de manejar las redes? *
            </label>
            <select id="alt-challenge" name="challenge" required defaultValue="">
              <option value="" disabled>
                Elegí lo que más te representa
              </option>
              <option>No sé qué publicar</option>
              <option>No tengo tiempo para crear contenido</option>
              <option>Me cuesta diseñar imágenes y escribir textos</option>
              <option>No logro mantener la constancia</option>
              <option>No tengo una estrategia clara</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="alt-channels">¿Qué canal usás más?</label>
            <select id="alt-channels" name="channels" defaultValue="">
              <option value="">Seleccioná uno</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>TikTok</option>
              <option>WhatsApp</option>
              <option>Varios por igual</option>
              <option>Actualmente no uso redes</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="alt-payment">¿Pagarías por una herramienta así?</label>
            <select id="alt-payment" name="payment" defaultValue="">
              <option value="">Seleccioná una opción</option>
              <option>Sí, si resuelve mis necesidades</option>
              <option>Depende del precio</option>
              <option>Por ahora no</option>
              <option>No estoy seguro/a</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="alt-extra">
              ¿Qué te gustaría que Vink hiciera por tu negocio? (opcional)
            </label>
            <textarea
              id="alt-extra"
              name="extra"
              placeholder="Contanos brevemente..."
            />
          </div>
        </div>
        <label className="consent">
          <input type="checkbox" id="alt-consent" name="consent" required />
          <span>
            Acepto que Vink utilice estos datos para contactarme sobre el proyecto y su etapa de prueba. *
          </span>
        </label>
        <button className="btn btn-dark form-submit" type="submit">
          Enviar mi interés <span aria-hidden="true">→</span>
        </button>
        <div
          className={`form-feedback${feedback ? " show" : ""}`}
          id="form-feedback"
          role="status"
          aria-live="polite"
        >
          {feedback}
        </div>
      </form>
    </div>
  );
}
