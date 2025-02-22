import { styled } from "@/styles";

export const ItemDetailContainer = styled("section", {
  position: "relative",
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "7fr 3fr",
  justifyContent: "space-between",
});

export const ItemImage = styled("div", {
  position: "relative",
  width: "680px",

  img: {
    position: "relative !important",
    width: "80% !important",
    height: "100% !important",
  },
});

export const ItemInfoPrice = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  span: {
    fontSize: "$fontSize_14x",
  },

  h2: {
    fontWeight: "bold",
  },
});

export const PriceDescription = styled("h3", {
  fontSize: "$fontSize_46x",
  fontWeight: "normal",
  paddingBlock: "1rem",
});

export const ItemDescription = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  h3: {
    fontSize: "$fontSize_28x",
    fontWeight: "normal",
  },

  p: {
    fontSize: "$fontSize_16x",
    color: "$grey500",
  },
});
