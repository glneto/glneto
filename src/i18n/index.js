import { getPreferredLanguage } from "../storage";

let dictionary = require(`./dictionary/${getPreferredLanguage()}.json`);
export const setDictionary = () => {
  dictionary = require(`./dictionary/${getPreferredLanguage()}.json`);
};

export default key => {
  return dictionary[key] || key;
};
