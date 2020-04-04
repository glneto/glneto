import { setDictionary } from "../i18n";

// THEME PREFERENCE
let storagePreferredTheme =
  typeof window !== "undefined"
    ? localStorage.getItem("preferred_theme")
    : "light";

export const getPreferredTheme = () => storagePreferredTheme || "light";
export const setPreferredTheme = (value) => {
  localStorage.setItem("preferred_theme", value);
  storagePreferredTheme = value;
};

// i18n PREFERENCE
let storagePreferredLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("preferred_language")
    : "en-US";

export const setPreferredLanguage = (value) => {
  localStorage.setItem("preferred_language", value);
  storagePreferredLanguage = value;
  setDictionary();
};

export const getPreferredLanguage = () => {
  const lang = storagePreferredLanguage || navigator.language || "en-US";
  if (lang === "en") return "en-US";
  if (lang !== "pt-BR" && lang !== "en-US") return "en-US";

  return lang;
};

// Collapsed menu preference
let storageCollapsedMenu =
  typeof window !== "undefined"
    ? localStorage.getItem("collapsed_menu") !== "false"
    : false;

export const setMenuCollapsed = (value) => {
  localStorage.setItem("collapsed_menu", value);
  storageCollapsedMenu = value;
};

export const getMenuCollapsed = () => {
  return storageCollapsedMenu !== "undefined" ? storageCollapsedMenu : false;
};
