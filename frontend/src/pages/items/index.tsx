import { Container, Divider } from "./styles";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useItemList } from "@/hooks/useItemList";
import { ItemList } from "@/interfaces/item-list";
import Breadcrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import ErrorComponent from "@/components/error";
import ProductItemList from "./_components/product/item-list";
import Link from "next/link";
import SkeletonItemListLoader from "./_components/skeleton-loader/item-list";

const ItemsPage = () => {
  const router = useRouter();
  const query =
    typeof router.query.search === "string" ? router.query.search : "";
  const { items, loading, error, refetch } = useItemList(query);

  // Define o título da página com base na busca
  const pageTitle = query ? `Resultados para "${query}"` : "Procurar Itens";

  const pageDescription = query
    ? `Exibindo resultados para a busca de "${query}".`
    : "Explore uma variedade de produtos disponíveis no Mercado Libre.";

  const handleRetry = () => {
    refetch();
  };

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: typeof window !== "undefined" ? window.location.href : "",
          site_name: "Mercado Libre",
        }}
      />
      <Container>
        <Breadcrumb />
        <Card>
          {error && (
            <ErrorComponent
              error={{
                title: "Erro de Carregamento",
                message: error,
                labelButton: "Tentar Novamente",
              }}
              onButtonClick={handleRetry}
            />
          )}
          {loading &&
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <SkeletonItemListLoader />
                {index < 3 && <Divider />}
              </div>
            ))}
          {items && items.items.length === 0 && (
            <div>Nenhum resultado encontrado.</div>
          )}
          {items &&
            items.items.map((item: ItemList) => (
              <div key={item.id}>
                <Link href={`/items/${item.id}`} passHref>
                  <ProductItemList item={item} />
                </Link>
                <Divider />
              </div>
            ))}
        </Card>
      </Container>
    </>
  );
};

export default ItemsPage;
