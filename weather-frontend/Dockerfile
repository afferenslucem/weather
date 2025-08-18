FROM node:24-bookworm-slim AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /usr/app
COPY --from=build /app/src/dist/weather-frontend ./
CMD node server/server.mjs