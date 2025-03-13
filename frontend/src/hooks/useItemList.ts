/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { useCategory } from "@/hooks/useCategory";
import { ItemList } from "@/interfaces/item-list";
import { getItemsList } from "@/pages/api/service";

/**
 * Hook personalizado para buscar e gerenciar uma lista de itens baseada em uma consulta de busca.
 *
 * @param {string} searchQuery - A consulta de busca utilizada para recuperar a lista de itens.
 *
 * @returns {Object} Um objeto contendo:
 * - items: Um objeto com as categorias e itens recuperados, ou null se não estiver disponível.
 * - loading: Um booleano que indica se os dados estão em processo de carregamento.
 * - error: Uma string que indica algum erro ocorrido durante a recuperação dos dados, ou null se não houver erro.
 * - refetch: Uma função que pode ser chamada para buscar os dados novamente.
 */
export const useItemList = (searchQuery: string) => {
  const [items, setItems] = useState<{
    categories: string[];
    items: ItemList[];
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setCategories } = useCategory();

    const fetchData = useCallback(async () => {
    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getItemsList(searchQuery);
      setItems(data);
      setCategories(data.categories);
    } catch (err: any) {
      console.error("Erro ao buscar os dados:", err.message);
      setError(`Erro ao carregar dados: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, setCategories]);

  useEffect(() => {
    fetchData();

    return () => {};
  }, [searchQuery, fetchData]);

  return { items, loading, error, refetch: fetchData };
};