import { h } from "preact";
import { Link } from "preact-router/match";
import cx from "classnames";
import style from "./style";
import Profile from "../../assets/profile.jpeg";
import i18n from "../../i18n";
import { ThemeContext, BreakpointContext } from "../app";
import { useContext, useState } from "preact/hooks";

import GithubIconLight from "../../assets/GitHub-Mark-Light-64px.png";
import GithubIcon from "../../assets/GitHub-Mark-64px.png";

import TwitterLogoLight from "../../assets/Twitter-Logo-Light.png";
import TwitterLogo from "../../assets/Twitter-Logo-Blue.png";
import { getMenuCollapsed, setMenuCollapsed } from "../../storage";
import breakpoint from "../../utils/breakpoint";
import ThemeToggle from "../toggles/themeToggle";
import LanguageToggle from "../toggles/languageToggle";

const Header = ({ onLanguageChange, onThemeChange, onExpand, onCollapse }) => {
  const theme = useContext(ThemeContext);
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
          <LanguageToggle onLanguageChange={onLanguageChange} />
        </div>
        <Link href="/" class={style.profilePicture}>
          <img src={Profile} alt="Geraldo Neto's picture" />
        </Link>
        {isSmall && (
          <i
            class={style.collapse}
            onClick={() => {
              const willCollapse = !isCollapsed;

              setIgnoreTransitions(false);
              setMenuCollapsed(!isCollapsed);
              setCollapsed(!isCollapsed);

              if (willCollapse && onCollapse) onCollapse();
              else if (!willCollapse && onExpand) onExpand(); 
            }}
          />
        )}
        <div class={style.themeToggle}>
          <ThemeToggle toggleIconStyle={style.toggleIcon} onThemeChange={onThemeChange} />
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
