# Arquitectura de Vink App

Este documento es la fuente de verdad de la arquitectura de Vink.

## 1. Visión y Arquitectura Elegida

Vink se proyecta como una plataforma SaaS orientada a ayudar a pequeños comercios a planificar y generar contenido para redes sociales utilizando inteligencia artificial.

La arquitectura elegida es un **monolito modular, orientado a eventos y preparado para procesamiento asíncrono mediante workers independientes**.

**Por qué:**
Empezamos con un monolito para mantener la simplicidad y agilidad inicial. Sin embargo, estructuramos el código modularmente para mantener bajo acoplamiento y facilitar una eventual extracción a servicios independientes solo si el negocio o la técnica lo requiere. Evitamos microservicios anticipadamente para no introducir complejidad operativa prematura.

## 2. Principios de Diseño

*   **Separación de responsabilidades:** Cada módulo se enfoca en resolver un dominio específico.
*   **Bajo acoplamiento y alta cohesión:** Módulos independientes que se comunican por contratos.
*   **Escalabilidad horizontal:** Minimización de estado interno; diseño stateless.
*   **Aislamiento multi-tenant:** Protección y partición de datos por negocio.
*   **Pragmatismo:** Evitar sobreingeniería y abstracciones innecesarias.

## 3. Separación de Capas (Domain-Driven Design adaptado)

*   **Presentation:** Componentes React, UI, páginas, validación visual. No contiene reglas de negocio.
*   **Application:** Casos de uso, orquestación, coordinación entre módulos.
*   **Domain:** Reglas de negocio puras, entidades, contratos.
*   **Infrastructure:** Acceso a datos, integraciones externas (IA, Storage), colas.

## 4. Módulos Funcionales (Dominio)

La plataforma se organizará conceptualmente en:

1.  **Identity:** Autenticación, usuarios y permisos.
2.  **Businesses:** Configuración de organizaciones y miembros.
3.  **Brand:** Identidad comercial, productos, tono.
4.  **Strategy:** Planificación, objetivos y calendario.
5.  **Content:** Piezas de contenido, versiones y aprobación.
6.  **AI:** Prompts, coordinación de modelos de IA.
7.  **Assets:** Multimedia e imágenes.
8.  **Billing:** Planes, consumo y límites.
9.  **Notifications:** Avisos y alertas.
10. **Admin:** Operativa interna.

*Regla:* El módulo de AI debe estar totalmente desacoplado de los proveedores finales (ej. Claude, fal.ai) detrás de interfaces.

## 5. Procesamiento Asíncrono y Workers

Los procesos pesados (como generación de texto o imágenes de IA) **no** deben resolverse dentro de la petición HTTP síncrona.

*   El sistema registrará un *job* y devolverá rápidamente.
*   Workers asíncronos procesarán la cola, manejarán reintentos, timeouts y control de concurrencia.

## 6. Stack Tecnológico Objetivo

*   **Frontend/Web:** Next.js (App Router), TypeScript, React, Tailwind CSS.
*   **Base de Datos/Backend Basal:** PostgreSQL, Supabase (Auth, Storage, Database).
*   **Procesamiento Asíncrono:** Inngest.
*   **Inteligencia Artificial:** Claude (Texto), fal.ai (Imágenes).
*   **Validaciones y Tests:** Zod, Vitest, Playwright.

---

## Estado de Implementación

### Implementado Actualmente (Fase 1 - MVP/Landing)
*   Next.js App Router inicializado.
*   Tailwind CSS y TypeScript configurados.
*   Estructura básica de rutas reservando `/app`.
*   Landing page pública y estática.
*   Formulario de captura de leads (solo demostrativo).

### Definido para Etapas Futuras (Fase 2+)
*   Infraestructura con Supabase y autenticación.
*   Diseño y modelado de base de datos multi-tenant.
*   Integración de Inngest para workers.
*   Integración con APIs de IA.
*   Dashboard funcional bajo `/app`.

### Pendiente de Decisión
*   Proveedor de pago (Stripe/MercadoPago).
*   Estrategia de publicación automática en redes sociales (Meta Graph API vs otros integradores).