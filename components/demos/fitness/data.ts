// Contenido de demostración para VOLT ATHLETICS. Negocio, equipo, planes,
// métricas y testimonios son ficticios — ver nota en la propia página. No
// fotografías de muestra locales en /public/demos/fitness.

export const DEMO_WHATSAPP =
  "https://wa.me/573000000003?text=Hola%2C%20quiero%20unirme%20a%20VOLT%20ATHLETICS";
export const DEMO_PHONE = "+57 300 000 0003";

export const navItems = [
  ["#inicio", "Inicio"],
  ["#entrenamiento", "Entrenamiento"],
  ["#planes", "Planes"],
  ["#coaches", "Coaches"],
  ["#resultados", "Resultados"],
  ["#contacto", "Contacto"],
] as const;

export const footerNavItems = [
  ["#inicio", "Inicio"],
  ["#entrenamiento", "Entrenamiento"],
  ["#planes", "Planes"],
  ["#coaches", "Coaches"],
  ["#contacto", "Contacto"],
] as const;

export type MethodPrinciple = {
  number: string;
  title: string;
  body: string;
};

export const methodPrinciples: MethodPrinciple[] = [
  { number: "01", title: "Fuerza", body: "Construye una base sólida." },
  { number: "02", title: "Técnica", body: "Muévete mejor." },
  { number: "03", title: "Disciplina", body: "Hazlo incluso cuando no tengas ganas." },
  { number: "04", title: "Progreso", body: "Mide. Ajusta. Avanza." },
];

export type Plan = {
  name: string;
  price: string;
  features: string[];
  featured: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$89.000",
    features: ["Acceso al gimnasio", "Zona de fuerza", "Zona cardio"],
    featured: false,
  },
  {
    name: "Performance",
    price: "$129.000",
    features: ["Acceso ilimitado", "Clases grupales", "Evaluación inicial"],
    featured: true,
  },
  {
    name: "Elite",
    price: "$189.000",
    features: ["Acceso ilimitado", "Clases grupales", "Seguimiento personalizado", "Evaluaciones mensuales"],
    featured: false,
  },
];

export type GalleryItem = {
  label: string;
  image: string;
  alt: string;
  aspect: string;
};

export const facilityItems: GalleryItem[] = [
  { label: "Zona de fuerza", image: "/demos/fitness/gym.webp", alt: "Área de fuerza con barras y máquinas", aspect: "aspect-[4/5]" },
  { label: "Entrenamiento funcional", image: "/demos/fitness/training-01.webp", alt: "Entrenamiento de fuerza guiado en un gimnasio", aspect: "aspect-square" },
  { label: "Fuerza", image: "/demos/fitness/training-02.webp", alt: "Atleta entrenando con pesas", aspect: "aspect-[3/4]" },
  { label: "Entrenamiento personal", image: "/demos/fitness/training-03.webp", alt: "Entrenamiento supervisado con barra", aspect: "aspect-[16/10]" },
  { label: "El gimnasio", image: "/demos/fitness/gym.webp", alt: "Equipos de entrenamiento en un gimnasio", aspect: "aspect-square" },
];

export type Coach = {
  name: string;
  role: string;
  tint: "graphite" | "carbon" | "lime";
};

// Ninguna de las fotos locales disponibles muestra un retrato claro de cada
// coach (una está de espaldas, otra tiene a una persona sin identificar en
// cuadro, y la tercera no corresponde al nombre), así que esta sección usa
// el placeholder editorial en vez de una fotografía incorrecta.
export const coaches: Coach[] = [
  { name: "Mateo", role: "Strength Coach", tint: "carbon" },
  { name: "Andrea", role: "Performance Coach", tint: "graphite" },
  { name: "Sebastián", role: "Functional Coach", tint: "lime" },
];

export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "+32%", label: "Fuerza" },
  { value: "-18%", label: "Tiempo" },
  { value: "+41%", label: "Resistencia" },
];

export type ExperienceStep = {
  number: string;
  title: string;
  body: string;
};

export const experienceSteps: ExperienceStep[] = [
  { number: "01", title: "Conoces el espacio", body: "Un recorrido rápido por cada zona, para que sepas exactamente dónde entrenar." },
  { number: "02", title: "Evaluamos tu nivel", body: "Medimos tu punto de partida real, sin suposiciones." },
  { number: "03", title: "Definimos tu objetivo", body: "Fuerza, resistencia o composición corporal: tú decides la meta." },
  { number: "04", title: "Empiezas a entrenar", body: "Tu primer plan, listo desde el día uno." },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Llevo tres meses entrenando aquí y el cambio se siente en todo, no solo en el espejo.", name: "Cliente demo" },
  { quote: "Los coaches realmente hacen seguimiento. No es solo pagar y entrenar solo.", name: "Cliente demo" },
  { quote: "El ambiente te empuja a dar un poco más en cada sesión.", name: "Cliente demo" },
];

export type ScheduleRow = {
  label: string;
  hours: string;
};

export const schedule: ScheduleRow[] = [
  { label: "Lunes — Viernes", hours: "5:00 AM — 10:00 PM" },
  { label: "Sábado", hours: "7:00 AM — 2:00 PM" },
];
