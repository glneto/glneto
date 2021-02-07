import { h } from "preact";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Section from "./section";
import LatestPost from "./latest-post";

const landing = (props) => {
  const [{ data }] = usePrerenderData(props);

  return (
    <Landing
      articles={data.articles}
      quickTips={data.quickTips}
      refactorZone={data.refactorZone}
    />
  );
};

const Landing = ({ articles, quickTips, refactorZone }) => {
  return (
    <div>
      <Section path={`/articles`} text="Articles">
        <LatestPost
          title={articles[0].details.title}
          date={articles[0].details.date}
          link={`/articles/${articles[0].id}`}
        />
      </Section>
      <Section path={`/quick-tips`} text="Quick tips">
        <LatestPost
          title={quickTips[0].details.title}
          date={quickTips[0].details.date}
          link={`/quick-tips/${quickTips[0].id}`}
        />
      </Section>
      <Section path={`/refactor-zone`} text="Refactor Zone" />
    </div>
  );
};

export default landing;
