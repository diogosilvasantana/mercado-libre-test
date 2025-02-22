import http from "@/infrastructure/http/server";

const PORT = 3001;

/**
 * Inicia o servidor HTTP na porta especificada.
 *
 * O servidor escuta na porta definida pela variável
 * de ambiente `PORT`, ou utiliza o padrão 3001 se não definido.
 * Uma vez que o servidor está funcionando, uma mensagem
 * de informação será exibida no console.
 *
 * @constant {number} PORT - Porta na qual o servidor irá escutar.
 */
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
