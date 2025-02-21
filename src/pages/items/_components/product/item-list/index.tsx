import { Description, ItemListContainer, Thumbnail, Location, DescriptionHeader } from "./styles";
import { priceFormatter } from "@/utils/formatter";
import imageTest from "@/assets/image-test-list.jpg";
import shippingIcon from "@/assets/ic_shipping.png";
import Image from "next/image";

const ProductItemList = () => {
  /*
   * Formata o preço passando o valor da moeda
   * e quantas casas decimais após a vírgula exibir
   */
  const price = priceFormatter("en-US", "USD", 0);

  return (
    <ItemListContainer>
      <Thumbnail>
        <Image
          src={imageTest}
          width={180}
          height={180}
          alt="Imagem do produto"
        />
      </Thumbnail>

      <Description>
        <DescriptionHeader>
          <h2>{price.format(1980)}</h2>
          <Image src={shippingIcon} alt="Ícone de envio" />
        </DescriptionHeader>

        <p>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</p>
      </Description>

      <Location>Capital Federal</Location>
    </ItemListContainer>
  );
};

export default ProductItemList;
