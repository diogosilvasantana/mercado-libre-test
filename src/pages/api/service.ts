import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchItems = async (query: string) => {
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

export const fetchItemDetails = async (id: string) => {
  try {
    const response = await apiClient.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do item:", error);
    throw error;
  }
};
