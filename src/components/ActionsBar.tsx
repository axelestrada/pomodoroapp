import { FC, ReactNode } from "react";
import "./styles/actionsBar.sass"

//Actions Bar
interface IActionsBar {
  children: ReactNode;
}

const ActionsBar: FC<IActionsBar> = ({ children }) => (
  <div className="actions-bar" data-theme="RED">{children}</div>
);

// Actions Bar Item
interface IActionBarItem {
  title: string;
  active?: boolean;
}

export const ActionsBarItem: FC<IActionBarItem> = ({ title, active }) => (
  <button className={active ? "action active" : "action"}>{title}</button>
);
 
//Export default Actions Bar
export default ActionsBar;
