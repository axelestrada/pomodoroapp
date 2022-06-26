const actions = ["POMODORO" | "SHORT_BREAK" | "LONG_BREAK"] as const;
const fonts = ["KUMBH_SANS", "ROBOTO_SLAB", "SPACE_MONO"] as const;
const colors = ["RED", "CYAN", "VIOLET"] as const;

interface IThemeSettings {
  themeFont: typeof fonts[number];
  themeColor: typeof colors[number];
}