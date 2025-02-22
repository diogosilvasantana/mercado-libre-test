import {
  Description,
  ItemListContainer,
  Thumbnail,
  Location,
  DescriptionHeader,
} from "./styles";
import { priceFormatter } from "@/utils/formatter";
import Image from "next/image";
import shippingIcon from "@/assets/ic_shipping.png";
import { ProductItem } from "@/interfaces/product-item";

interface ProductItemListProps {
  item: ProductItem;
}

const ProductItemList: React.FC<ProductItemListProps> = ({ item }) => {
  const fractions = Math.min(20, Math.max(0, item.price.decimals));
  const price = priceFormatter("en-US", item.price.currency, fractions);

  return (
    <ItemListContainer>
      <Thumbnail>
        <Image
          src={item.picture}
          width={180}
          height={180}
          alt={`Imagem do produto ${item.title}`}
        />
      </Thumbnail>

      <Description>
        <DescriptionHeader>
          <h2>{price.format(item.price.amount)}</h2>
          {item.free_shipping && (
            <Image src={shippingIcon} alt="Ícone de envio gratuito" />
          )}
        </DescriptionHeader>

        <p>{item.title}</p>
      </Description>

      <Location>{item.location || "Rosário"}</Location>
    </ItemListContainer>
  );
};

export default ProductItemList;
