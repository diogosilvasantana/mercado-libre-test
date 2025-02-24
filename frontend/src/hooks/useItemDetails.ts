import { useState, useEffect } from "react";
import { getItemById } from "@/pages/api/service";
import { ItemDetails } from "@/interfaces/item-details";

/**
 * Hook personalizado para buscar e gerenciar os detalhes de um item com base no seu ID.
 *
 * @param {string} itemId - O ID do item cujos detalhes devem ser recuperados.
 *
 * @returns {Object} Um objeto contendo:
 * - itemDetails: Os detalhes do item recuperado ou null se não estiver disponível.
 * - loading: Um booleano que indica se os dados estão em processo de carregamento.
 * - error: Uma mensagem de erro caso ocorra uma falha na tentativa de recuperar os detalhes.
 */
export const useItemDetails = (itemId: string) => {
  const [itemDetails, setItemDetails] = useState<ItemDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Função assíncrona para buscar os detalhes do item
    const fetchItemDetails = async () => {
      if (!itemId) return;

      setLoading(true);
      setError(null);

      try {
        const details = await getItemById(itemId);
        if (isMounted) {
          setItemDetails(details);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Erro ao carregar detalhes do item:", err);
          setError("Erro ao carregar dados. Tente novamente mais tarde.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchItemDetails();

    return () => {
      isMounted = false;
    };
  }, [itemId]);

  return { itemDetails, loading, error };
};
