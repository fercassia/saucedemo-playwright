#Base playwright
FROM mcr.microsoft.com/playwright:v1.47.0
#Criando repositorio da imagem
WORKDIR /usr/e2e/src
# Copiar o pacote packege.json e package-lock.json para uso de Docker caching
COPY package*.json ./ 
# Instalação de dependencias e limpar o cache
RUN npm install
#Copiar o resto do codigo no container
COPY . .
#Configurando base url a partir do env
ENV BASE_URL='https://www.saucedemo.com'
#
CMD ["npx", "playwright", "test"]

