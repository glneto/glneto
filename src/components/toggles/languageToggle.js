import Toggle from "react-toggle";
import { useContext } from "preact/hooks";
import { LanguageContext } from "../app";

const LanguageToggle = ({ onLanguageChange }) => {
  const language = useContext(LanguageContext);
  return (
    <Toggle
      class="language"
      defaultChecked={language === "en-US"}
      aria-label="Toggle language"
      icons={false}
      onChange={onLanguageChange}
    />
  );
};

export default LanguageToggle;
