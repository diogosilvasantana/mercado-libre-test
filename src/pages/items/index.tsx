import Breadcrumb from "@/components/breadcrumb";
import { Container, Divider } from "./styles";
import Card from "@/components/card";
import ProductItemList from "./_components/product/item-list";

const ItemsPage = () => {
  return (
    <Container>
      <Breadcrumb />
      <Card>
        <ProductItemList />
        <Divider />

        <ProductItemList />
        <Divider />

        <ProductItemList />
        <Divider />

        <ProductItemList />
        <Divider />

        <ProductItemList />
      </Card>
    </Container>
  );
};

export default ItemsPage;
