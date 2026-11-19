/**
 * Contenido de la Home.
 *
 * Fuente: Manual de marca BRAN. 2026 (V.01) — identidad verbal, pág. 02–06.
 * Voz: "una conversación con un amigo que sabe". Relajado, pero preciso.
 * Nada de tecnicismos sin traducir ni promesas que no se puedan cumplir.
 *
 * No hay precios ni plazos: el manual no los define y no se inventan.
 * Lo marcado como "Propuesta" en el manual debe validarlo Brandon.
 */

import type { IconName } from "@/components/ui/Icon";

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#nosotros" },
] as const;

export const heroTrust = [
  "Explicaciones sin tecnicismos",
  "Datos cuidados desde el primer día",
  "Hablas con quien programa",
] as const;

export type Problem = {
  icon: IconName;
  title: string;
  body: string;
};

export const problems: Problem[] = [
  {
    icon: "layers",
    title: "Tu inventario vive en un cuaderno",
    body: "Anotar a mano toma tiempo, se pierde y no te dice cuánto ganas de verdad.",
  },
  {
    icon: "whatsapp",
    title: "Las ventas se pierden entre chats",
    body: "Pedidos, precios y fechas mezclados en una conversación. Cuando creces, nadie encuentra nada.",
  },
  {
    icon: "search",
    title: "Quien no te conoce, no te encuentra",
    body: "Sin un lugar claro con toda tu información, el cliente nuevo termina llamando al de al lado.",
  },
  {
    icon: "lock",
    title: "Los datos de tus clientes andan sueltos",
    body: "Pedir datos por WhatsApp es un riesgo. Hay formas simples de cuidarlos sin complicarte.",
  },
];

/**
 * Escalera de servicios (manual pág. 04) y extensiones de marca (pág. 08).
 * Cada servicio vive bajo una extensión de BRAN.: web, app, data, soporte.
 * `BRAN.lab` es contenido y aprendizaje, no un servicio contratable.
 */
export type Service = {
  id: string;
  /** Peldaño de la escalera: "01"… "06". */
  step: string;
  /** Extensión de marca, escrita como el manual: BRAN.web, BRAN.app… */
  extension: string;
  name: string;
  summary: string;
  cta: string;
  /** El producto estrella del manual: sistema de ventas e inventario. */
  featured: boolean;
};

export const services: Service[] = [
  {
    id: "diagnostico",
    step: "01",
    extension: "BRAN.data",
    name: "Diagnóstico digital",
    summary: "Qué digitalizar primero y cuánto cuesta. El mejor lugar para empezar.",
    cta: "Pedir mi diagnóstico",
    featured: false,
  },
  {
    id: "web",
    step: "02",
    extension: "BRAN.web",
    name: "Web profesional",
    summary: "Toda la información de tu negocio, clara y en un solo lugar.",
    cta: "Quiero mi web",
    featured: false,
  },
  {
    id: "ventas-inventario",
    step: "03",
    extension: "BRAN.app",
    name: "Sistema de ventas e inventario",
    summary:
      "Stock, ventas y ganancias en tiempo real. Tu inventario, sin cuaderno.",
    cta: "Quiero este sistema",
    featured: true,
  },
  {
    id: "a-medida",
    step: "04",
    extension: "BRAN.app",
    name: "App o sistema a la medida",
    summary: "Para los procesos propios de tu negocio, hechos justo como los necesitas.",
    cta: "Contarte mi idea",
    featured: false,
  },
  {
    id: "soporte",
    step: "05",
    extension: "BRAN.soporte",
    name: "Plan de soporte y mejora",
    summary:
      "Una mensualidad para que tu sistema siga funcionando, seguro y al día.",
    cta: "Quiero soporte",
    featured: false,
  },
  {
    id: "taller",
    step: "06",
    extension: "BRAN.data",
    name: "Taller «Datos seguros para tu negocio»",
    summary:
      "Aprende a usar tus sistemas sin exponer la información de tus clientes.",
    cta: "Saber del taller",
    featured: false,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

/** Propuesta: el manual no define un proceso; se deriva de su voz y principios. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Te escucho",
    body: "Entiendo cómo funciona tu negocio hoy y qué te quita más tiempo.",
  },
  {
    number: "02",
    title: "Te lo explico fácil",
    body: "Te digo qué conviene hacer primero y cuánto cuesta, sin tecnicismos.",
  },
  {
    number: "03",
    title: "Lo construyo",
    body: "Lo hago a tu medida, cuidando tus datos desde el primer día.",
  },
  {
    number: "04",
    title: "Lo publicamos",
    body: "Lo probamos juntos y lo dejamos funcionando, seguro y fácil de usar.",
  },
  {
    number: "05",
    title: "Sigo contigo",
    body: "Soporte y mejoras para que siga funcionando y al día.",
  },
];

export const footerColumns = [
  {
    title: "Servicios",
    links: [
      { label: "BRAN.web", href: "#servicios" },
      { label: "BRAN.app", href: "#servicios" },
      { label: "BRAN.data", href: "#servicios" },
      { label: "BRAN.soporte", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Proceso", href: "#proceso" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Sobre mí", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
] as const;
