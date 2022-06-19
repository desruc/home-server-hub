# Build layer
FROM node:lts-alpine AS build
RUN mkdir -p /usr/home-server-hub-src/
WORKDIR /usr/home-server-hub-src/
COPY package.json /usr/home-server-hub-src/
RUN npm install
COPY . /usr/home-server-hub-src/
RUN npm run build

# Image layer
FROM node:lts-alpine

LABEL name "home-server-hub-api"

RUN mkdir -p /usr/home-server-hub
WORKDIR /usr/home-server-hub
COPY package.json /usr/home-server-hub/
RUN npm install --production
COPY --from=build /usr/home-server-hub-src/dist /usr/home-server-hub

CMD ["node", "index.js"]
