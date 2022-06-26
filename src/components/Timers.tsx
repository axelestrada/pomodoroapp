import { useContext } from "react";
import { AppContext } from "../state/AppProvider";
import { timers } from "../state/interfaces";

import "./styles/actionsBar.sass";

const Timers = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="actions-bar" data-theme={state.theme.color}>
      {timers.map((timer, index) => (
        <button
          key={index}
          className={state.timer.current === timer ? "action active" : "action"}
          onClick={() => {
            dispatch({
              type: "TIMER",
              payload: { ...state.timer, ...{ current: timer } },
            });
          }}
        >
          {timer
            .toLowerCase()
            .replace("_", " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
        </button>
      ))}
    </div>
  );
};

export default Timers;
