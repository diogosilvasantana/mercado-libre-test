import Breadcrumb from "@/components/breadcrumb";
import { Container } from "../styles";
import Card from "@/components/card";
import ProductItemDetails from "../_components/product/item-detail";

const ItemDetailsPage = () => {
  return (
    <Container>
      <Breadcrumb />
      <Card>
        <ProductItemDetails />
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
