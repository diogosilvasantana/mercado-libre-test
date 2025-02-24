import {
  ItemDetailSkeletonContainer,
  SkeletonButton,
  SkeletonDescription,
  SkeletonDescriptionContainer,
  SkeletonDescriptionTitle,
  SkeletonImage,
  SkeletonInfoPrice,
  SkeletonPrice,
  SkeletonTitle,
} from "./styles";

const ItemDetailSkeletonLoader: React.FC = () => {
  return (
    <ItemDetailSkeletonContainer>
      <SkeletonImage />
      <div>
        <SkeletonInfoPrice>
          <div />
          <SkeletonTitle />
          <SkeletonPrice />
          <SkeletonButton />
        </SkeletonInfoPrice>
      </div>
      <SkeletonDescriptionContainer>
        <SkeletonDescriptionTitle />
        <SkeletonDescription />
        <SkeletonDescription />
        <SkeletonDescription />
      </SkeletonDescriptionContainer>
    </ItemDetailSkeletonContainer>
  );
};

export default ItemDetailSkeletonLoader;
