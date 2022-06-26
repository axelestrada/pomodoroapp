import { FC, ReactNode, useContext } from "react";
import { AppContext } from "../state/AppProvider";

import "./styles/actionsBar.sass";

const ActionsBar: FC<{ children: ReactNode }> = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <div className="actions-bar" data-theme={state.theme.color}>
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
