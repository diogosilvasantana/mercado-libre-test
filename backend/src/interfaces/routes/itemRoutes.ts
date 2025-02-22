import { Router } from "express";
import {
  getItemDetails,
  getItems,
} from "@/interfaces/controllers/itemsController";
import { appendAuthor } from "@/middleware/appendAuthor";

const router = Router();

/**
 * Aplica o middleware para adicionar informações do autor em todas as respostas.
 */
router.use(appendAuthor);

/**
 * Configura a rota para listar os itens baseados na query de pesquisa.
 *
 * @route GET /api/items
 * @access Public
 */
router.get("/api/items", getItems);

/**
 * Configura a rota para obter detalhes de um item específico com base no ID.
 *
 * @route GET /api/items/:id
 * @access Public
 */
router.get("/api/items/:id", getItemDetails);

export default router;
