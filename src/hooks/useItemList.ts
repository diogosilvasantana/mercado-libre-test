import { useState, useEffect } from "react";
import { getItemsList } from "@/pages/api/service";
import { useCategory } from "@/contexts/CategoryContext";
import { ProductItem } from "@/interfaces/product-item";

export const useItemList = (searchQuery: string) => {
  const [items, setItems] = useState<{
    categories: string[];
    items: ProductItem[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setCategories } = useCategory();

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      if (!searchQuery) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getItemsList(searchQuery);
        if (isMounted) {
          setItems(data);
          setCategories(data.categories);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Erro ao buscar os dados:", err);
          setError("Erro ao carregar dados. Tente novamente mais tarde.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [searchQuery, setCategories]);

  return { items, loading, error };
};
