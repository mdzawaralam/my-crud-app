# Build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html