import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

import { IState, IThemeAction, ITimerAction, StateActions } from "./interfaces";

import themeReducer from "./reducers/themeReducer";
import timerReducer from "./reducers/timerReducer";

const APP_STATE_NAME = "AppSettings";

const initialState: IState = JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : {
      theme: {
        font: "KUMBH_SANS",
        color: "RED",
      },
      timer: {
        current: "POMODORO",
        durations: {
          POMODORO: 25,
          SHORT_BREAK: 5,
          LONG_BREAK: 15,
        },
      },
    };

const AppContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = (
  { theme, timer }: IState,
  action: IThemeAction | ITimerAction
) => ({
  theme: themeReducer(theme, action),
  timer: timerReducer(timer, action),
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);

  useEffect(() => {
    localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext, AppProvider };
