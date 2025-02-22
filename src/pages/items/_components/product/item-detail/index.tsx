import Image from "next/image";
import {
  ItemInfoPrice,
  ItemDescription,
  ItemDetailContainer,
  ItemImage,
  PriceDescription,
} from "./styles";
import { priceFormatter } from "@/utils/formatter";
import { Button } from "@/components/button";

type ProductItemDetailsProps = {
  details: {
    item: {
      id: string;
      condition: string;
      price: {
        amount: number;
        currency: string;
        decimals: number;
      };
      sold_quantity: number;
      picture: string;
      description: string;
      title: string;
    };
  };
};

const ProductItemDetails = ({ details }: ProductItemDetailsProps) => {
  // Formata o preço com base nos detalhes recebidos
  const formattedPrice = priceFormatter("en-US", "USD", 0).format(
    details.item.price.amount
  );

  return (
    <ItemDetailContainer>
      <ItemImage>
        <Image
          src={details.item.picture}
          alt={`Imagem do produto ${details.title}`}
          layout="fill"
        />
      </ItemImage>

      <ItemInfoPrice>
        <span>Nuevo - {details.item.sold_quantity} vendidos</span>
        <h2>{details.item.title}</h2>

        <PriceDescription>{formattedPrice}</PriceDescription>

        <Button label="Comprar" />
      </ItemInfoPrice>

      <ItemDescription>
        <h3>Descripción del producto</h3>
        <p>{details.item.description}</p>
      </ItemDescription>
    </ItemDetailContainer>
  );
};

export default ProductItemDetails;
