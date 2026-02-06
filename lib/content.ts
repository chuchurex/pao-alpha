// ============================================
// CONTENIDO CENTRALIZADO - SINGLE SOURCE OF TRUTH
// ============================================
// Este archivo centraliza todo el contenido del sitio.
// Cuando integremos Sanity, estos datos vendrán del CMS.

export type Category = "mente" | "cuerpo" | "espiritu";

export interface Article {
  title: string;
  excerpt: string;
  category: Category;
  slug: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

export interface Workshop {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  price: string;
  slug: string;
}

// ============================================
// ARTÍCULOS
// ============================================

export const articles: Article[] = [
  {
    title: "Manual de Límites y Auto-Respeto",
    excerpt:
      "El ser humano está condicionado a favorecer a los demás, sin cautelar lo que es su propio bienestar...",
    category: "cuerpo",
    slug: "manual-limites",
    date: "Enero 2026",
    readTime: "8 min",
    imageUrl: "/images/articles/limites.jpg",
    content: `
      <p>El ser humano está condicionado a favorecer a los demás, sin cautelar lo que es su propio bienestar. Esta tendencia, aunque aparentemente altruista, nos lleva a un estado de agotamiento y resentimiento gradual.</p>

      <h2>El costo de no tener límites</h2>

      <p>Cuando decimos "sí" a todo y a todos, estamos diciendo "no" a nosotros mismos. No a nuestro descanso, no a nuestras prioridades, no a nuestra salud mental y física.</p>

      <blockquote>
        "El límite no es una pared, es un puente hacia relaciones más sanas y hacia una versión más auténtica de ti mismo."
      </blockquote>

      <p>Los límites saludables nos permiten:</p>

      <ul>
        <li>Preservar nuestra energía para lo que realmente importa</li>
        <li>Construir relaciones basadas en el respeto mutuo</li>
        <li>Desarrollar una identidad sólida y autónoma</li>
        <li>Prevenir el agotamiento emocional y físico</li>
      </ul>

      <h2>Prácticas para establecer límites</h2>

      <p>Comenzar a establecer límites puede sentirse incómodo al principio, especialmente si hemos pasado años priorizando a otros sobre nosotros mismos. Sin embargo, cada pequeño paso cuenta.</p>

      <p>La clave está en la consistencia y en recordar que establecer un límite es un acto de amor propio, no de egoísmo.</p>
    `,
  },
  {
    title: "Vivir un Día a la Vez",
    excerpt:
      "Vivimos en un mundo donde las proyecciones están sustentadas en los proyectos de vida a los que estamos anclados...",
    category: "mente",
    slug: "guia-dia-a-dia",
    date: "Enero 2026",
    readTime: "6 min",
    imageUrl: "/images/articles/dia-a-dia.jpg",
    content: `
      <p>Vivimos en un mundo donde las proyecciones están sustentadas en los proyectos de vida a los que estamos anclados. Planificamos años adelante, nos preocupamos por el futuro y nos arrepentimos del pasado.</p>

      <h2>La trampa del tiempo</h2>

      <p>Nuestra mente está constantemente viajando entre el ayer y el mañana, olvidando que la única realidad tangible es el momento presente.</p>

      <blockquote>
        "El presente es el único momento donde la vida realmente sucede. Todo lo demás son proyecciones mentales."
      </blockquote>

      <p>Vivir un día a la vez no significa irresponsabilidad, sino compromiso total con el ahora. Es dar lo mejor de nosotros hoy, confiando que el mañana se construye con los ladrillos que ponemos ahora.</p>

      <h2>Ejercicios de presencia</h2>

      <p>La práctica de la atención plena nos reconecta con la simplicidad del momento presente. Cada respiración consciente es un ancla a la realidad.</p>

      <p>Comienza por observar sin juzgar. Siente, escucha, mira. Sin etiquetar, sin analizar, simplemente siendo.</p>
    `,
  },
  {
    title: "Vida Consciente - Workshop",
    excerpt:
      "No estamos viviendo 'una crisis personal', sino un cambio de ciclo colectivo que exige mayor conciencia individual...",
    category: "espiritu",
    slug: "workshop-vida-consciente",
    date: "26 Feb 2026",
    readTime: "10 min",
    imageUrl: "/images/articles/workshop.jpg",
    content: `
      <p>No estamos viviendo "una crisis personal", sino un cambio de ciclo colectivo que exige mayor conciencia individual. Los viejos paradigmas ya no sostienen lo que viene, y nuestra alma lo sabe.</p>

      <h2>El llamado de la transformación</h2>

      <p>Este no es un momento de ruptura, sino de revelación. Lo que se desarma son las estructuras que ya no sirven a nuestra evolución. Lo que emerge es una versión más auténtica de nosotros mismos.</p>

      <blockquote>
        "La consciencia no es un estado que alcanzamos, es una práctica que cultivamos cada día."
      </blockquote>

      <p>El workshop "Vida Consciente" nace de esta necesidad: crear espacios donde podamos explorar, cuestionar y reconstruir nuestra relación con nosotros mismos y con el mundo.</p>

      <h2>Temas que exploraremos</h2>

      <ul>
        <li>Reconectar con el propósito de vida</li>
        <li>Herramientas para la auto-observación</li>
        <li>Integración mente-cuerpo-espíritu</li>
        <li>Prácticas de presencia y meditación</li>
      </ul>

      <p>Te invito a ser parte de esta experiencia transformadora. Juntos crearemos un espacio seguro para el crecimiento y la expansión consciente.</p>
    `,
  },
];

// ============================================
// WORKSHOP DESTACADO
// ============================================

export const featuredWorkshop: Workshop = {
  title: "Vida Consciente: Un día a la vez",
  subtitle: "Workshop de 60 minutos",
  description:
    "No estamos viviendo una crisis personal, sino un cambio de ciclo colectivo. Eje transversal: autoconciencia, límites, ciclos y coherencia interna.",
  date: "26 Febrero 2026",
  price: "$20.000 CLP",
  slug: "workshop-vida-consciente",
};

// ============================================
// CATEGORÍAS (TRIACOMA)
// ============================================

export const categoryStyles = {
  mente: {
    bg: "bg-mente/10",
    text: "text-mente",
    border: "border-mente",
    label: "Mente",
    color: "#273DA0",
  },
  cuerpo: {
    bg: "bg-cuerpo/10",
    text: "text-cuerpo",
    border: "border-cuerpo",
    label: "Cuerpo",
    color: "#FB4C00",
  },
  espiritu: {
    bg: "bg-espiritu/10",
    text: "text-espiritu",
    border: "border-espiritu",
    label: "Espíritu",
    color: "#9B18B9",
  },
} as const;

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "mente", label: "Mente" },
  { id: "cuerpo", label: "Cuerpo" },
  { id: "espiritu", label: "Espíritu" },
] as const;

// ============================================
// HELPERS
// ============================================

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Category | "todos"): Article[] {
  if (category === "todos") return articles;
  return articles.filter((article) => article.category === category);
}

// ============================================
// REDES SOCIALES
// ============================================

export const socialLinks = {
  whatsapp: "https://wa.me/56999396166",
  youtube: "https://youtube.com/@paolarioseco",
  instagram: "https://instagram.com/paolarioseco",
  email: "paola@paolarioseco.com",
  phone: "+56999396166",
};

// ============================================
// MENSAJES PREDEFINIDOS WHATSAPP
// ============================================

export const whatsappMessages = {
  general: "Hola Paola, quiero conocer más sobre tu acompañamiento",
  workshop:
    "Hola Paola, quiero reservar mi lugar para el workshop Vida Consciente",
  mentoring: "Hola Paola, quiero agendar una sesión de mentoring",
  tarot: "Hola Paola, quiero consultar disponibilidad para tarot",
};

export function getWhatsappLink(message: keyof typeof whatsappMessages): string {
  return `${socialLinks.whatsapp}?text=${encodeURIComponent(whatsappMessages[message])}`;
}
