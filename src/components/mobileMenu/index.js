import style from "./style.css";
import MobileMenuItem from "./MenuItem";
import cx from "classnames";
import i18n from "../../i18n";

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
          {i18n('back_to_home')}
          {/*<i class={style.back} />*/}
        </a>
      </MobileMenuItem>
      {/*<MobileMenuItem>Menu Item</MobileMenuItem>*/}
    </nav>
  );
};

export default MobileMenu;
