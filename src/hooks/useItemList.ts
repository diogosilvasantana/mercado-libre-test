import { useState, useEffect } from "react";
import { getItemsList } from "@/pages/api/service";
import { useCategory } from "@/hooks/useCategory";
import { ItemList } from "@/interfaces/item-list";

/**
 * Hook personalizado para buscar e gerenciar uma lista de itens baseada em uma consulta de busca.
 *
 * @param {string} searchQuery - A consulta de busca utilizada para recuperar a lista de itens.
 *
 * @returns {Object} Um objeto contendo:
 * - items: Um objeto com as categorias e itens recuperados, ou null se não estiver disponível.
 * - loading: Um booleano que indica se os dados estão em processo de carregamento.
 * - error: Mensagem de erro caso ocorra falha na tentativa de recuperar a lista de itens.
 */
export const useItemList = (searchQuery: string) => {
  const [items, setItems] = useState<{
    categories: string[];
    items: ItemList[];
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setCategories } = useCategory();

  useEffect(() => {
    let isMounted = true;

    // Método assíncrono para buscar a lista de itens da API.
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

    // Cleanup: Define isMounted como false ao desmontar o componente para prevenir vazamentos de memória.
    return () => {
      isMounted = false;
    };
  }, [searchQuery, setCategories]);

  return { items, loading, error };
};
