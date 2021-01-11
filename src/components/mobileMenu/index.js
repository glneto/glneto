import style from "./style.css";
import MobileMenuItem from "./MenuItem";
import cx from "classnames";
import i18n from "../../i18n";
import Match from "preact-router/match";
import { useState } from "preact/hooks";

const MobileMenu = ({ hide, onCollapse, onExpand }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    const willCollapse = !isCollapsed;
    setCollapsed(!isCollapsed);

    if (willCollapse && onCollapse) onCollapse();
    else if (!willCollapse && onExpand) onExpand();
  };

  return (
    <Match path="/blog/:name">
      {({ matches: isBlogPost }) => (
        <nav
          class={cx(style.menuMobile, {
            [style.menuMobileHide]: hide,
            [style.menuMobileShow]: !hide,
            [style.collapsed]: !!isCollapsed || hide,
          })}
        >
          {isBlogPost && (
            <MobileMenuItem>
              <a href="/">{i18n("back_to_home")}</a>
            </MobileMenuItem>
          )}

          {!isBlogPost && (
            <>
              <i class={style.collapse} onClick={onToggle} />
              {isCollapsed && (
                <MobileMenuItem>
                  <a href="#" onClick={onToggle}>
                    {i18n("go_to")}
                  </a>
                </MobileMenuItem>
              )}
              {!isCollapsed && (
                <div className={cx(style.menuItemsList)}>
                  <MobileMenuItem>
                    <a href="/" onClick={onToggle}>
                      {i18n("blogs")}
                    </a>
                  </MobileMenuItem>
                  <MobileMenuItem>
                    <a href="/quicktips" onClick={onToggle}>
                      {i18n("quick_tips")}
                    </a>
                  </MobileMenuItem>
                  <MobileMenuItem>
                    <a href="/refactorzone" onClick={onToggle}>
                      {i18n("refactor_zone")}
                    </a>
                  </MobileMenuItem>
                </div>
              )}
            </>
          )}
        </nav>
      )}
    </Match>
  );
};

export default MobileMenu;
