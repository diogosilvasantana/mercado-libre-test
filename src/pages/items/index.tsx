/* eslint-disable @typescript-eslint/no-explicit-any */
import Breadcrumb from "@/components/breadcrumb";
import { Container, Divider } from "./styles";
import Card from "@/components/card";
import ProductItemList from "./_components/product/item-list";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchItems } from "@/pages/api/service";
import { useCategory } from "@/contexts/CategoryContext";
import SkeletonProductItemList from "@/components/skeleton";

const ItemsPage = () => {
  const router = useRouter();
  const [productData, setProductData] = useState({ categories: [], items: [] });
  const { setCategories } = useCategory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const query = router.query.search;

      if (typeof query !== "string" || query.trim() === "") {
        router.push("/");
      } else {
        setLoading(true);
        setError(null);

        fetchItems(query)
          .then((data) => {
            setProductData(data);
            setCategories(data.categories);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Erro ao buscar os dados:", err);
            setError("Erro ao carregar dados. Tente novamente mais tarde.");
            setLoading(false);
          });
      }
    }
  }, [router, setCategories]);

  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Breadcrumb />
      <Card>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <SkeletonProductItemList />
                {index < 3 && <Divider />}{" "}
              </div>
            ))
          : productData.items.map((item: any, index: number) => (
              <div key={item.id}>
                <Link href={`/items/${item.id}`} passHref>
                  <ProductItemList item={item} />
                </Link>
                {index < productData.items.length - 1 && <Divider />}
              </div>
            ))}
      </Card>
    </Container>
  );
};

export default ItemsPage;
