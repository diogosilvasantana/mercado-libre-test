import { Container } from "../styles";
import { useRouter } from "next/router";
import { useItemDetails } from "@/hooks/useItemDetails";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import ProductItemDetails from "../_components/product/item-detail";
import ErrorComponent from "@/components/error";

const ItemDetailsPage = () => {
  const router = useRouter();
  const itemId = typeof router.query.id === "string" ? router.query.id : "";
  const { itemDetails, loading, error } = useItemDetails(itemId);

  if (loading) {
    return (
      <Container>
        <div>Carregando...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorComponent
          error={{
            title: "Erro ao carregar detalhes",
            message: error,
            labelButton: "Tentar Novamente",
          }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb />
      <Card>
        {itemDetails ? (
          <ProductItemDetails details={itemDetails} />
        ) : (
          <div>Detalhes do item não encontrados.</div>
        )}
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
