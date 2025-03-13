import { Request, Response } from "express";
import {
  fetchItemDetails,
  fetchItems,
} from "@/application/services/mercadoLibreService";

/**
 * Handler para listar itens de acordo com a query de pesquisa.
 *
 * @param req - Objeto de requisição do Express.
 * @param res - Objeto de resposta do Express.
 * @returns Retorna uma resposta JSON com os autores, categorias e itens obtidos.
 */
export const getItems = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const { categories, items } = await fetchItems(query);
    res.json({ author: res.locals.author, categories, items });
  } catch (error: any) {
      return error.response 
      ? res.status(error.response.status).json({error: error.response.data})
      : res.status(500).json({ error: {
        code: "Bad Request",
        message: "Internal Server Error"
      } });
  }
};

/**
 * Handler para listar detalhes de um item específico baseado no ID.
 *
 * @param req - Objeto de requisição do Express.
 * @param res - Objeto de resposta do Express.
 * @returns Retorna uma resposta JSON com os autores e detalhes do item.
 */
export const getItemDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const item = await fetchItemDetails(id);
    res.json({ author: res.locals.author, item });
  } catch (error: any) {
    return error.response 
    ? res.status(error.response.status).json({error: error.response.data})
    : res.status(500).json({ error: {
      code: "Bad Request",
      message: "Internal Server Error"
    } });
}
};
