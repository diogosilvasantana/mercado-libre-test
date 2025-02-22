import express from "express";
import cors from "cors";
import routes from "@/interfaces/routes/itemRoutes";

const app = express();

/**
 * Configuração principal do aplicativo Express.
 *
 * Inicializa a instância do aplicativo, configura middlewares
 * e define as rotas principais do sistema.
 */

// Middleware CORS para permitir requisições de domínio cruzado
app.use(
  cors({
    origin: "http://localhost:3000", // Permite requisições do app Next.js
    methods: ["GET"], // Métodos HTTP permitidos
    credentials: true, // Habilita envio de cookies e autenticação HTTP
  })
);

// Middleware para manipulação de dados no formato JSON.
// Necessário para interpretação de payloads JSON nas requisições.
app.use(express.json());

/**
 * Registro de rotas da aplicação.
 *
 * As rotas são importadas do módulo `itemRoutes`, que define
 * as diferentes rotas RESTful disponíveis na aplicação.
 */
app.use(routes);

export default app;
