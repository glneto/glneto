let storageValue = localStorage.getItem("preferred_theme");

export const getTheme = () => storageValue || "light";

export const setTheme = value => {
  localStorage.setItem("preferred_theme", value);
  storageValue = value;
};
