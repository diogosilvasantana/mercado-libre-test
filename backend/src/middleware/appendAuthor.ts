import { Request, Response, NextFunction } from "express";

/**
 * Middleware para adicionar informações do autor à resposta.
 *
 * Este middleware modifica o objeto `res.locals`, inserindo um
 * objeto `author` que contém informações sobre o autor padrão
 * que serão incluídas nas respostas da API.
 *
 * @param req - O objeto de solicitação do Express.
 * @param res - O objeto de resposta do Express, onde `author` é adicionado.
 * @param next - A função de callback `next` para passar o controle para o próximo middleware.
 *
 * Exemplo de saída adicionada:
 * ```json
 * { "author": { "name": "Diogo", "lastname": "Santana" } }
 * ```
 */
export const appendAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.author = {
    name: "Diogo",
    lastname: "Santana",
  };
  next();
};
