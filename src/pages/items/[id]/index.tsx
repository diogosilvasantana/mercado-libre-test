import { Container } from "../styles";
import { useRouter } from "next/router";
import { useItemDetails } from "@/hooks/useItemDetails";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import ProductItemDetails from "../_components/product/item-detail";
import ErrorComponent from "@/components/error";
import ItemDetailSkeletonLoader from "../_components/skeleton-loader/item-detail";

const ItemDetailsPage = () => {
  const router = useRouter();
  const itemId = typeof router.query.id === "string" ? router.query.id : "";
  const { itemDetails, loading, error } = useItemDetails(itemId);

  return (
    <Container>
      <Breadcrumb />
      <Card>
        {loading ? (
          <ItemDetailSkeletonLoader />
        ) : error ? (
          <ErrorComponent
            error={{
              title: "Erro ao carregar detalhes",
              message: error,
              labelButton: "Tentar Novamente",
            }}
          />
        ) : itemDetails ? (
          <ProductItemDetails item={itemDetails.item} />
        ) : (
          <div>Detalhes do item não encontrados.</div>
        )}
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
