# Vink App

Vink es una plataforma SaaS que ayuda a pequeños comercios y emprendedores a planificar y generar contenido para sus redes sociales utilizando inteligencia artificial.

> Vink conoce tu negocio, te ayuda a definir qué comunicar y transforma esas ideas en contenido para tus redes. Vos revisás, ajustás y aprobás.

Este repositorio contiene la aplicación web de Vink.

## Estado del Proyecto

Actualmente, el proyecto se encuentra en la etapa inicial:
*   Landing page pública funcional.
*   Estructura base preparada para la aplicación interna.

## Documentación Importante

*   [ARCHITECTURE.md](./ARCHITECTURE.md): Decisiones arquitectónicas, visión técnica y estado actual.
*   [AGENTS.md](./AGENTS.md): Reglas e instrucciones para agentes de desarrollo IA.

## Tecnologías Utilizadas (Fase Actual)

*   [Next.js](https://nextjs.org/) (App Router)
*   [React](https://react.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Requisitos Previos

*   Node.js (v18+)
*   npm

## Instalación

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Compilación (Build)

Para generar el build de producción:

```bash
npm run build
```

Para iniciar el servidor de producción:

```bash
npm run start
```