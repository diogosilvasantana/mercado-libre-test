# Use uma imagem base oficial do Node.js
FROM node:22-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o servidor Node.js irá usar
EXPOSE 3001

# Comando para rodar o servidor no desenvolvimento
CMD ["npm", "run", "dev"]