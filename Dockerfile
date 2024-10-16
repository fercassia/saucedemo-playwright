#Base playwright
FROM mcr.microsoft.com/playwright:v1.48.1-jammy
#Criando repositorio da imagem
WORKDIR /e2e/src
# Copiar o pacote packege.json e package-lock.json para uso de Docker caching
COPY package*.json ./ 
# Instalação de dependencias e limpar o cache
RUN npm install
#Copiar o resto do codigo no container
COPY . .
#Configurando base url a partir do env
ENV BASE_URL='https://www.saucedemo.com'
#Ultimo comando do arquivo para rodar
CMD ["npx", "playwright", "test"]

