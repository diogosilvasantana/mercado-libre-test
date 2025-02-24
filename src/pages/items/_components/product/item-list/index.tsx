import {
  Description,
  ItemListContainer,
  Thumbnail,
  Location,
  DescriptionHeader,
  DecimalPrice,
  DescriptionPrice,
} from "./styles";
import { currencyFormatter } from "@/utils/currencyFormatter";
import Image from "next/image";
import shippingIcon from "@/assets/ic_shipping.png";
import { ItemList } from "@/interfaces/item-list";

interface ProductItemListProps {
  item: ItemList;
}

const ProductItemList: React.FC<ProductItemListProps> = ({ item }) => {
  const price = currencyFormatter(
    "es-AR",
    item.price.currency,
    item.price.amount
  );

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
          <DescriptionPrice>
            <h2>{price.formatted}</h2>
            {item.price.decimals !== 0 && (
              <DecimalPrice>{item.price.decimals}</DecimalPrice>
            )}
          </DescriptionPrice>
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
