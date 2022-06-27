import { THEME, TIMER } from "./ActionTypes";

export const timers = ["POMODORO", "SHORT_BREAK", "LONG_BREAK"] as const;
export const fonts = ["KUMBH_SANS", "ROBOTO_SLAB", "SPACE_MONO"] as const;
export const colors = ["RED", "CYAN", "VIOLET"] as const;

// Theme
export interface ITheme {
  font: typeof fonts[number];
  color: typeof colors[number];
}

export interface IThemeAction {
  type: typeof THEME;
  payload: ITheme;
}

// Timer
export interface ITimerDurations {
  POMODORO: number;
  SHORT_BREAK: number;
  LONG_BREAK: number;
}

export interface ITimer {
  current: typeof timers[number];
  durations: ITimerDurations;
}

export interface ITimerAction {
  type: typeof TIMER;
  payload: ITimer | ITimerDurations;
}

export interface IState {
  theme: ITheme;
  timer: ITimer;
}

export type StateActions = IThemeAction | ITimerAction;
