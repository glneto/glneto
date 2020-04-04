import { h } from "preact";
import { Link } from "preact-router/match";
import cx from "classnames";
import style from "./style";
import Profile from "../../assets/profile.jpeg";
import NightIcon from "../../assets/night-icon.png";
import SunIcon from "../../assets/sun-icon.png";
import Toggle from "react-toggle";
import i18n from "../../i18n";
import { ThemeContext, LanguageContext, BreakpointContext } from "../app";
import { useContext, useState } from "preact/hooks";

import GithubIconLight from "../../assets/GitHub-Mark-Light-64px.png";
import GithubIcon from "../../assets/GitHub-Mark-64px.png";

import TwitterLogoLight from "../../assets/Twitter-Logo-Light.png";
import TwitterLogo from "../../assets/Twitter-Logo-Blue.png";
import { getMenuCollapsed, setMenuCollapsed } from "../../storage";
import breakpoint from "../../utils/breakpoint";

const Header = ({ onLanguageChange, onThemeChange }) => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);
  const breakpointValue = useContext(BreakpointContext);
  const isSmall = breakpoint.checkSmall(breakpointValue);
  const [ignoreTransitions, setIgnoreTransitions] = useState(true);
  const [isCollapsed, setCollapsed] = useState(
    isSmall ? getMenuCollapsed() : false
  );

  return (
    <header
      class={cx(style.header, {
        [style.collapsed]: !!isCollapsed,
        [style.ignoreTransitions]: ignoreTransitions
      })}
    >
      <div class={style.topHeader}>
        <div class={style.languageToggle}>
          <Toggle
            class="language"
            defaultChecked={language === "en-US"}
            aria-label="Toggle language"
            icons={false}
            onChange={onLanguageChange}
          />
        </div>
        <Link href="/" class={style.profilePicture}>
          <img src={Profile} alt="Geraldo Neto's picture" />
        </Link>
        {isSmall && (
          <i
            class={style.collapse}
            onClick={() => {
              setIgnoreTransitions(false);
              setMenuCollapsed(!isCollapsed);
              setCollapsed(!isCollapsed);
            }}
          />
        )}
        <div class={style.themeToggle}>
          <Toggle
            class="theme"
            defaultChecked={theme === "light"}
            aria-label="Toggle theme"
            icons={{
              checked: (
                <img
                  class={style.toggleIcon}
                  src={SunIcon}
                  alt="Sun (Light Theme)"
                />
              ),
              unchecked: (
                <img
                  class={style.toggleIcon}
                  src={NightIcon}
                  alt="Moon (Dark Theme)"
                />
              ),
            }}
            onChange={onThemeChange}
          />
        </div>
      </div>
      <div class={style.menu}>
        <div class={style.personal}>
          <Link href="/">
            <h1>Geraldo Neto</h1>
          </Link>
          <h4>{i18n("profession")}</h4>
        </div>
        <div class={style.social}>
          <a href="https://github.com/glneto" target="_blank">
            <img
              class={style.github}
              src={theme === "dark" ? GithubIconLight : GithubIcon}
              alt="GitHub Icon"
            />
          </a>
          <a href="https://twitter.com/glneto_" target="_blank">
            <img
              class={style.twitter}
              src={theme === "dark" ? TwitterLogoLight : TwitterLogo}
              alt="GitHub Icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
