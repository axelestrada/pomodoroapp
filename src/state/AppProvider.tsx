import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { IState, IThemeAction, StateActions } from "./interfaces";
import themeReducer from "./reducers/themeReducer";
const APP_STATE_NAME = "AppSettings";

const initialState: IState = JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : {
      theme: {
        font: "KUMBH_SANS",
        color: "RED",
      },
    };

const AppContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = ({ theme }: IState, action: IThemeAction) => ({
  theme: themeReducer(theme, action),
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
