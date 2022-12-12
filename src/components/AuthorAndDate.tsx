import { formattedDate } from "../utilities/formattedDate";

export interface AuthorAndDateProps {
  author: string;
  date: string;
}

const AuthorAndDate = ({ author, date }: AuthorAndDateProps) => {
  return (
    <h5 className="author-and-date">
      <span className="author">{author}</span> &bull;{" "}
      <span className="date">{formattedDate(date)}</span>
    </h5>
  );
};

export default AuthorAndDate;
