//Import types
import { FC, ReactNode } from "react";

//Actions Bar
interface IActionsBar {
  children: ReactNode;
}

const ActionsBar: FC<IActionsBar> = ({ children }) => (
  <div className="actions-bar">{children}</div>
);

// Actions Bar Item
interface IActionBarItem {
  title: string;
  active?: boolean;
}

export const ActionsBarItem: FC<IActionBarItem> = ({ title, active }) => (
  <button className={active ? "button active" : "button"}>{title}</button>
);

//Export default Actions Bar
export default ActionsBar;
