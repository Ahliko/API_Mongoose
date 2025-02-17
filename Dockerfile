FROM node:23-alpine3.20
LABEL authors="ahliko"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
USER node
CMD ["npm", "run", "dev"]
