/src
  /app                ← rutas y páginas (Next.js App Router)
    /layout.tsx
    /globals.css
    /home
      /page.tsx
    /login
      /page.tsx
  /components         ← componentes reutilizables
    /Button
      /Button.tsx
      /Button.module.css
    /Navbar
      /Navbar.tsx
  /features           ← módulos funcionales agrupados (opcional, estilo "domain-driven")
    /auth
      /components
      /hooks
      /services
      /utils
      /types.ts
  /hooks              ← hooks globales (useDarkMode, useWindowSize, etc.)
  /services           ← servicios globales (API, Firebase, DynamoDB, etc.)
    /api.ts
    /auth.ts
  /utils              ← funciones auxiliares generales
    /formatDate.ts
    /validateEmail.ts
  /types              ← tipos globales de TypeScript (interfaces, enums)
  /constants          ← constantes compartidas (colores, rutas, claves)
  /lib                ← inicialización de librerías (ej: db, auth, analytics)
    /dynamodb.ts
    /cognito.ts
  /middleware.ts      ← si usás middleware de Next.js
