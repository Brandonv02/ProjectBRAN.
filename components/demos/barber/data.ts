// Contenido de demostración para NERO BARBER. Negocio, equipo, precios y
// testimonios son ficticios — ver nota en la propia página.

export const DEMO_WHATSAPP =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20NERO%20BARBER";
export const DEMO_PHONE = "+57 300 000 0000";

export const navItems = [
  ["#inicio", "Inicio"],
  ["#servicios", "Servicios"],
  ["#galeria", "Galería"],
  ["#equipo", "Barberos"],
  ["#contacto", "Contacto"],
] as const;

export type ServiceItem = {
  name: string;
  description: string;
  price: string;
};

export const services: ServiceItem[] = [
  { name: "Corte clásico", description: "Corte preciso y acabado limpio con tijera y máquina.", price: "$25.000" },
  { name: "Fade", description: "Degradado trabajado al milímetro, de piel a tijera.", price: "$30.000" },
  { name: "Barba", description: "Perfilado, afeitado y cuidado con navaja y toalla caliente.", price: "$20.000" },
  { name: "Corte + barba", description: "El ritual completo para renovar tu estilo de principio a fin.", price: "$45.000" },
  { name: "Corte premium", description: "Tiempo extendido, diagnóstico de estilo y atención a cada detalle.", price: "$50.000" },
];

export type ExperienceStep = {
  number: string;
  title: string;
  body: string;
};

export const experienceSteps: ExperienceStep[] = [
  { number: "01", title: "Llega", body: "Un espacio pensado para desconectar del ruido de la calle." },
  { number: "02", title: "Relájate", body: "Café, buena música y el tiempo que mereces, sin afán." },
  { number: "03", title: "Déjanos trabajar", body: "Precisión y técnica en cada detalle del corte y la barba." },
  { number: "04", title: "Sal con tu estilo", body: "Presencia renovada, lista para el resto del día." },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  { name: "Mateo", role: "Master Barber", image: "/demos/nero/staff1.webp" },
  { name: "Daniel", role: "Fade Specialist", image: "/demos/nero/staff2.webp" },
  { name: "Santiago", role: "Beard Specialist", image: "/demos/nero/staff3.webp" },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Excelente atención y el fade quedó exactamente como lo pedí.", name: "Cliente demo" },
  { quote: "Ambiente impecable y un equipo que realmente sabe lo que hace.", name: "Cliente demo" },
  { quote: "Encontré mi barbería de cabecera desde la primera visita.", name: "Cliente demo" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  aspect: string;
  position?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/demos/nero/hero.webp",
    alt: "Barbero trabajando en un corte dentro de un interior oscuro y elegante",
    label: "Ambiente",
    aspect: "aspect-[3/4]",
    position: "object-[58%_center]",
  },
  {
    src: "/demos/nero/detail.webp",
    alt: "Detalle de máquina y navaja durante un perfilado de barba",
    label: "Detalle",
    aspect: "aspect-square",
  },
  {
    src: "/demos/nero/staff1.webp",
    alt: "Retrato de un barbero de la demo NERO BARBER",
    label: "El equipo",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/demos/nero/staff2.webp",
    alt: "Retrato de un barbero de la demo NERO BARBER",
    label: "El oficio",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/demos/nero/staff3.webp",
    alt: "Retrato de un barbero de la demo NERO BARBER",
    label: "La experiencia",
    aspect: "aspect-square",
  },
  {
    src: "/demos/nero/hero.webp",
    alt: "Interior premium del espacio conceptual de NERO BARBER",
    label: "Interior",
    aspect: "aspect-[16/10]",
    position: "object-[20%_30%]",
  },
];
