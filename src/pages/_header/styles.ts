import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  gap: "2rem",
  width: "100%",
  maxWidth: "1200px",
  alignItems: "center",
  margin: "0 auto",
});

export const Header = styled("header", {
  backgroundColor: "$primary",
  boxShadow: "0 1px 0 0 rgba(0,0,0,.1)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "0.5rem",
});
