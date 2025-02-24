import { Container, Divider } from "./styles";
import { useRouter } from "next/router";
import { useItemList } from "@/hooks/useItemList";
import { ProductItem } from "@/interfaces/product-item";
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
  const { items, loading, error } = useItemList(query);

  return (
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
          items.items.map((item: ProductItem) => (
            <div key={item.id}>
              <Link href={`/items/${item.id}`} passHref>
                <ProductItemList item={item} />
              </Link>
              <Divider />
            </div>
          ))}
      </Card>
    </Container>
  );
};

export default ItemsPage;
