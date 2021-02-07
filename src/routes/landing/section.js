import { Link } from "preact-router";
import style from "./section.css";

const Section = ({ path, text, children }) => {
  return (
    <Link href={path}>
      <section class={style.article}>
        <h2 style={{
          marginBottom: "4px"
        }}>{text}</h2>
        {children}
      </section>
    </Link>
  );
};

export default Section;
