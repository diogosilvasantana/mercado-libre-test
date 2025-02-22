import Breadcrumb from "@/components/breadcrumb";
import { Container } from "../styles";
import Card from "@/components/card";
import ProductItemDetails from "../_components/product/item-detail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchItemDetails } from "@/pages/api/service";

const ItemDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const getItemDetails = async () => {
      if (id) {
        try {
          const fetchedItemDetails = await fetchItemDetails(id as string);
          setItemDetails(fetchedItemDetails);
        } catch (error) {
          console.error("Erro ao carregar detalhes do item:", error);
        }
      }
    };

    getItemDetails();
  }, [id]);

  if (!itemDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Breadcrumb />
      <Card>
        <ProductItemDetails details={itemDetails} />
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
