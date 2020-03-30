import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import Profile from "../../assets/profile.jpeg";
import NightIcon from "../../assets/night-icon.png";
import SunIcon from "../../assets/sun-icon.png";
import Toggle from "react-toggle";
import i18n from "../../i18n";
import { ThemeContext, LanguageContext } from "../app";
import { useContext } from "preact/hooks";

const Header = ({ onLanguageChange, onThemeChange }) => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  return (
    <header class={style.header}>
      <div class={style.topHeader}>
        <div>
          <Toggle
            class="language"
            defaultChecked={language === 'en-US'}
            aria-label="Toggle language"
            icons={false}
            onChange={onLanguageChange}
          />
        </div>
        <Link href="/" class={style.profilePicture}>
          <img src={Profile} alt="Geraldo Neto's picture" />
        </Link>
        <div>
          <Toggle
            class="theme"
            defaultChecked={theme === 'light'}
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
              )
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
        <nav>
          <Link activeClassName={style.active} href="/about">
            {i18n('about')}
          </Link>
          <Link activeClassName={style.active} href="/contact">
            {i18n('contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
