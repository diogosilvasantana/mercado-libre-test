import { Item, ItemDetails } from "@/domain/entities/Item";
import { parsePrice } from "@/shared/utils";
import api from "@/infrastructure/axios/axiosConfig";

/**
 * Interface para descrever a estrutura da resposta da API MercadoLibre.
 */
interface MercadoLibreApiResponse {
  results: any[];
  filters: any[];
}

/**
 * Função para mapear um objeto de resultado da API MercadoLibre para
 * o tipo de dados `Item` usado na aplicação.
 *
 * @param result - Objeto de resultado retornado da API.
 * @returns Um objeto do tipo `Item` correspondente.
 */
const mapItem = (result: any): Item => ({
  id: result.id,
  title: result.title,
  price: {
    currency: result.currency_id,
    ...parsePrice(result.price),
  },
  picture: result.thumbnail,
  condition: result.condition,
  free_shipping: result.shipping.free_shipping,
});

/**
 * Função para extrair categorias da resposta de filtros da API.
 *
 * @param filters - Array de filtros vindo da API.
 * @returns Um array de strings representando nomes de categorias.
 */
const extractCategories = (filters: any[]): string[] => {
  return (
    filters
      .find((filter) => filter.id === "category")
      ?.values[0].path_from_root.map((cat: any) => cat.name) || []
  );
};

/**
 * Função para buscar itens na API MercadoLibre com base em uma query.
 *
 * @param query - Query string para buscar itens.
 * @returns Um objeto contendo arrays de categorias e itens.
 */
export const fetchItems = async (
  query: string
): Promise<{ categories: string[]; items: Item[] }> => {
  const response = await api.get<MercadoLibreApiResponse>(
    `/sites/MLA/search?q=${encodeURIComponent(query)}`
  );

  const categories = extractCategories(response.data.filters);
  const items = response.data.results.slice(0, 4).map(mapItem);

  return { categories, items };
};

/**
 * Função para buscar detalhes de um item específico na API MercadoLibre.
 *
 * @param id - ID do item a ser buscado.
 * @returns Um objeto do tipo `ItemDetails` contendo os detalhes do item.
 */
export const fetchItemDetails = async (id: string): Promise<ItemDetails> => {
  const itemResponse = await api.get(`/items/${id}`);
  const descriptionResponse = await api.get(`/items/${id}/description`);

  const itemData = itemResponse.data;

  return {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      ...parsePrice(itemData.price),
    },
    picture: itemData.pictures[0].secure_url,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: itemData.initial_quantity,
    description: descriptionResponse.data.plain_text,
  };
};
