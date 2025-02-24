import { apiClient } from "@/config/axios";

// Retorna a lista de itens do backend
export const getItemsList = async (query: string) => {
  try {
    const response = await apiClient.get(
      `/api/items?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    throw error;
  }
};

// Retorna o detalhe do item assim que clicado na lista
export const getItemById = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do item:", error);
    throw error;
  }
};
