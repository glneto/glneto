import { h } from "preact";
import { Link } from "preact-router";
import { usePrerenderData } from "@preact/prerender-data-provider";
import style from "./style";
import { useContext } from "preact/hooks";
import { LanguageContext } from "../../components/app";

const blogs = props => {
  const [data, isLoading] = usePrerenderData(props);
  const language = useContext(LanguageContext);

  return (
    <div class={style.pageBlogs}>
      {getBlogsListing(data, isLoading, language)}
    </div>
  );
};

function getBlogsListing(data, isLoading, language) {
  if (isLoading) {
    return (
      <article class={style.loadingPlaceholder}>
        <h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
        <div class={`${style.loadingBody} loading`}>&nbsp;</div>
        <div class={`${style.loadingBody} loading`}>&nbsp;</div>
        <div class={`${style.loadingBody} loading`}>&nbsp;</div>
      </article>
    );
  }

  if (data && data.data) {
    const { data: blogs } = data;
    return (
      <>
        {blogs.edges
          .filter(blog => blog.details.language === language)
          .map(blog => (
            <Link href={`/blog/${blog.id}`}>
              <article class={style.article}>
                <h2>{blog.details.title}</h2>
                {blog.details.subtitle && (
                  <p class={style.subtitle}>{blog.details.subtitle}</p>
                )}
                <div>
                  {(blog.details.tags.split(",") || []).map(tag => (
                    <span class={style.tag}>{tag.trim()}</span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
      </>
    );
  }
}

export default blogs;
