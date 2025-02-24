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

    fontSizes: {
      fontSize_12x: "0.75rem",
      fontSize_14x: "0.875rem",
      fontSize_16x: "1rem",
      fontSize_18x: "1.125rem",
      fontSize_24x: "1.5rem",
      fontSize_28x: "1.75rem",
      fontSize_46x: "2.875rem",
    },
  },
});
