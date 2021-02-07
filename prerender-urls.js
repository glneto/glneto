const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");
const parseMD = require("parse-md").default;

const [blogs, images, quickTips, refactorZone] = generateFileList(
  join(__dirname, "content")
).nodes;
module.exports = () => {
  const pages = [
    {
      url: "/",
      seo: {
        cover: "/assets/profile.jpeg",
      },
    }
  ];

  // adding blogs list posts page
  pages.push({
    url: "/",
    data: {
      articles: blogs.edges,
      quickTips: quickTips.edges,
      refactorZone: refactorZone.edges
    },
  });

  pages.push({
    url: "/articles",
    data: blogs,
  });

  pages.push({
    url: "/quick-tips",
    data: quickTips,
  });

  pages.push({
    url: "/refactor-zone",
    data: refactorZone,
  });

  // adding all blog pages
  pages.push(
    ...getEdgePages(blogs.edges, "articles", "blog"),
    ...getEdgePages(quickTips.edges, "quick-tips"),
    ...getEdgePages(refactorZone.edges, "refactor-zone")
  );

  return pages;
};

const getEdgePages = (edges, baseUrlName, folderName) => {
  return (edges || []).map((edge) => {
    let data;
    if (edge.format === "md") {
      const { content } = parseMD(
        fs.readFileSync(
          join("content", folderName || baseUrlName, edge.id),
          "utf-8"
        )
      );
      data = content;
    } else {
      data = fs
        .readFileSync(
          join("content", folderName || baseUrlName, edge.id),
          "utf-8"
        )
        .replace(/---(.*(\r)?\n)*---/, "");
    }
    return {
      url: `/${baseUrlName}/${edge.id}`,
      seo: edge.details,
      data: {
        details: edge.details,
        content: data,
      },
    };
  });
};
