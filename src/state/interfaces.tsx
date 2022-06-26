import { THEME, TIMER_DURATIONS } from "./ActionTypes";

const fonts = ["KUMBH_SANS", "ROBOTO_SLAB", "SPACE_MONO"] as const;
const colors = ["RED", "CYAN", "VIOLET"] as const;

export interface ITheme {
  font: typeof fonts[number];
  color: typeof colors[number];  
}

export interface IState {
  theme: ITheme;
}

export interface IThemeAction {
  type: typeof THEME;
  payload: ITheme;
}

export type StateActions = IThemeAction