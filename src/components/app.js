import { h, Component, createContext } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import Header from "./header";

// Code-splitting is automated for routes
import Blogs from "../routes/blogs";
import Blog from "../routes/blog";
import Contact from "../routes/contact";
import ContactSuccess from "../routes/contact-success";
import NotFoundPage from "../routes/notfound";
import { getLanguage, setLanguage } from "../i18n";
import { setTheme, getTheme } from "../theme";
import style from "./style";

export const LanguageContext = createContext(getLanguage());
export const ThemeContext = createContext(getTheme());

export default class App extends Component {
  state = {
    language: getLanguage(),
    theme: getTheme()
  };

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  onLanguageChange = e => {
    const isChecked = e.target.checked;
    const language = isChecked ? "en-US" : "pt-BR";
    this.setState({ language });
    setLanguage(language);
  };

  onThemeChange = e => {
    const isChecked = e.target.checked;
    const theme = isChecked ? "light" : "dark";
    this.setState({ theme });
    setTheme(theme);
  };

  render(props) {
    return (
      <Provider value={props}>
        <LanguageContext.Provider value={this.state.language}>
          <ThemeContext.Provider value={this.state.theme}>
            <div
              id="app"
              class={style.app}
              className={`app--${this.state.theme}`}
            >
              <Header
                onLanguageChange={this.onLanguageChange}
                onThemeChange={this.onThemeChange}
              />
              <Router onChange={this.handleRoute}>
                <Blogs path="/" />
                <Blog path="/blog/:name" />
                <Contact path="/contact/" />
                <ContactSuccess path="/contact/success" />
                <NotFoundPage type="404" default />
              </Router>
            </div>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </Provider>
    );
  }
}
