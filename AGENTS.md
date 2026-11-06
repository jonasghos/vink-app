# Instrucciones para Agentes de Desarrollo (Cursor y otros)

Si eres un agente de Inteligencia Artificial colaborando en este repositorio, **debes** seguir obligatoriamente estas reglas antes de escribir código:

1.  **Consulta la fuente de verdad:** Antes de proponer o modificar la estructura, lee `ARCHITECTURE.md`.
2.  **Respeta la Arquitectura y Principios:** Mantén la separación de responsabilidades y las capas definidas (Presentation, Application, Domain, Infrastructure). No acoples reglas de negocio a la UI.
3.  **Evaluación de Nuevas Funcionalidades:** Toda nueva funcionalidad deberá evaluarse primero respecto de la arquitectura definida en `ARCHITECTURE.md`. Si requiere cambiar una decisión arquitectónica, se deberá justificar el cambio con el usuario y **actualizar el documento** primero.
4.  **No introduzcas complejidad prematura:**
    *   No implementes microservicios ni dependencias pesadas sin justificación expresa.
    *   No configures infraestructura futura (Supabase, Inngest, etc.) hasta que la etapa del proyecto lo exija.
    *   No crees carpetas vacías para módulos que aún no existen.
5.  **Mantenimiento Documental:** 
    *   Actualiza la documentación (`ARCHITECTURE.md`, `README.md`) cuando se modifiquen decisiones estructurales.
    *   **No documentes como implementadas funcionalidades que todavía no existen.**
6.  **Resolución de Contradicciones:** Ante una contradicción entre la arquitectura documentada y el código existente, identifica el problema, informa al usuario y propón una solución antes de realizar cambios estructurales masivos.
7.  **Código Limpio:** Mantén el código fuertemente tipado (TypeScript estricto), sin dependencias o abstracciones innecesarias y orientado a componentes reutilizables.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
