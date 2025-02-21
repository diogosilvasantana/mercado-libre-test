import { styled } from "@/styles";

export const ItemListContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 7fr 2fr",
  gap: "1rem",
});

export const Thumbnail = styled("div", {
  img: {
    borderRadius: "4px",
  },
});

export const Description = styled("div", {
  width: "60%",
  paddingBlock: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const DescriptionHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const Location = styled("small", {
  paddingBlock: "3rem",
});
