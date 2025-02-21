import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  marginBlock: "1rem",
  backgroundColor: "$grey300",
});
