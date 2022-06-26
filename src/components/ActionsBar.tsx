import { FC, ReactNode } from "react";
import "./styles/actionsBar.sass";

const ActionsBar: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="actions-bar" data-theme="RED">
      {children}
    </div>
  );
};

interface IActionBarItem {
  title: string;
}

export const ActionsBarItem: FC<IActionBarItem> = ({ title }) => {
  return (
    <button className={"action"}>
      {title
        .toLowerCase()
        .replace("_", " ")
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
    </button>
  );
};

export default ActionsBar;
