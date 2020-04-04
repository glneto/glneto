import { h, Component, createContext } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import Header from "./header";

// Code-splitting is automated for routes
import Blogs from "../routes/blogs";
import Blog from "../routes/blog";
import NotFoundPage from "../routes/notfound";
import style from "./style";
import {
  setPreferredLanguage,
  setPreferredTheme,
  getPreferredLanguage,
  getPreferredTheme,
} from "../storage";
import breakpoint from "../utils/breakpoint";

export const LanguageContext = createContext(getPreferredLanguage());
export const ThemeContext = createContext(getPreferredTheme());
export const BreakpointContext = createContext(breakpoint.context());

export default class App extends Component {
  state = {
    language: getPreferredLanguage(),
    theme: getPreferredTheme(),
    breakpoint: breakpoint.get(),
  };

  onResize = () => {
    this.setState({ breakpoint: breakpoint.get() });
  };

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  onLanguageChange = (e) => {
    const isChecked = e.target.checked;
    const language = isChecked ? "en-US" : "pt-BR";
    this.setState({ language });
    setPreferredLanguage(language);
  };

  onThemeChange = (e) => {
    const isChecked = e.target.checked;
    const theme = isChecked ? "light" : "dark";
    this.setState({ theme });
    setPreferredTheme(theme);
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render(props) {
    return (
      <Provider value={props}>
        <LanguageContext.Provider value={this.state.language}>
          <ThemeContext.Provider value={this.state.theme}>
            <BreakpointContext.Provider value={this.state.breakpoint}>
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
                  <NotFoundPage type="404" default />
                </Router>
              </div>
            </BreakpointContext.Provider>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </Provider>
    );
  }
}
