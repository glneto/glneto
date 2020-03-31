let storageValue = typeof window !== "undefined"
  ? localStorage.getItem("preferred_language")
  : "en-US";

export const getLanguage = () => {
  const lang = storageValue || navigator.language || "en-US";
  if (lang === 'en') return 'en-US';
  if (lang !== 'pt-BR' && lang !== 'en-US') return 'en-US'

  return lang;
}

let dictionary = require(`./dictionary/${getLanguage()}.json`);

const setDictionary = () => {
  dictionary = require(`./dictionary/${getLanguage()}.json`);
};

export const setLanguage = value => {
  localStorage.setItem("preferred_language", value);
  storageValue = value;
  setDictionary();
};

export default key => {
  return dictionary[key] || key;
};
