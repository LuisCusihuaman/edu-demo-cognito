# Stage 1: Build React App
FROM node:20.12.2-alpine3.19 as build
WORKDIR /app
RUN npm install -g pnpm
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
