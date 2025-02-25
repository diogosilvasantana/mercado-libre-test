import { Container } from "../styles";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
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

  // Configuração do título e descrição dinâmicos
  const pageTitle = itemDetails
    ? `${itemDetails.item.title}`
    : "Carregando detalhes do produto...";
  const pageDescription =
    itemDetails && itemDetails.item.description
      ? itemDetails.item.description
      : "Veja detalhes do produto selecionado.";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: typeof window !== "undefined" ? window.location.href : "",
          type: "article",
          images:
            itemDetails && itemDetails.item.picture
              ? [{ url: itemDetails.item.picture }]
              : [],
          site_name: "Mercado Libre",
        }}
      />
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
    </>
  );
};

export default ItemDetailsPage;
