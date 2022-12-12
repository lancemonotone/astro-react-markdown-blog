export const addBasePath = (path: string, addSlash: boolean = false) => {
  return `/astro-react-markdown-blog${addSlash ? '/' + path : path}`;
};
