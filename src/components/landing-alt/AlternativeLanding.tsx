import { InterestForm } from "./InterestForm";

export function AlternativeLanding() {
  return (
    <div className="vink-alt">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Vink, inicio">
            <span className="brand-mark" aria-hidden="true" />
            <span>vink</span>
          </a>
          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#contenido">Qué crea</a>
            <a href="#preguntas">Preguntas</a>
            <a className="btn btn-primary" href="#acceso">
              Quiero conocer Vink <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Marketing más simple para tu negocio</span>
              <h1>
                Que pensar qué publicar <span>no sea otro trabajo más.</span>
              </h1>
              <p className="lead">
                Vink conoce tu negocio, te ayuda a definir qué comunicar y transforma esas ideas en contenido para tus redes. Vos revisás, ajustás y aprobás.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#acceso">
                  Quiero probar Vink <span aria-hidden="true">→</span>
                </a>
                <a className="btn btn-secondary" href="#como-funciona">
                  Descubrir cómo funciona
                </a>
              </div>
              <p className="hero-note">
                Hecho para comercios y emprendimientos · Vos tenés la última palabra
              </p>
            </div>

            <div
              className="hero-visual"
              aria-label="Ejemplo ilustrativo del panel semanal de Vink"
            >
              <div className="glow" />
              <div className="dashboard">
                <div className="dash-top">
                  <span className="dash-brand">
                    vink <span style={{ color: "#6A52C4" }}>/</span> Mi negocio
                  </span>
                  <span className="dash-status">● Semana preparada</span>
                </div>
                <div className="dash-heading">
                  <small>Tu planificación</small>
                  <h3>Una semana de ideas para comunicar</h3>
                  <p>Contenido pensado a partir de tu negocio y tus objetivos.</p>
                </div>
                <div className="content-row">
                  <div className="thumb cafe" />
                  <div className="content-info">
                    <strong>Una pausa que vale la pena</strong>
                    <span>Post · Instagram</span>
                  </div>
                  <span className="pill approve">Para revisar</span>
                </div>
                <div className="content-row">
                  <div className="thumb product" />
                  <div className="content-info">
                    <strong>El favorito de la semana</strong>
                    <span>Historia · Instagram</span>
                  </div>
                  <span className="pill ready">Editar</span>
                </div>
                <div className="content-row">
                  <div className="thumb story" />
                  <div className="content-info">
                    <strong>Conocé lo que hacemos</strong>
                    <span>Guion de reel · Para grabar</span>
                  </div>
                  <span className="pill approve">Para revisar</span>
                </div>
                <div className="dash-bottom">
                  <span>Ejemplo ilustrativo de contenido</span>
                  <b>Ver planificación →</b>
                </div>
              </div>
              <div className="floating-note">
                <strong>Tu negocio. Tu estilo.</strong>
                <span>Contenido con identidad propia.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="container trust-inner">
            <span>
              <i className="check">✓</i> Ideas pensadas para tu negocio
            </span>
            <span>
              <i className="check">✓</i> Textos e imágenes en un mismo lugar
            </span>
            <span>
              <i className="check">✓</i> Vos aprobás antes de publicar
            </span>
          </div>
        </div>

        <section className="section">
          <div className="container problem-grid">
            <div className="problem-copy">
              <span className="eyebrow">Te entendemos</span>
              <h2>Sabés que tenés que estar en redes. Lo difícil es sostenerlo.</h2>
              <p className="lead">
                Entre atender clientes, gestionar pedidos y llevar adelante el negocio, pensar y crear contenido suele quedar para después.
              </p>
              <a className="text-link" href="#acceso">
                Quiero hacerlo más simple →
              </a>
            </div>
            <div className="pain-list">
              <article className="pain-item">
                <div className="pain-icon" aria-hidden="true">
                  ?
                </div>
                <div>
                  <strong>Te quedás sin ideas</strong>
                  <p>
                    Abrís Instagram, mirás la pantalla y no sabés qué podría interesarle a tus clientes.
                  </p>
                </div>
              </article>
              <article className="pain-item">
                <div className="pain-icon" aria-hidden="true">
                  ◷
                </div>
                <div>
                  <strong>No te alcanza el tiempo</strong>
                  <p>
                    Crear una publicación implica pensar el tema, escribir, diseñar y preparar las imágenes.
                  </p>
                </div>
              </article>
              <article className="pain-item">
                <div className="pain-icon" aria-hidden="true">
                  ↗
                </div>
                <div>
                  <strong>Publicás sin un rumbo claro</strong>
                  <p>
                    Subís algo cuando podés, pero cuesta mantener una comunicación coherente y constante.
                  </p>
                </div>
              </article>
              <article className="pain-item">
                <div className="pain-icon" aria-hidden="true">
                  ✳
                </div>
                <div>
                  <strong>Una solución profesional parece lejana</strong>
                  <p>
                    Contratar ayuda externa no siempre encaja con el presupuesto de un comercio pequeño.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section how" id="como-funciona">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Cómo funciona</span>
              <h2>De conocer tu negocio a tener contenido para compartir.</h2>
              <p className="lead">
                Vink usa la información de tu marca para proponerte una planificación y preparar las piezas que necesitás.
              </p>
            </div>
            <div className="steps">
              <article className="step">
                <div className="step-number">01</div>
                <h3>Vink conoce tu negocio</h3>
                <p>
                  Le contás qué ofrecés, a quién querés llegar y cómo es tu marca. También podés compartir tu sitio web, productos, fotos y referencias.
                </p>
                <span className="step-accent" aria-hidden="true" />
              </article>
              <article className="step">
                <div className="step-number">02</div>
                <h3>Prepara un plan de contenido</h3>
                <p>
                  Te propone ideas y acciones para la semana, con temas y formatos pensados para tu negocio y tus objetivos.
                </p>
                <span className="step-accent" aria-hidden="true" />
              </article>
              <article className="step">
                <div className="step-number">03</div>
                <h3>Revisás y aprobás</h3>
                <p>
                  Vink crea textos y piezas visuales. Podés pedir cambios, editar y aprobar lo que quieras usar. La decisión final siempre es tuya.
                </p>
                <span className="step-accent" aria-hidden="true" />
              </article>
            </div>
          </div>
        </section>

        <section className="section examples" id="contenido">
          <div className="container examples-grid">
            <div className="examples-copy">
              <span className="eyebrow">Contenido para tu marca</span>
              <h2>No más publicaciones improvisadas.</h2>
              <p className="lead">
                Cada propuesta parte de la identidad de tu negocio: qué vendés, qué te diferencia y qué querés comunicar. Así, las ideas tienen un porqué y no son solamente imágenes lindas.
              </p>
              <div className="format-list">
                <div className="format">
                  <span className="format-icon">▧</span> Posts
                </div>
                <div className="format">
                  <span className="format-icon">▯</span> Historias
                </div>
                <div className="format">
                  <span className="format-icon">▤</span> Carruseles
                </div>
                <div className="format">
                  <span className="format-icon">▶</span> Guiones para reels
                </div>
              </div>
            </div>
            <div className="social-preview">
              <div className="social-head">
                <div className="avatar">v</div>
                <div>
                  <strong>cafedelbarrio</strong>
                  <span>Ejemplo de pieza creada con Vink</span>
                </div>
              </div>
              <div className="post-art">
                <div className="post-kicker">UN MOMENTO PARA VOS</div>
                <div className="post-message">Hacé una pausa. Disfrutá algo rico.</div>
                <div className="post-brand">CAFÉ DEL BARRIO</div>
              </div>
              <div className="post-caption">
                <strong>Una idea, con intención.</strong>
                <p>
                  Una pieza de ejemplo para mostrar cómo Vink puede adaptar el mensaje y la estética a la identidad de un comercio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section approval">
          <div className="container approval-grid">
            <div>
              <span className="eyebrow">Vos tenés el control</span>
              <h2>
                La inteligencia artificial propone. <span>Vos decidís.</span>
              </h2>
              <p className="lead">
                No se publica nada por su cuenta. Revisás cada propuesta, hacés los cambios que necesitás y elegís qué contenido está listo para usar.
              </p>
              <div className="approval-points">
                <div className="approval-point">
                  <i className="check">✓</i>
                  <span>Revisá textos e imágenes antes de utilizarlos.</span>
                </div>
                <div className="approval-point">
                  <i className="check">✓</i>
                  <span>Pedí otra versión si una idea no representa a tu negocio.</span>
                </div>
                <div className="approval-point">
                  <i className="check">✓</i>
                  <span>Conservá el control sobre qué comunicar y cuándo hacerlo.</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-top">
                <strong>Revisar contenido</strong>
                <span>● Pendiente de aprobación</span>
              </div>
              <div className="review-body">
                <div className="review-image" />
                <div className="review-text">
                  <small>Post · Instagram</small>
                  <strong>Una pausa que vale la pena</strong>
                  <p>
                    Una propuesta visual y un texto preparados para tu marca. Revisalos y decidí si querés usarlos.
                  </p>
                </div>
              </div>
              <div className="review-actions">
                <span className="edit-action">Editar propuesta</span>
                <span className="approve-action">Aprobar contenido ✓</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta" id="acceso">
          <div className="container cta-grid">
            <div className="cta-copy">
              <span className="eyebrow">Estamos preparando Vink</span>
              <h2>Tu negocio puede ser parte de lo que viene.</h2>
              <p>
                Estamos conversando con comercios y emprendedores para construir una herramienta que realmente les sirva. Contanos sobre tu negocio y qué necesitás de tu marketing.
              </p>
              <p className="cta-note">
                Sumate a la lista de interesados. No implica contratar ni pagar nada.
              </p>
            </div>
            <InterestForm />
          </div>
        </section>

        <section className="section" id="preguntas">
          <div className="container faq-wrap">
            <div className="section-heading">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2>Lo que quizás quieras saber.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>¿Vink publica automáticamente en mis redes?</summary>
                <p>
                  No. En esta primera etapa, Vink prepara el contenido para que puedas revisarlo, aprobarlo y publicarlo vos. No se publica nada sin tu decisión.
                </p>
              </details>
              <details>
                <summary>¿Tengo que saber de marketing o diseño?</summary>
                <p>
                  No. La idea es que Vink te ayude a organizar qué comunicar y prepare propuestas de textos y piezas visuales para que no tengas que empezar desde cero.
                </p>
              </details>
              <details>
                <summary>¿Qué tipo de contenido puedo preparar?</summary>
                <p>
                  La propuesta contempla publicaciones, historias, carruseles y guiones para reels, adaptados a la identidad y a la información de tu negocio.
                </p>
              </details>
              <details>
                <summary>¿Vink sirve para cualquier tipo de negocio?</summary>
                <p>
                  Estamos validando la herramienta con distintos rubros. Queremos conocer cómo trabaja cada negocio y qué necesidades tiene antes de definir el alcance final.
                </p>
              </details>
              <details>
                <summary>¿Cuánto cuesta y cuándo estará disponible?</summary>
                <p>
                  Estamos en etapa de validación y todavía no definimos los planes ni la fecha de lanzamiento. Si dejás tus datos, podremos contarte las novedades y convocatorias para probarlo.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="footer-brand" href="#top">
            vink
          </a>
          <span className="footer-small">Una forma más simple de pensar tu contenido.</span>
          <div className="footer-links">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#acceso">Acceso anticipado</a>
            <a href="#preguntas">Preguntas</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
