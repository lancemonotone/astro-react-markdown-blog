import { MarkdownInstance } from "astro";

export const excerptize = (post: MarkdownInstance<Record<string, any>>) => {
  const newlineChar = String.fromCharCode(10);
  const content = post.compiledContent();
  // console.log(content);

  const stripTags = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  return post.frontmatter.excerpt
    ? post.frontmatter.excerpt
    : stripTags(content.split(newlineChar)[0]);
};
