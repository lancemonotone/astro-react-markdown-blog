import { useState } from "react";
import "../styles/tabs.scss";

export interface TabProps {
  headings: string[];
  content: string[];
}

const Tabs = ({ headings, content }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="tabs">
      <ul className="tabs-header">
        {headings.map((heading, index) => (
          <li
            key={index}
            className={index === currentTab ? "active" : ""}
            onClick={(prevIndex) => {
              setCurrentTab(index);
            }}
          >
            {heading}
          </li>
        ))}
      </ul>
      <div className="tabs-content">
        {content.map(
          (content, index) =>
            index === currentTab && <div key={index}>{content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
