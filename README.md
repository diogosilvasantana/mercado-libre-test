<h1 align="center">Mercado Libre Test</h1>

Aplicação do case prático Fullstack do teste do Mercado Libre.

## Tecnologias

### Frontend

- **React** com **Next.js**: Framework JavaScript para construção de interfaces de usuário.
- **Stitches**: Biblioteca para estilização de componentes React.
- **Axios**: Cliente HTTP para requisições ao backend.
- **Typescript**: Superset do JavaScript que adiciona tipagem estática.

### Backend

- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Express**: Framework para Node.js que facilita a criação de APIs.
- **Axios**: Cliente HTTP para requisições externas.
- **Jest**: Framework de testes unitários em JavaScript.

---

## Requisitos Mínimos

- **Node**: Versão 18 ou superior.

---

## Collection do Backend (Postman)

Para facilitar a execução e teste dos endpoints do backend, disponibilizamos uma Collection do Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7333017-2c1726bc-e7b6-4f0b-9d0d-e2a33950b0e8?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D7333017-2c1726bc-e7b6-4f0b-9d0d-e2a33950b0e8%26entityType%3Dcollection%26workspaceId%3Df7f24d79-8092-4dc9-baef-926f5886aee1){target="\_blank"}

### Endpoints

- `/api/items/{id}`: Retorna os detalhes de um item específico.
- `/api/items?q={query}`: Retorna uma lista de itens que correspondem à query de busca.

---

## Como Executar?

Para executar o projeto, você tem 3 opções: execução automática, manual ou via Docker. Escolha a que melhor se adapta ao seu ambiente e necessidade.

### 1ª Opção: Execução Combinada (Frontend e Backend)

Esta opção permite executar ambos os projetos simultaneamente.

1.  **Instalar Dependências Principais**: Execute `npm install` na pasta raiz do projeto para instalar as dependências do `concurrently`, que permite a execução dos dois projetos em paralelo.

    ```bash
    npm install
    ```

2.  **Instalar Dependências dos Projetos**: Execute o script `postinstall` para instalar as dependências específicas das pastas `backend` e `frontend`.

    ```bash
    npm run postinstall
    ```

3.  **Iniciar os Projetos**: Execute o comando abaixo para iniciar ambos os projetos.

    ```bash
    npm start
    ```

    - Acessar o Frontend: <http://localhost:3000>
    - Acessar o Backend: <http://localhost:3001>

---

### 2ª Opção: Execução Manual (Frontend e Backend Separadamente)

Esta opção permite executar cada projeto individualmente.

1.  **Navegar para os Diretórios**: Abra o terminal e navegue para as pastas `frontend` e `backend`.

    ```bash
    cd backend
    ```

    ```bash
    cd frontend
    ```

2.  **Instalar Dependências**: Em cada pasta, instale as dependências da aplicação.

    ```bash
    npm install
    ```

3.  **Iniciar os Projetos**: Execute o comando abaixo em cada pasta para inicializar o projeto.

    ```bash
    npm run dev
    ```

    - Acessar o Frontend: <http://localhost:3000>
    - Acessar o Backend: <http://localhost:3001>

---

### 3ª Opção: Execução via Docker (Requer Docker Instalado)

Esta opção permite executar a aplicação em containers Docker, garantindo um ambiente consistente.

1.  **Executar Docker Compose**: Certifique-se de ter o Docker instalado e execute o seguinte comando no terminal, na raiz do projeto:

    ```bash
    docker-compose up --build
    ```

    Este comando irá construir as imagens e iniciar os containers.

    - Acessar o Frontend: <http://localhost:3000>
    - Acessar o Backend: <http://localhost:3001>

---

## Dados do Desenvolvedor

**Diogo da Silva Santana**

_Desenvolvedor Fullstack_

- **LinkedIn**: [https://www.linkedin.com/in/diogosilvasantana/](https://www.linkedin.com/in/diogosilvasantana/){target="\_blank"}
