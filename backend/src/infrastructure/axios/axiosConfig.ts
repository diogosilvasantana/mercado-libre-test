import axios from "axios";

/**
 * Instância configurada do Axios para fazer requisições HTTP.
 *
 * Esta instância está configurada para se comunicar com a API do MercadoLibre.
 *
 * @constant {AxiosInstance} api - A instância configurada do Axios.
 *
 * Configurações:
 * - `baseURL`: Define a URL base para todas as requisições feitas utilizando esta instância.
 * - `timeout`: Define um tempo limite máximo de 5000ms para que a solicitação seja feita
 *   (isso ajuda a evitar que a aplicação fique pendente indefinidamente no caso
 *   de não receber uma resposta).
 */
const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
  timeout: 5000,
});

export default api;
