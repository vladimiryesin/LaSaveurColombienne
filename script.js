const supportedLanguages = ["fr-CA", "en", "es-CO"];
const defaultLanguage = "fr-CA";

const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const openStatus = document.querySelector("[data-open-status]");
const form = document.querySelector("[data-request-form]");
const dateInput = document.querySelector("[data-date-input]");
const formStatus = document.querySelector("[data-form-status]");
const menuContainer = document.querySelector("[data-full-menu]");

const translations = {
  "fr-CA": {
    metaTitle: "La Saveur Colombienne | Restaurant colombien à Sainte-Rose",
    metaDescription: "La Saveur Colombienne sert des plats colombiens, le ramassage, la livraison, les demandes de table et le service traiteur à Sainte-Rose, Laval.",
    skip: "Passer au contenu",
    nav: {
      menu: "Menu",
      order: "Commander",
      reserve: "Réserver",
      visit: "Visiter",
      call: "Appeler"
    },
    hero: {
      eyebrow: "Cuisine colombienne réconfortante à Sainte-Rose",
      copy: "Classiques colombiens à partager, soupes généreuses, empanadas, lechona et service traiteur de la cuisine familiale Maldonado."
    },
    cta: {
      order: "Commander ramassage ou livraison",
      reserve: "Demander une table"
    },
    details: {
      address: "Adresse",
      phone: "Téléphone",
      today: "Aujourd'hui"
    },
    open: {
      closed: "Fermé",
      closedToday: "Fermé aujourd'hui",
      openNow: "Ouvert {range}",
      today: "Aujourd'hui, {range}"
    },
    days: {
      sun: "Dimanche",
      mon: "Lundi",
      tue: "Mardi",
      wed: "Mercredi",
      thu: "Jeudi",
      fri: "Vendredi",
      sat: "Samedi"
    },
    story: {
      kicker: "De la Colombie à Laval",
      title: "Une cuisine colombienne généreuse dès la première bouchée.",
      copy: "Venez pour les empanadas dorées, les soupes réconfortantes, la lechona, la cazuela, les plantains et les plats familiaux à partager sur place ou à emporter.",
      fact1: "Spécialités colombiennes",
      fact2: "Ramassage et livraison",
      fact3: "Service traiteur"
    },
    menu: {
      kicker: "Menu complet",
      title: "Tout le menu actuel du restaurant.",
      copy: "Prix et plats récupérés du système de commande officiel de La Saveur Colombienne.",
      fullLink: "Commander en livraison",
      all: "Tout",
      note: "Les prix peuvent changer dans le système de commande.",
      item: "{count} plat",
      items: "{count} plats"
    },
    categories: {
      soups: "Soupes",
      meats: "Viandes",
      specialties: "Spécialités",
      seafood: "Poissons et fruits de mer",
      kids: "Menu enfant"
    },
    order: {
      kicker: "Commande et services",
      title: "Commandez, réservez ou préparez la prochaine fête.",
      copy: "Choisissez le ramassage ou la livraison, appelez le restaurant ou envoyez les détails d'une table, d'un plat familial ou d'un repas traiteur.",
      card1Title: "Ramassage et livraison",
      card1Copy: "Choisissez DoorDash, SkipTheDishes ou Uber Eats pour lancer une commande en livraison.",
      card1Link: "Choisir une plateforme",
      card2Title: "Demandes de table",
      card2Copy: "Partagez le nombre de personnes, la date, l'heure et vos notes afin que l'équipe confirme la disponibilité.",
      card2Link: "Demander une table",
      card3Title: "Service traiteur",
      card3Copy: "Demandez des plateaux et repas colombiens pour anniversaires, lunchs de bureau et événements familiaux.",
      card3Link: "Planifier un traiteur"
    },
    delivery: {
      kicker: "Livraison",
      title: "Commander avec votre plateforme préférée.",
      copy: "Les disponibilités, frais et délais sont gérés par chaque service de livraison."
    },
    reserve: {
      kicker: "Réserver ou demander le traiteur",
      title: "Une demande simple avant confirmation.",
      copy: "Envoyez les détails que les clients donnent normalement par téléphone, puis confirmez directement avec le restaurant.",
      hoursTitle: "Heures"
    },
    form: {
      name: "Nom",
      phone: "Téléphone",
      date: "Date",
      time: "Heure",
      guests: "Personnes",
      type: "Type de demande",
      typeTable: "Table",
      typeCatering: "Traiteur",
      typeLargeOrder: "Grande commande à ramasser",
      notes: "Notes",
      notesPlaceholder: "Occasion, allergies, détails du plateau familial ou langue préférée",
      submit: "Préparer la demande",
      missing: "Veuillez remplir les champs requis.",
      statusPrefix: "Demande de {type} pour {guests} personne(s) le {date} à {time}. ",
      statusCall: "Appelez ",
      statusSuffix: " pour confirmer avec le restaurant."
    },
    gallery: {
      kicker: "Photos",
      title: "Les plats racontent l'histoire.",
      link: "Plus de photos clients"
    },
    location: {
      kicker: "Visiter",
      title: "Adresse de Sainte-Rose.",
      directions: "Itinéraire"
    },
    footer: {
      copy: "Restaurant colombien et traiteur à Sainte-Rose.",
      order: "Commander en livraison",
      google: "Profil Google",
      call: "Appeler le restaurant",
      note: "Refonte conceptuelle."
    }
  },
  en: {
    metaTitle: "La Saveur Colombienne | Colombian Restaurant in Sainte-Rose",
    metaDescription: "La Saveur Colombienne serves Colombian comfort food, pickup, delivery, table requests, and catering in Sainte-Rose, Laval.",
    skip: "Skip to content",
    nav: {
      menu: "Menu",
      order: "Order",
      reserve: "Reserve",
      visit: "Visit",
      call: "Call"
    },
    hero: {
      eyebrow: "Colombian comfort food in Sainte-Rose",
      copy: "Family-style Colombian classics, hearty soups, empanadas, lechona, and catering from the Maldonado family kitchen."
    },
    cta: {
      order: "Order pickup or delivery",
      reserve: "Request a table"
    },
    details: {
      address: "Address",
      phone: "Phone",
      today: "Today"
    },
    open: {
      closed: "Closed",
      closedToday: "Closed today",
      openNow: "Open {range}",
      today: "Today, {range}"
    },
    days: {
      sun: "Sunday",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday"
    },
    story: {
      kicker: "From Colombia to Laval",
      title: "Colombian cooking that feels generous from the first bite.",
      copy: "Come for golden empanadas, warming soups, lechona, cazuela, plantains, and family-style trays made for sharing at the table or taking home.",
      fact1: "Colombian specialties",
      fact2: "Pickup and delivery",
      fact3: "Catering friendly"
    },
    menu: {
      kicker: "Full menu",
      title: "The restaurant's current full menu.",
      copy: "Dishes and prices scraped from La Saveur Colombienne's official ordering system.",
      fullLink: "Order delivery",
      all: "All",
      note: "Prices may change in the ordering system.",
      item: "{count} dish",
      items: "{count} dishes"
    },
    categories: {
      soups: "Soups",
      meats: "Meats",
      specialties: "House specialties",
      seafood: "Fish and seafood",
      kids: "Kids menu"
    },
    order: {
      kicker: "Ordering and services",
      title: "Order, reserve, or plan the next celebration.",
      copy: "Choose pickup or delivery for today, call the restaurant, or send details for a table, family tray, or catered meal.",
      card1Title: "Pickup and delivery",
      card1Copy: "Choose DoorDash, SkipTheDishes, or Uber Eats to start a delivery order.",
      card1Link: "Choose a platform",
      card2Title: "Table requests",
      card2Copy: "Share your party size, date, time, and notes so the team can confirm availability.",
      card2Link: "Request a table",
      card3Title: "Catering",
      card3Copy: "Ask about trays and larger Colombian meals for birthdays, office lunches, and family events.",
      card3Link: "Plan catering"
    },
    delivery: {
      kicker: "Delivery",
      title: "Order with your preferred platform.",
      copy: "Availability, fees, and delivery times are managed by each delivery service."
    },
    reserve: {
      kicker: "Reserve or ask about catering",
      title: "A practical guest request flow.",
      copy: "Send the details guests usually share by phone, then confirm the request directly with the restaurant.",
      hoursTitle: "Hours"
    },
    form: {
      name: "Name",
      phone: "Phone",
      date: "Date",
      time: "Time",
      guests: "Guests",
      type: "Request type",
      typeTable: "Table",
      typeCatering: "Catering",
      typeLargeOrder: "Large pickup order",
      notes: "Notes",
      notesPlaceholder: "Occasion, allergies, family tray details, or preferred language",
      submit: "Prepare request",
      missing: "Please complete the required fields.",
      statusPrefix: "{type} request for {guests} on {date} at {time}. ",
      statusCall: "Call ",
      statusSuffix: " to confirm with the restaurant."
    },
    gallery: {
      kicker: "Photos",
      title: "The food tells the story.",
      link: "More guest photos"
    },
    location: {
      kicker: "Visit",
      title: "Sainte-Rose location.",
      directions: "Directions"
    },
    footer: {
      copy: "Colombian restaurant and catering in Sainte-Rose.",
      order: "Order delivery",
      google: "Google profile",
      call: "Call restaurant",
      note: "Concept redesign."
    }
  },
  "es-CO": {
    metaTitle: "La Saveur Colombienne | Restaurante colombiano en Sainte-Rose",
    metaDescription: "La Saveur Colombienne ofrece comida colombiana, recogida, domicilio, reservas y catering en Sainte-Rose, Laval.",
    skip: "Saltar al contenido",
    nav: {
      menu: "Menú",
      order: "Pedir",
      reserve: "Reservar",
      visit: "Visitar",
      call: "Llamar"
    },
    hero: {
      eyebrow: "Sabor colombiano en Sainte-Rose",
      copy: "Clásicos colombianos para compartir, sopas bien generosas, empanadas, lechona y catering desde la cocina familiar Maldonado."
    },
    cta: {
      order: "Pedir para recoger o domicilio",
      reserve: "Pedir una mesa"
    },
    details: {
      address: "Dirección",
      phone: "Teléfono",
      today: "Hoy"
    },
    open: {
      closed: "Cerrado",
      closedToday: "Cerrado hoy",
      openNow: "Abierto {range}",
      today: "Hoy, {range}"
    },
    days: {
      sun: "Domingo",
      mon: "Lunes",
      tue: "Martes",
      wed: "Miércoles",
      thu: "Jueves",
      fri: "Viernes",
      sat: "Sábado"
    },
    story: {
      kicker: "De Colombia a Laval",
      title: "Cocina colombiana generosa desde el primer bocado.",
      copy: "Ven por empanadas doraditas, sopas que reconfortan, lechona, cazuela, plátanos y platos familiares para compartir en mesa o llevar.",
      fact1: "Especialidades colombianas",
      fact2: "Recogida y domicilio",
      fact3: "Catering para eventos"
    },
    menu: {
      kicker: "Menú completo",
      title: "El menú actual del restaurante.",
      copy: "Platos y precios tomados del sistema oficial de pedidos de La Saveur Colombienne.",
      fullLink: "Pedir domicilio",
      all: "Todo",
      note: "Los precios pueden cambiar en el sistema de pedidos.",
      item: "{count} plato",
      items: "{count} platos"
    },
    categories: {
      soups: "Sopas",
      meats: "Carnes",
      specialties: "Especialidades de la casa",
      seafood: "Pescados y mariscos",
      kids: "Menú infantil"
    },
    order: {
      kicker: "Pedidos y servicios",
      title: "Pide, reserva o planea la próxima celebración.",
      copy: "Elige recogida o domicilio, llama al restaurante o envía detalles para una mesa, bandeja familiar o comida para evento.",
      card1Title: "Recogida y domicilio",
      card1Copy: "Escoge DoorDash, SkipTheDishes o Uber Eats para empezar un pedido a domicilio.",
      card1Link: "Escoger plataforma",
      card2Title: "Solicitudes de mesa",
      card2Copy: "Comparte cuántas personas vienen, fecha, hora y notas para que el equipo confirme disponibilidad.",
      card2Link: "Pedir una mesa",
      card3Title: "Catering",
      card3Copy: "Pregunta por bandejas y comidas colombianas grandes para cumpleaños, oficinas y reuniones familiares.",
      card3Link: "Planear catering"
    },
    delivery: {
      kicker: "Domicilio",
      title: "Pide desde tu plataforma preferida.",
      copy: "La disponibilidad, tarifas y tiempos dependen de cada servicio de entrega."
    },
    reserve: {
      kicker: "Reservar o preguntar por catering",
      title: "Una solicitud sencilla antes de confirmar.",
      copy: "Envía los detalles que normalmente se dan por teléfono y confirma directamente con el restaurante.",
      hoursTitle: "Horario"
    },
    form: {
      name: "Nombre",
      phone: "Teléfono",
      date: "Fecha",
      time: "Hora",
      guests: "Personas",
      type: "Tipo de solicitud",
      typeTable: "Mesa",
      typeCatering: "Catering",
      typeLargeOrder: "Pedido grande para recoger",
      notes: "Notas",
      notesPlaceholder: "Ocasión, alergias, detalles de bandeja familiar o idioma preferido",
      submit: "Preparar solicitud",
      missing: "Completa los campos obligatorios.",
      statusPrefix: "Solicitud de {type} para {guests} persona(s) el {date} a las {time}. ",
      statusCall: "Llama al ",
      statusSuffix: " para confirmar con el restaurante."
    },
    gallery: {
      kicker: "Fotos",
      title: "La comida cuenta la historia.",
      link: "Más fotos de clientes"
    },
    location: {
      kicker: "Visitar",
      title: "Sede de Sainte-Rose.",
      directions: "Cómo llegar"
    },
    footer: {
      copy: "Restaurante colombiano y catering en Sainte-Rose.",
      order: "Pedir domicilio",
      google: "Perfil de Google",
      call: "Llamar al restaurante",
      note: "Rediseño conceptual."
    }
  }
};

const menuCategories = [
  {
    id: "soups",
    items: [
      {
        name: "AJIACO SANTAFEREÑO",
        price: "$29.50",
        description: {
          "fr-CA": "Soupe consistante aux trois sortes de pommes de terre et poulet, avec guasca, servie avec riz, avocat et cuisse de poulet.",
          en: "Hearty chicken and three-potato soup with guasca, served with rice, avocado, and chicken leg.",
          "es-CO": "Servido con arroz, aguacate y pierna pernil de pollo."
        }
      }
    ]
  },
  {
    id: "meats",
    items: [
      {
        name: "SOBREBARRIGA EN SALSA",
        price: "$37.13",
        description: {
          "fr-CA": "Bavette de boeuf en guiso criollo, servie avec pomme de terre, yuca, riz blanc et salade.",
          en: "Flank steak in criollo sauce, served with potato, yuca, white rice, and salad.",
          "es-CO": "Servida con papa, yuca, arroz y ensalada."
        }
      },
      {
        name: "LENGUA EN SALSA",
        price: "$29.25",
        description: {
          "fr-CA": "Langue de boeuf en guiso criollo avec pois et carottes, servie avec pomme de terre, yuca et riz blanc.",
          en: "Beef tongue in criollo sauce with peas and carrots, served with potato, yuca, and white rice.",
          "es-CO": "Servida con papa, yuca, arroz y ensalada."
        }
      },
      {
        name: "CHULETA CALEÑA",
        price: "$32.40",
        description: {
          "fr-CA": "Côtelette de porc panée, servie avec patacon, frites, riz blanc et salade.",
          en: "Breaded pork cutlet served with flattened green plantain, fries, white rice, and salad.",
          "es-CO": "Servida con patacón, papa frita, arroz y ensalada."
        }
      },
      {
        name: "1/2 CHULETA CALEÑA",
        price: "$23.48",
        description: {
          "fr-CA": "Demi-portion de côtelette de porc panée avec patacon, frites, riz blanc et salade.",
          en: "Half portion of breaded pork cutlet with flattened green plantain, fries, white rice, and salad.",
          "es-CO": "Media porción servida con patacón, papa frita, arroz y ensalada."
        }
      }
    ]
  },
  {
    id: "specialties",
    items: [
      {
        name: "LECHONA, CHICHARRON Y AREPA",
        price: "$18.33",
        description: {
          "fr-CA": "Porc farci au riz, servi avec couenne croustillante et arepa.",
          en: "Rice-stuffed pork served with crispy pork skin and arepa.",
          "es-CO": "Lechona de cerdo rellena de arroz, servida con cuerito y arepa."
        }
      },
      {
        name: "CAZUELA DE FRIJOLES",
        price: "$28.73",
        description: {
          "fr-CA": "Ragoût de haricots avec riz blanc, arepa, chorizo, chicharron, morcilla, plantain, avocat et oeuf.",
          en: "Bean stew with white rice, arepa, chorizo, pork belly, morcilla, plantain, avocado, and egg.",
          "es-CO": "Con arroz, arepa, chorizo, chicharrón, morcilla, plátano, aguacate y huevo."
        }
      },
      {
        name: "BISTEC A CABALLO CON AREPA, HUEVO Y PLATANO",
        price: "$31.88",
        description: {
          "fr-CA": "Steak à la sauce colombienne avec plantain sucré, oeufs, arepa, chocolat chaud et fromage.",
          en: "Steak in Colombian sauce with sweet fried plantain, eggs, arepa, hot chocolate, and cheese.",
          "es-CO": "Bistec en salsa colombiana con arepa, huevo, plátano, chocolate caliente y queso."
        }
      },
      {
        name: "POUTINE COLOMBIENNE AVEC CHORIZO",
        price: "$23.48",
        description: {
          "fr-CA": "Poutine au chorizo, inspiration colombienne.",
          en: "Chorizo poutine with Colombian-inspired flavors.",
          "es-CO": "Poutine con chorizo y sabor colombiano."
        }
      },
      {
        name: "CEVICHE DE CHICHARRON",
        price: "$25.58",
        description: {
          "fr-CA": "Ceviche de flanc de porc avec oignons rouges et maïs, inspiration colombienne.",
          en: "Pork belly ceviche with red onions and corn, inspired by Colombian flavors.",
          "es-CO": "Ceviche de chicharrón con cebolla roja y maíz, con sabor colombiano."
        }
      },
      {
        name: "PICADA",
        price: "$27.15",
        description: {
          "fr-CA": "Papa criolla, plantains, chorizo, porc, morcilla, empanadas, arepas et sauce aji.",
          en: "Papa criolla, plantains, chorizo, pork, morcilla, empanadas, arepas, and aji sauce.",
          "es-CO": "Papa criolla, chorizo, morcilla, cerdo, plátano, empanadas, arepas y ají."
        }
      },
      {
        name: "CHORI-AREPA",
        price: "$23.48",
        description: {
          "fr-CA": "Arepa au chorizo, pain de maïs et frites.",
          en: "Chorizo arepa with corn arepa bread and fries.",
          "es-CO": "Chori-arepa con pan de maíz y papas fritas."
        }
      },
      {
        name: "CARNE EN BISTEC",
        price: "$36.60",
        description: {
          "fr-CA": "",
          en: "",
          "es-CO": ""
        }
      }
    ]
  },
  {
    id: "seafood",
    items: [
      {
        name: "PESCADO FRITO",
        price: "$33.98",
        description: {
          "fr-CA": "Poisson frit servi avec frites, patacon, yuca et salade.",
          en: "Fried fish served with fries, flattened green plantain, yuca, and salad.",
          "es-CO": "Acompañado de papa frita, patacón, yuca y ensalada."
        }
      },
      {
        name: "CAZUELA DE MARISCOS",
        price: "$34.50",
        description: {
          "fr-CA": "Ragoût de fruits de mer au lait de coco avec crevettes, calamars, crabe et moules, servi avec riz blanc.",
          en: "Seafood stew in coconut milk with shrimp, calamari, crab, and mussels, served with white rice.",
          "es-CO": "Crema de coco con camarón, calamar, cangrejo, ostras y almejas; servida con arroz y patacón."
        }
      },
      {
        name: "PAELLA VALENCIANA, ARROZ Y MARISCOS",
        price: "$34.50",
        description: {
          "fr-CA": "Paella aux fruits de mer.",
          en: "Seafood paella.",
          "es-CO": "Paella valenciana con arroz y mariscos."
        }
      }
    ]
  },
  {
    id: "kids",
    items: [
      {
        name: "1- BANDEJA FRIJOL, ARROZ Y CHORIZO",
        price: "$17.18",
        description: {
          "fr-CA": "",
          en: "",
          "es-CO": ""
        }
      },
      {
        name: "2- MINI SOPA AJIACO - ARROZ & MAZORCA",
        price: "$17.18",
        description: {
          "fr-CA": "",
          en: "",
          "es-CO": ""
        }
      },
      {
        name: "3- BANDEJA POLLO FRITO, ARROZ Y PAPA FRITA",
        price: "$17.18",
        description: {
          "fr-CA": "",
          en: "",
          "es-CO": ""
        }
      }
    ]
  }
];

const hours = {
  0: ["10:00", "18:00"],
  3: ["10:00", "19:00"],
  4: ["10:00", "19:00"],
  5: ["10:00", "20:00"],
  6: ["10:00", "20:00"]
};

let currentLanguage = getInitialLanguage();
let currentMenuFilter = "all";

if (window.lucide) {
  window.lucide.createIcons();
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const pad = (value) => String(value).padStart(2, "0");

if (dateInput) {
  const today = new Date();
  dateInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
}

function getInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (supportedLanguages.includes(requested)) return requested;

  const stored = localStorage.getItem("lsc_language");
  return supportedLanguages.includes(stored) ? stored : defaultLanguage;
}

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function t(key, values = {}) {
  const value = getNestedValue(translations[currentLanguage], key) ?? getNestedValue(translations[defaultLanguage], key) ?? key;
  return Object.entries(values).reduce((text, [name, replacement]) => text.replace(`{${name}}`, replacement), value);
}

function minutesFromTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);

  if (currentLanguage === "fr-CA") {
    return `${hour} h${minute ? ` ${pad(minute)}` : ""}`;
  }

  const suffix = hour >= 12 ? (currentLanguage === "es-CO" ? "p. m." : "PM") : (currentLanguage === "es-CO" ? "a. m." : "AM");
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${pad(minute)} ${suffix}`;
}

function formatRange(range) {
  if (currentLanguage === "fr-CA") {
    const startHour = Number(range[0].split(":")[0]);
    const endHour = Number(range[1].split(":")[0]);
    return `${startHour}-${endHour} h`;
  }

  return `${formatTime(range[0])} - ${formatTime(range[1])}`;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString(currentLanguage, { year: "numeric", month: "long", day: "numeric" });
}

function updateOpenStatus() {
  if (!openStatus) return;

  const now = new Date();
  const todaysHours = hours[now.getDay()];

  if (!todaysHours) {
    openStatus.textContent = t("open.closedToday");
    return;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const opens = minutesFromTime(todaysHours[0]);
  const closes = minutesFromTime(todaysHours[1]);
  const range = formatRange(todaysHours);
  const statusKey = currentMinutes >= opens && currentMinutes < closes ? "open.openNow" : "open.today";
  openStatus.textContent = t(statusKey, { range });
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("metaTitle");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-menu-filter]").forEach((button) => {
    const id = button.dataset.menuFilter;
    button.textContent = id === "all" ? t("menu.all") : t(`categories.${id}`);
  });

  document.querySelector(".language-switcher")?.setAttribute("aria-label", currentLanguage === "fr-CA" ? "Choisir la langue" : currentLanguage === "es-CO" ? "Elegir idioma" : "Choose language");
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderMenu() {
  if (!menuContainer) return;

  const categories = currentMenuFilter === "all"
    ? menuCategories
    : menuCategories.filter((category) => category.id === currentMenuFilter);

  menuContainer.replaceChildren(...categories.map((category) => {
    const panel = document.createElement("article");
    panel.className = "menu-category";

    const headerRow = document.createElement("div");
    headerRow.className = "menu-category-header";

    const title = document.createElement("h3");
    title.textContent = t(`categories.${category.id}`);

    const count = document.createElement("span");
    count.textContent = t(category.items.length === 1 ? "menu.item" : "menu.items", { count: category.items.length });

    headerRow.append(title, count);

    const list = document.createElement("ul");
    list.className = "full-menu-items";

    category.items.forEach((item) => {
      const entry = document.createElement("li");
      entry.className = "full-menu-item";

      const entryHeader = document.createElement("div");
      entryHeader.className = "full-menu-item-heading";

      const name = document.createElement("h4");
      name.textContent = item.name;

      const price = document.createElement("strong");
      price.textContent = item.price;

      entryHeader.append(name, price);
      entry.append(entryHeader);

      const description = item.description[currentLanguage] || item.description[defaultLanguage];
      if (description) {
        const text = document.createElement("p");
        text.textContent = description;
        entry.append(text);
      }

      list.append(entry);
    });

    panel.append(headerRow, list);
    return panel;
  }));
}

function setLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
  localStorage.setItem("lsc_language", currentLanguage);
  applyTranslations();
  updateLanguageButtons();
  updateOpenStatus();
  renderMenu();
}

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-menu-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    currentMenuFilter = button.dataset.menuFilter;

    document.querySelectorAll("[data-menu-filter]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderMenu();
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name")?.toString().trim();
  const phone = data.get("phone")?.toString().trim();
  const date = data.get("date");
  const time = data.get("time");
  const guests = data.get("guests");
  const type = data.get("type");

  if (!name || !phone || !date || !time || !guests) {
    formStatus.textContent = t("form.missing");
    return;
  }

  const typeLabel = t(`form.type${type.charAt(0).toUpperCase()}${type.slice(1)}`);
  const summary = t("form.statusPrefix", {
    type: typeLabel.toLowerCase(),
    guests,
    date: formatDate(date),
    time
  });

  const phoneLink = document.createElement("a");
  phoneLink.href = "tel:+14382562291";
  phoneLink.textContent = "(438) 256-2291";

  formStatus.replaceChildren(
    document.createTextNode(summary + t("form.statusCall")),
    phoneLink,
    document.createTextNode(t("form.statusSuffix"))
  );
  form.dataset.lastRequest = summary;
});

setLanguage(currentLanguage);
