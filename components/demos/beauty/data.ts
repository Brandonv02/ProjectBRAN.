// Contenido de demostración para LUMÉ BEAUTY STUDIO. Negocio, equipo,
// precios y testimonios son ficticios — ver nota en la propia página.
// Fotografías locales de demo, servidas desde /public/demos/beauty.

export const DEMO_WHATSAPP =
  "https://wa.me/573000000001?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20LUM%C3%89%20BEAUTY%20STUDIO";
export const DEMO_PHONE = "+57 300 000 0001";

export const navItems = [
  ["#inicio", "Inicio"],
  ["#servicios", "Servicios"],
  ["#galeria", "Galería"],
  ["#especialistas", "Especialistas"],
  ["#contacto", "Contacto"],
] as const;

export type ServiceItem = {
  name: string;
  description: string;
  price: string;
};

export const services: ServiceItem[] = [
  { name: "Corte & styling", description: "Corte a medida y peinado para cada tipo de cabello.", price: "Desde $45.000" },
  { name: "Manicure", description: "Cuidado de manos y esmaltado de precisión.", price: "Desde $35.000" },
  { name: "Lashes", description: "Extensión y lifting de pestañas con acabado natural.", price: "Desde $50.000" },
  { name: "Makeup", description: "Maquillaje profesional para cualquier ocasión.", price: "Desde $80.000" },
  { name: "Tratamientos", description: "Rituales faciales y capilares de cuidado profundo.", price: "Desde $60.000" },
];

export type ExperienceStep = {
  number: string;
  title: string;
  body: string;
};

export const experienceSteps: ExperienceStep[] = [
  { number: "01", title: "Llegas", body: "Te recibimos en un espacio pensado para que sueltes el día." },
  { number: "02", title: "Te desconectas", body: "Una pausa real, sin afán, solo para ti." },
  { number: "03", title: "Nos encargamos de cada detalle", body: "Técnica y cuidado en cada paso del servicio." },
  { number: "04", title: "Sales sintiéndote increíble", body: "Con un estilo renovado y la confianza puesta." },
];

export type Specialist = {
  name: string;
  role: string;
  image: string;
  alt: string;
};

export const specialists: Specialist[] = [
  { name: "Valentina", role: "Hair Artist", image: "/demos/beauty/beauty-01.webp", alt: "Estilista trabajando el cabello de una clienta" },
  { name: "Sofía", role: "Nail Artist", image: "/demos/beauty/beauty-02.webp", alt: "Manicura y cuidado de uñas" },
  { name: "Camila", role: "Beauty Specialist", image: "/demos/beauty/beauty-03.webp", alt: "Aplicación de maquillaje profesional" },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Salí sintiéndome como una nueva versión de mí misma.", name: "Cliente demo" },
  { quote: "Atención impecable y un espacio que se siente como un respiro.", name: "Cliente demo" },
  { quote: "El detalle y el cuidado se notan desde que entras.", name: "Cliente demo" },
];

export type GalleryItem = {
  label: string;
  image: string;
  alt: string;
  aspect: string;
};

export const galleryItems: GalleryItem[] = [
  { label: "Cabello", image: "/demos/beauty/hero.webp", alt: "Lavado de cabello en un estudio de belleza", aspect: "aspect-[3/4]" },
  { label: "Styling", image: "/demos/beauty/beauty-01.webp", alt: "Peinado profesional con secador y cepillo", aspect: "aspect-square" },
  { label: "Maquillaje", image: "/demos/beauty/beauty-03.webp", alt: "Aplicación de maquillaje profesional", aspect: "aspect-[4/5]" },
  { label: "Pestañas", image: "/demos/beauty/beauty-04.webp", alt: "Aplicación de extensiones de pestañas", aspect: "aspect-[3/4]" },
  { label: "Uñas", image: "/demos/beauty/beauty-02.webp", alt: "Cuidado de manos y uñas", aspect: "aspect-square" },
  { label: "Detalles de producto", image: "/demos/beauty/beauty-03.webp", alt: "Productos de maquillaje en uso", aspect: "aspect-[16/10]" },
];

export const feature = {
  eyebrow: "Tu próximo look",
  name: "Hair Styling + Makeup",
  description: "El dúo perfecto para un evento, una sesión de fotos o simplemente para sentirte increíble.",
  price: "$120.000",
};
