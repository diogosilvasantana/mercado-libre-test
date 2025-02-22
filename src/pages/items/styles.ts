import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1100px",
  paddingInline: "3.125rem",
  margin: "0 auto",
  paddingBottom: "3.25rem",

  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  marginBlock: "1rem",
  backgroundColor: "$grey300",
});

export const StyledLink = styled("a", {
  textDecoration: "none",
  color: "inherit",
});
