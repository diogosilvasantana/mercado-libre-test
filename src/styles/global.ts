import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily:
      "Proxima Nova,-apple-system,Helvetica Neue,helvetica,roboto,arial,sans-serif",
    "-webkit-font-smoothing": "antialiased",
    background: "$grey300",
    color: "$grey900",
    fontSize: "$fontSize_18x",
  },

  h2: {
    fontSize: "$fontSize_24x",
    fontWeight: "normal",
  },

  small: {
    fontSize: "$fontSize_12x",
    color: "$grey500",
  },
});
