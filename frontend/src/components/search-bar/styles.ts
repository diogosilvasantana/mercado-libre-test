import { styled } from "@/styles";

export const InputContainer = styled("div", {
  width: "100%",
  position: "relative",
  display: "flex",
});

export const Input = styled("input", {
  width: "100%",
  backgroundColor: "$white",
  padding: "12px 16px",
  borderRadius: "2px",
  border: "none",
  fontSize: "18px",
  outline: "none",

  "&::placeholder": {
    color: "$grey500",
  },

  "&:focus": {
    borderColor: "$secondary",
    borderWidth: "1.5px",
  },
});

export const SearchButton = styled("button", {
  cursor: "pointer",
  position: "absolute",
  top: "0",
  right: "0",
  height: "100%",
  padding: "0 16px",
  border: "none",
  backgroundColor: "$grey300",
  color: "$gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
