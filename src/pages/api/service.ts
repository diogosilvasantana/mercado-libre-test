import { apiClient } from "@/config/axios";

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

export const getItemById = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do item:", error);
    throw error;
  }
};
