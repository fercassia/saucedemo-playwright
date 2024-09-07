FROM node:20-bookworm

WORKDIR /e2e/src

COPY package*.json ./
COPY . .

RUN npx -y playwright@1.47.0 install --with-deps
RUN npm install

EXPOSE 3000

CMD ["npx", "playwright", "test"]

