import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#FFE600",
      secondary: "#3483FA",
      white: "#FFFFFF",
      grey300: "#EEEEEE",
      grey500: "#999999",
      grey700: "#666666",
      grey900: "#333333",
    },
  },
});
