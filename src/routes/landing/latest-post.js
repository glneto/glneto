import { h } from "preact";
import { Link } from "preact-router";
import { useMemo } from "preact/hooks";

const LatestPost = ({ link, title, date }) => {
  const formattedDate = useMemo(() => {
    const dt = new Date(date);
    return dt.toLocaleDateString();
  }, [date]);
  return (
    <p
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 0,
      }}
    >
      <span>
        <Link href={link}>
          <b>Latest: </b> {title}
        </Link>
      </span>
      <span>{formattedDate}</span>
    </p>
  );
};

export default LatestPost;
