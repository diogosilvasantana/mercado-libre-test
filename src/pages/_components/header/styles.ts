import { styled } from "@/styles";

export const Header = styled("header", {
  width: "100%",
  paddingInline: "10rem",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  justifyContent: "space-between",

  "&::before": {
    boxShadow: "0 1px 0 0 rgba(0,0,0,.1)",
    content: '""',
    width: "100%",
    height: "61px",
    zIndex: -1,
    backgroundColor: "$primary",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
