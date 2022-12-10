const formattedDate = (date: string | number | Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const authorAndDate = (author: string, date: string | number | Date) => {
  return author + " &bull; " + formattedDate(date);
};
