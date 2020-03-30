let storageValue = typeof window !== "undefined"
  ? localStorage.getItem("preferred_language")
  : "en-US";

export const getLanguage = () => storageValue || navigator.language || "en-US";

let dictionary = require(`./${getLanguage()}.json`);

const setDictionary = () => {
  dictionary = require(`./${getLanguage()}.json`);
};

export const setLanguage = value => {
  localStorage.setItem("preferred_language", value);
  storageValue = value;
  setDictionary();
};

export default key => {
  return dictionary[key] || key;
};
