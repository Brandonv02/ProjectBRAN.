# BRAN.

Web oficial de BRAN. — *Tecnología a la medida, sin peros.*
Marca de Brandon, desarrollador web y móvil. Identidad definida en el
**Manual de marca BRAN. 2026 (V.01)** (`Manual de marca — Brandon (1).pdf`).

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4.

---

## Arrancar

```bash
npm install
cp .env.example .env.local   # y rellena los valores
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run typecheck` | Comprueba tipos sin emitir |

---

## Antes de publicar

Nada de esto está inventado en el código: mientras falte, la web muestra un
placeholder entre corchetes y no genera el enlace. En desarrollo aparece un
aviso abajo a la izquierda con la lista de lo que falta.

- [ ] `NEXT_PUBLIC_SITE_URL` — **imprescindible**. Sin él, `robots.txt` sirve
      `Disallow: /` a propósito, para que una URL de preview no acabe indexada.
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — solo dígitos, formato internacional.
      Alimenta los CTA de WhatsApp de la página.
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] `NEXT_PUBLIC_PHONE_DISPLAY`
- [ ] `NEXT_PUBLIC_CITY`
- [ ] `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL`
- [ ] Confirmar responsable legal, correo para solicitudes, fecha de vigencia,
      jurisdicción y el procedimiento de derechos → placeholders centralizados
      en `lib/legal.ts`; las páginas legales ya están publicadas en el sitio.
- [ ] Foto real de Brandon en formato 4:5 → el Founder conserva un placeholder
      visual hasta recibirla.
- [ ] Incorporar proyectos reales cuando puedan publicarse → la lista de
      `components/sections/Projects.tsx` parte vacía y no muestra casos ficticios.

---

## Arquitectura

```
app/
  layout.tsx            Fuentes, metadata, Open Graph, skip link
  page.tsx              Composición de la Home
  json-ld.tsx           Datos estructurados (solo datos reales)
  globals.css           Tokens del design system + base + utilidades
  robots.ts sitemap.ts  SEO técnico
  icon.svg apple-icon.tsx opengraph-image/route.tsx   Assets de marca generados (punto naranja, monograma B.)

components/
  ui/         Piezas reutilizables: Button, Card, Badge, Container,
              Section, SectionHeader, Eyebrow, Logo, Icon, Reveal, ContactLink
  layout/     Navbar, Footer, MobileStickyCta
  sections/   Hero, DeliverableMockup, Problem, Services,
              Process, Projects, Founder, Cta
  dev/        EnvNotice (solo en desarrollo)

lib/
  site.ts     Configuración y datos de contacto con placeholders
  content.ts  Escalera de servicios (sin precios), proceso, problemas
  utils.ts    cn()

design/       Artboards de la marca anterior (ELEVA). Obsoletos: no entran en el build
```

### Dónde se cambia cada cosa

- **Servicios, procesos y copy** → `lib/content.ts`. No hay precios: el
  manual no los define.
- **Colores, tipografía, radios, movimiento** → bloque `@theme` de
  `app/globals.css`. Es la traducción 1:1 de la pág. 09–10 del manual de marca.
- **Datos de contacto** → variables de entorno, nunca hardcodeados.

---

## Design system

Los tokens salen del manual de marca (pág. 09–11). Reglas que el código respeta:

- **Paleta**: Negro profundo `#0A0A0A` (fondo), Gris carbón `#1C1E21`
  (superficies), Naranja ON `#FF5F1A` (carácter), Naranja claro `#FF8431`
  (etiquetas sobre negro), Gris niebla `#CDCDCD` (banda editorial clara),
  Blanco frío `#F4F5F5` (texto sobre oscuro).
- **Contraste**: texto **siempre negro sobre naranja**; nunca texto blanco
  pequeño sobre naranja ni texto naranja sobre gris niebla.
- **Tipografía**: Anta (firma y etiquetas, `font-label`), Sora (titulares,
  `font-display`), Manrope (textos, `font-sans`).
- **Firma**: `BRAN` en mayúsculas + punto redondo naranja. Extensiones en
  minúscula y pegadas al punto: `BRAN.web`, `BRAN.app`, `BRAN.data`,
  `BRAN.soporte`, `BRAN.lab` (máximo cinco activas).
- **Recursos gráficos**: aro, marcas de pausa, línea de luz y recorte B/N.
  Máximo dos por pieza (`components/ui/Logo.tsx`).
- **Formas**: esquinas de 20 a 28 px, botones redondos. Nada plano ni
  cuadriculado, sin emojis ni stickers.
- **Iconos**: un solo estilo, trazo 1.8 sobre grid de 24.

### Movimiento

- Hover de cards y botones: 250ms, curva `cubic-bezier(0.16, 1, 0.3, 1)`.
- Entrada al scroll: opacidad + 16px, **una sola vez**, escalonada 80ms.
- Un único movimiento ambiental: la línea de luz del hero.
- `prefers-reduced-motion` desactiva todo.
- El estado oculto de las entradas vive bajo la clase `.js` que añade un
  script en línea del `<head>`: **sin JavaScript la página se ve completa**.
  Nunca se esconde texto detrás de una animación.

---

## Rendimiento

- Las páginas se prerenderizan estáticamente; la imagen Open Graph se genera
  bajo demanda. ~108 kB de JS en la primera carga.
- Cero imágenes de mapa de bits: logo, iconos y la maqueta del hero son SVG y
  CSS (la foto de Brandon es la única imagen). No hay peticiones de red más allá del documento, el CSS y el JS.
- Fuentes autoalojadas con `next/font` (Sora, Manrope, Anta),
  subset latino, `display: swap`.
- La maqueta del hero se dibuja a tamaño fijo y se escala con `transform`
  dentro de un contenedor de altura fija por breakpoint: no reflows ni
  scroll horizontal.

---

## Notas de implementación

- **`hidden` sobre un `<Button>` no funciona**: la clase base del botón trae
  `inline-flex` y gana según el orden del CSS, no del atributo. Para ocultarlo
  por breakpoint, envuélvelo en un `<span className="hidden sm:block">`.
- **La maqueta del hero es una demo**, no un cliente real: la identidad va
  entre corchetes (`[ TU NEGOCIO ]`, `[ Sector ]`) a propósito.
- **Breakpoints**: los planes pasan a tres columnas en `lg`; el proceso, a
  cinco en `xl`. Entre medias se apilan, que es más legible que apretarlos.
