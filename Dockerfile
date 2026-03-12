# Use a imagem oficial do Node.js como base
FROM node:20

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Limpe o cache do npm e instale as dependências
RUN npm cache clean --force && npm install --force

# Copie o restante do código do projeto para o contêiner
COPY . .

# Construa o projeto
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 80

# Defina o comando de inicialização
CMD ["npm", "run", "start"]
