let storageValue = typeof window !== "undefined"
  ? localStorage.getItem("preferred_theme")
  : "light";

export const getTheme = () => storageValue || "light";

export const setTheme = value => {
  localStorage.setItem("preferred_theme", value);
  storageValue = value;
};
