export const newlineToParagraph = (str: string) => {
  const newlineChar = String.fromCharCode(10);
  const arr = str.split(newlineChar).map((paragraph: string) => {
    // trim whitespace
    paragraph = paragraph.trim();
    return paragraph;
  });

  // console.log(arr);

  return arr;
};
