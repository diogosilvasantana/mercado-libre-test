/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getItemById } from "@/pages/api/service";

export const useItemDetails = (itemId: string) => {
  const [itemDetails, setItemDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

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
