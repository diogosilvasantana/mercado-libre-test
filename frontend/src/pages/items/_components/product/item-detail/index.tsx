/* eslint-disable @next/next/no-img-element */
import {
  ItemInfoPrice,
  ItemDescription,
  ItemDetailContainer,
  ItemImage,
  PriceDescription,
} from "./styles";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Button } from "@/components/button";
import { Item } from "@/interfaces/item-details";

type ProductItemDetailsProps = {
  item: Item;
};

const ProductItemDetails: React.FC<ProductItemDetailsProps> = ({ item }) => {
  const price = currencyFormatter(
    "es-AR",
    item.price.currency,
    item.price.amount
  );

  return (
    <ItemDetailContainer>
      <ItemImage>
        <img src={item.picture} alt={`Imagem do produto ${item.title}`} />
      </ItemImage>

      <ItemInfoPrice>
        <span>Nuevo - {item.sold_quantity} vendidos</span>
        <h2>{item.title}</h2>

        <PriceDescription>{price.formatted}</PriceDescription>

        <Button label="Comprar" />
      </ItemInfoPrice>

      <ItemDescription>
        <h3>Descripción del producto</h3>
        {(item.description === ""
          ? ["Sin descripción"]
          : item.description?.trim()?.split("\n")
        ).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </ItemDescription>
    </ItemDetailContainer>
  );
};

export default ProductItemDetails;
