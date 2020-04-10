import Toggle from "react-toggle";
import { ThemeContext } from "../app";
import { useContext } from "preact/hooks";
import NightIcon from "../../assets/night-icon.png";
import SunIcon from "../../assets/sun-icon.png";

const ThemeToggle = ({ onThemeChange, toggleIconStyle }) => {
  const theme = useContext(ThemeContext);
  return (
    <Toggle
      class="theme"
      defaultChecked={theme === "light"}
      aria-label="Toggle theme"
      icons={{
        checked: (
          <img class={toggleIconStyle} src={SunIcon} alt="Sun (Light Theme)" />
        ),
        unchecked: (
          <img
            class={toggleIconStyle}
            src={NightIcon}
            alt="Moon (Dark Theme)"
          />
        ),
      }}
      onChange={onThemeChange}
    />
  );
};

export default ThemeToggle;
