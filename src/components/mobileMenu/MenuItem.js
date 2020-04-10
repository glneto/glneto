import style from './style.css'

const MobileMenuItem = ({ children }) => {
  return <div class={style.menuItem}>{children}</div>;
};

export default MobileMenuItem;
