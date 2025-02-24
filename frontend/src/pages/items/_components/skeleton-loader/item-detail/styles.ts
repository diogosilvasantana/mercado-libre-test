import { styled } from "@/styles";

export const SkeletonBox = styled("div", {
  backgroundColor: "$skeleton",
  borderRadius: "4px",
  animation: `shimmer 1.5s infinite linear`,
  "@keyframes shimmer": {
    "0%": {
      backgroundPosition: "-468px 0",
    },
    "100%": {
      backgroundPosition: "468px 0",
    },
  },
  backgroundImage: "$skeletonLinear",
  backgroundSize: "1000px 104px",
  position: "relative",
  overflow: "hidden",
});

export const ItemDetailSkeletonContainer = styled("section", {
  position: "relative",
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "7fr 3fr",
  justifyContent: "space-between",
});

export const SkeletonImage = styled(SkeletonBox, {
  width: "500px",
  height: "500px",
});

export const SkeletonInfoPrice = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",

  "& > div:nth-of-type(1)": {
    width: "50%",
    height: "24px",
  },
});

export const SkeletonTitle = styled(SkeletonBox, {
  height: "36px",
  width: "60%",
});

export const SkeletonPrice = styled(SkeletonBox, {
  height: "46px",
  width: "40%",
  marginBlock: "1rem",
});

export const SkeletonButton = styled(SkeletonBox, {
  height: "48px",
  marginBlock: "1rem",
});

export const SkeletonDescriptionContainer = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const SkeletonDescriptionTitle = styled(SkeletonBox, {
  height: "28px",
  width: "30%",
});

export const SkeletonDescription = styled(SkeletonBox, {
  height: "16px",
  width: "100%",
  maxWidth: "100%",
});
