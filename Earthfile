FROM node:14-alpine
WORKDIR /app

deps:
  COPY package.json ./
  COPY package-lock.json ./
  RUN npm install

  SAVE ARTIFACT package.json AS LOCAL ./package.json
  SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

source:
  FROM +deps
  COPY tsconfig.json ./
  COPY svelte.config.js ./
  COPY src src
  COPY static static
  COPY bookmarklets bookmarklets

dev:
  FROM +source
  EXPOSE 3000
  EXPOSE 24678
  VOLUME /app/src
  VOLUME /app/static
  VOLUME /app/bookmarklets
  CMD npm run dev -- --host
  SAVE IMAGE my-app-dev:latest

lint:
  FROM +source
  COPY .prettierrc ./
  COPY .prettierignore ./
  COPY .gitignore ./
  COPY .eslintrc.cjs ./
  COPY .eslintcache .eslintcache

  RUN npm run lint

  SAVE ARTIFACT .eslintcache AS LOCAL .eslintcache

build:
  FROM +source

  ARG BASE_URL

  RUN npm run build

  SAVE ARTIFACT build AS LOCAL ./build

docker:
  FROM httpd:2.4
  COPY +build/build /usr/local/apache2/htdocs/
  SAVE IMAGE my-app:latest

all:
  BUILD +lint
  BUILD +build
  BUILD +docker
