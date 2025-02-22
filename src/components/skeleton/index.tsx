import {
  SkeletonContainer,
  SkeletonContent,
  SkeletonDescription,
  SkeletonLocation,
  SkeletonText,
  SkeletonThumbnail,
} from "./styles";

const SkeletonProductItemList = () => {
  return (
    <SkeletonContainer>
      <SkeletonThumbnail />
      <SkeletonContent>
        <SkeletonText />
        <SkeletonDescription />
      </SkeletonContent>
      <SkeletonLocation />
    </SkeletonContainer>
  );
};

export default SkeletonProductItemList;
