#Base playwright
FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /e2e

COPY package*.json ./ 

RUN npm install
RUN npm ci --only=production && npm cache clean --force

COPY . .

ENV BASE_URL='https://www.saucedemo.com'

CMD ["npm","start"]

