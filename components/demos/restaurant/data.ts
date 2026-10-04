// Contenido de demostración para CASA NOMA. Negocio, equipo, menú, precios
// y testimonios son ficticios — ver nota en la propia página. Las imágenes
// de muestra son locales y se guardan en /public/demos/restaurant.

export const DEMO_WHATSAPP =
  "https://wa.me/573000000002?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20CASA%20NOMA";
export const DEMO_PHONE = "+57 300 000 0002";

export const navItems = [
  ["#inicio", "Inicio"],
  ["#menu", "Menú"],
  ["#historia", "Nuestra historia"],
  ["#galeria", "Galería"],
  ["#contacto", "Contacto"],
] as const;

export const footerNavItems = [
  ["#inicio", "Inicio"],
  ["#menu", "Menú"],
  ["#historia", "Historia"],
  ["#galeria", "Galería"],
  ["#contacto", "Contacto"],
] as const;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      { name: "Bruschetta Noma", description: "Pan artesanal, tomates rostizados, burrata y albahaca.", price: "$24.000" },
      { name: "Tartar de atún", description: "Atún fresco, aguacate, sésamo y cítricos.", price: "$32.000" },
      { name: "Croquetas de jamón", description: "Bechamel cremosa y jamón serrano.", price: "$22.000" },
    ],
  },
  {
    id: "fuertes",
    label: "Platos fuertes",
    items: [
      { name: "Pasta Noma", description: "Pasta artesanal, salsa de tomate, parmesano y albahaca.", price: "$38.000" },
      { name: "Risotto de hongos", description: "Arroz arborio, hongos, parmesano y aceite de trufa.", price: "$42.000" },
      { name: "Pollo al romero", description: "Pechuga marinada, vegetales rostizados y reducción de vino.", price: "$39.000" },
      { name: "Lomo a la parrilla", description: "Lomo de res, puré trufado y vegetales de temporada.", price: "$52.000" },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    items: [
      { name: "Tiramisú Noma", description: "Mascarpone, café y cacao.", price: "$18.000" },
      { name: "Tarta de limón", description: "Base crocante, crema de limón y merengue.", price: "$16.000" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { name: "Limonada de hierbabuena", description: "Limón natural, hierbabuena y hielo.", price: "$10.000" },
      { name: "Vino de la casa (copa)", description: "Selección Noma, tinto o blanco.", price: "$20.000" },
      { name: "Café Noma", description: "Café de origen colombiano.", price: "$8.000" },
    ],
  },
];

export type ExperienceStep = {
  number: string;
  title: string;
  body: string;
};

export const experienceSteps: ExperienceStep[] = [
  { number: "01", title: "Llegas", body: "Te recibimos en un espacio cálido, pensado para sentirte en casa." },
  { number: "02", title: "Te sientas", body: "Tiempo para respirar, mirar el menú y decidir sin afán." },
  { number: "03", title: "Compartimos", body: "Platos pensados para el centro de la mesa y la conversación." },
  { number: "04", title: "Disfrutas", body: "Sabores que se quedan en la memoria, no solo en el plato." },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  { quote: "La comida, el ambiente y la atención hacen que quieras volver.", name: "Cliente demo" },
  { quote: "Uno de esos lugares que descubres y rápidamente quieres recomendar.", name: "Cliente demo" },
  { quote: "Cada plato se siente pensado con cuidado, hasta el último detalle.", name: "Cliente demo" },
];

export type ReservationHours = {
  label: string;
  hours: string;
};

export const reservationHours: ReservationHours[] = [
  { label: "Lunes — Jueves", hours: "12:00 PM — 10:00 PM" },
  { label: "Viernes — Sábado", hours: "12:00 PM — 11:00 PM" },
  { label: "Domingo", hours: "12:00 PM — 8:00 PM" },
];

export type GalleryItem = {
  label: string;
  image: string;
  alt: string;
  aspect: string;
};

// Solo hay 3 fotografías únicas disponibles para esta demo. En vez de forzar
// seis tiles repitiendo imágenes (lo que generaba duplicados visibles lado a
// lado), la galería usa las 3 sin repetir ninguna.
export const galleryItems: GalleryItem[] = [
  { label: "Pasta artesanal", image: "/demos/restaurant/hero.webp", alt: "Plato de pasta servido en un restaurante", aspect: "aspect-[4/5]" },
  { label: "Plato de temporada", image: "/demos/restaurant/dish-02.webp", alt: "Pasta emplatada para compartir", aspect: "aspect-square" },
  { label: "Interior", image: "/demos/restaurant/interior.webp", alt: "Comedor de restaurante con mesas y luz natural", aspect: "aspect-[3/4]" },
];

export const featuredDish = {
  eyebrow: "De la cocina",
  name: "Pasta artesanal",
  description: "con tomates rostizados, albahaca y parmesano.",
  price: "$38.000",
};
