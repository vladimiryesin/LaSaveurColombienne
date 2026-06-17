const PATHS = {
  site: "data/site.json",
  menu: "data/menu.json",
  locale: (code) => `locales/${code}.json`
};

const state = {
  config: null,
  menu: null,
  fallbackLocale: null,
  locale: null,
  localeCode: null,
  menuFilter: "all",
  mobileMenuOpen: false,
  initialHashHandled: false,
  localeCache: new Map()
};

const dom = {
  header: document.querySelector("[data-header]"),
  year: document.querySelector("[data-year]"),
  openStatus: document.querySelector("[data-open-status]"),
  form: document.querySelector("[data-request-form]"),
  dateInput: document.querySelector("[data-date-input]"),
  formStatus: document.querySelector("[data-form-status]"),
  languageSwitcher: document.querySelector("[data-language-switcher]"),
  mobileLanguageSwitcher: document.querySelector("[data-mobile-language-switcher]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  menuToggleLabel: document.querySelector("[data-menu-toggle-label]"),
  mobileMenu: document.querySelector("[data-mobile-menu]"),
  menuFilters: document.querySelector("[data-menu-filters]"),
  menuContainer: document.querySelector("[data-full-menu]"),
  deliveryPlatforms: document.querySelector("[data-delivery-platforms]")
};

if (dom.year) {
  dom.year.textContent = new Date().getFullYear();
}

if (dom.dateInput) {
  const today = new Date();
  dom.dateInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
}

init();

async function init() {
  try {
    [state.config, state.menu] = await Promise.all([
      loadJSON(PATHS.site),
      loadJSON(PATHS.menu)
    ]);

    state.fallbackLocale = await loadLocale(state.config.defaultLocale);
    await setLocale(getInitialLocale(), { persist: false });
    bindEvents();
  } catch (error) {
    console.error("Could not initialize localized site", error);
    document.body.classList.add("is-i18n-error");
  }
}

async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Unable to load ${path}: ${response.status}`);
  }
  return response.json();
}

async function loadLocale(code) {
  if (state.localeCache.has(code)) {
    return state.localeCache.get(code);
  }

  const locale = await loadJSON(PATHS.locale(code));
  state.localeCache.set(code, locale);
  return locale;
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    dom.header?.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  dom.menuToggle?.addEventListener("click", () => {
    setMobileMenuOpen(!state.mobileMenuOpen);
  });

  dom.mobileMenu?.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a, button")) {
      setMobileMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 701px)").matches) {
      setMobileMenuOpen(false);
    }
  });

  dom.form?.addEventListener("submit", handleRequestSubmit);
}

function getInitialLocale() {
  const available = getAvailableLocales();
  const requested = new URLSearchParams(window.location.search).get("lang");
  const stored = localStorage.getItem("lsc_language");
  const browser = navigator.language;
  const browserBase = browser?.split("-")[0];

  if (available.includes(requested)) return requested;
  if (available.includes(stored)) return stored;
  if (available.includes(browser)) return browser;

  const matched = available.find((code) => code.split("-")[0] === browserBase);
  return matched || state.config.defaultLocale;
}

function getAvailableLocales() {
  return state.config.locales.map((locale) => locale.code);
}

async function setLocale(code, options = {}) {
  const available = getAvailableLocales();
  state.localeCode = available.includes(code) ? code : state.config.defaultLocale;
  state.locale = await loadLocale(state.localeCode);

  if (options.persist !== false) {
    localStorage.setItem("lsc_language", state.localeCode);
  }

  renderPage();
}

function renderPage() {
  applyTranslations();
  renderLanguageSwitcher();
  renderMenuFilters();
  renderMenu();
  renderDeliveryPlatforms();
  updateOpenStatus();
  scrollToInitialHash();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function applyTranslations() {
  document.documentElement.lang = state.localeCode;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  updateMenuToggleLabel();
}

function renderLanguageSwitcher() {
  [dom.languageSwitcher, dom.mobileLanguageSwitcher]
    .filter(Boolean)
    .forEach(renderLanguageButtons);
}

function renderLanguageButtons(container) {
  container.setAttribute("aria-label", t("language.label"));
  container.replaceChildren(...state.config.locales.map((locale) => {
    const button = document.createElement("button");
    const isActive = locale.code === state.localeCode;

    button.type = "button";
    button.textContent = locale.label;
    button.dataset.lang = locale.code;
    button.className = isActive ? "is-active" : "";
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("title", locale.name);
    button.setAttribute("aria-label", isActive ? `${locale.name} - ${t("language.active")}` : locale.name);
    button.addEventListener("click", () => setLocale(locale.code));

    return button;
  }));
}

function setMobileMenuOpen(isOpen) {
  state.mobileMenuOpen = Boolean(isOpen);

  if (!dom.menuToggle || !dom.mobileMenu) return;

  dom.header?.classList.toggle("is-menu-open", state.mobileMenuOpen);
  dom.menuToggle.setAttribute("aria-expanded", String(state.mobileMenuOpen));
  dom.mobileMenu.hidden = !state.mobileMenuOpen;

  const icon = dom.menuToggle.querySelector("[data-lucide]");
  icon?.setAttribute("data-lucide", state.mobileMenuOpen ? "x" : "menu");
  updateMenuToggleLabel();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateMenuToggleLabel() {
  if (!dom.menuToggle) return;

  const label = t(state.mobileMenuOpen ? "nav.closeMenu" : "nav.openMenu");
  dom.menuToggle.setAttribute("aria-label", label);

  if (dom.menuToggleLabel) {
    dom.menuToggleLabel.textContent = label;
  }
}

function renderMenuFilters() {
  if (!dom.menuFilters) return;

  const filters = [
    { id: "all", label: t("menu.all") },
    ...state.menu.categories.map((category) => ({
      id: category.id,
      label: t(`categories.${category.id}`)
    }))
  ];

  dom.menuFilters.replaceChildren(...filters.map((filter) => {
    const button = document.createElement("button");
    const isActive = filter.id === state.menuFilter;

    button.type = "button";
    button.textContent = filter.label;
    button.dataset.menuFilter = filter.id;
    button.className = isActive ? "is-active" : "";
    button.setAttribute("aria-pressed", String(isActive));
    button.addEventListener("click", () => {
      state.menuFilter = filter.id;
      renderMenuFilters();
      renderMenu();
    });

    return button;
  }));
}

function renderMenu() {
  if (!dom.menuContainer) return;

  const categories = state.menuFilter === "all"
    ? state.menu.categories
    : state.menu.categories.filter((category) => category.id === state.menuFilter);

  dom.menuContainer.replaceChildren(...categories.map((category) => {
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
      list.append(renderMenuItem(item));
    });

    panel.append(headerRow, list);
    return panel;
  }));
}

function renderMenuItem(item) {
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

  const description = item.description?.[state.localeCode] || item.description?.[state.config.defaultLocale];
  if (description) {
    const text = document.createElement("p");
    text.textContent = description;
    entry.append(text);
  }

  return entry;
}

function renderDeliveryPlatforms() {
  if (!dom.deliveryPlatforms) return;

  dom.deliveryPlatforms.replaceChildren(...state.config.deliveryPlatforms.map((platform) => {
    const link = document.createElement("a");
    link.className = `delivery-button ${platform.id}`;
    link.href = platform.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const logo = document.createElement("img");
    logo.src = platform.logo;
    logo.alt = "";
    logo.width = platform.showText ? 30 : 96;
    logo.height = 30;

    const label = document.createElement("span");
    label.textContent = platform.name;
    if (!platform.showText) {
      label.className = "sr-only";
    }

    link.append(logo, label);
    return link;
  }));
}

function handleRequestSubmit(event) {
  event.preventDefault();

  const data = new FormData(dom.form);
  const required = ["name", "phone", "date", "time", "guests"];
  const missingRequired = required.some((field) => !data.get(field)?.toString().trim());

  if (missingRequired) {
    dom.formStatus.textContent = t("form.missing");
    return;
  }

  const type = data.get("type");
  const typeLabel = t(`form.types.${type}`).toLowerCase();
  const summary = t("form.statusPrefix", {
    type: typeLabel,
    guests: data.get("guests"),
    date: formatDate(data.get("date")),
    time: data.get("time")
  });

  const phoneLink = document.createElement("a");
  phoneLink.href = "tel:+14382562291";
  phoneLink.textContent = "(438) 256-2291";

  dom.formStatus.replaceChildren(
    document.createTextNode(summary + t("form.statusCall")),
    phoneLink,
    document.createTextNode(t("form.statusSuffix"))
  );
  dom.form.dataset.lastRequest = summary;
}

function updateOpenStatus() {
  if (!dom.openStatus) return;

  const now = new Date();
  const todaysHours = state.config.hours[String(now.getDay())];

  if (!todaysHours) {
    dom.openStatus.textContent = t("open.closedToday");
    return;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const opens = minutesFromTime(todaysHours[0]);
  const closes = minutesFromTime(todaysHours[1]);
  const statusKey = currentMinutes >= opens && currentMinutes < closes ? "open.openNow" : "open.today";

  dom.openStatus.textContent = t(statusKey, { range: formatRange(todaysHours) });
}

function t(key, values = {}) {
  const value = getNestedValue(state.locale, key)
    ?? getNestedValue(state.fallbackLocale, key)
    ?? key;

  return Object.entries(values).reduce((text, [name, replacement]) => (
    text.replaceAll(`{${name}}`, replacement)
  ), value);
}

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function minutesFromTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);

  if (state.localeCode === "fr-CA") {
    return `${hour} h${minute ? ` ${pad(minute)}` : ""}`;
  }

  const suffix = hour >= 12
    ? (state.localeCode === "es-CO" ? "p. m." : "PM")
    : (state.localeCode === "es-CO" ? "a. m." : "AM");
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${pad(minute)} ${suffix}`;
}

function formatRange(range) {
  if (state.localeCode === "fr-CA") {
    const startHour = Number(range[0].split(":")[0]);
    const endHour = Number(range[1].split(":")[0]);
    return `${startHour}-${endHour} h`;
  }

  return `${formatTime(range[0])} - ${formatTime(range[1])}`;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString(state.localeCode, { year: "numeric", month: "long", day: "numeric" });
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function scrollToInitialHash() {
  if (state.initialHashHandled || !window.location.hash) return;

  state.initialHashHandled = true;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    });
  });
}
