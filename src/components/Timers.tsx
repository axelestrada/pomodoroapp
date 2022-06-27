import { useContext } from "react";
import { AppContext } from "../state/AppProvider";
import { timers } from "../state/interfaces";

import "./styles/timers.sass";

const Timers = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="actions-bar">
      {timers.map((timer, index) => {
        const current = state.timer.current === timer;

        return (
          <button
            key={index}
            data-font={state.theme.font}
            data-color={current ? state.theme.color : ""}
            className={current ? "action active" : "action"}
            onClick={() => {
              current
                ? dispatch({
                    type: "TIMER",
                    payload: {
                      ...state.timer,
                      ...{ reset: !state.timer.reset },
                    },
                  })
                : dispatch({
                    type: "TIMER",
                    payload: { ...state.timer, ...{ current: timer } },
                  });
            }}
          >
            {timer
              .toLowerCase()
              .replace("_", " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
          </button>
        );
      })}
    </div>
  );
};

export default Timers;
