import style from "./style.css";
import MobileMenuItem from "./MenuItem";
import cx from "classnames";

const MobileMenu = ({ hide }) => {
  return (
    <nav
      class={cx(style.menuMobile, {
        [style.menuMobileHide]: hide,
        [style.menuMobileShow]: !hide,
      })}
    >
      <MobileMenuItem>
        <a href="/">
          Back to Home
          {/*<i class={style.back} />*/}
        </a>
      </MobileMenuItem>
      {/*<MobileMenuItem>Menu Item</MobileMenuItem>*/}
    </nav>
  );
};

export default MobileMenu;
