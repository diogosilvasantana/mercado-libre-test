import { styled } from "@/styles";

export const SkeletonContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 7fr 2fr",
  gap: "1rem",
  width: "100%",
});

export const SkeletonContent = styled("div", {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  paddingBlock: "1.5rem",
});

export const SkeletonBox = styled("div", {
  backgroundColor: "#e0e0e0",
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
  backgroundImage: `linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)`,
  backgroundSize: "1000px 104px",
  position: "relative",
  overflow: "hidden",
});

export const SkeletonThumbnail = styled(SkeletonBox, {
  width: "180px",
  height: "180px",
});

export const SkeletonText = styled(SkeletonBox, {
  height: "24px",
  marginBottom: "1rem",
  width: "60%",
});

export const SkeletonDescription = styled(SkeletonBox, {
  height: "16px",
  width: "100%",
});

export const SkeletonLocation = styled(SkeletonBox, {
  marginTop: "3rem",
  width: "80%",
  height: "16px",
  display: "block",
});
