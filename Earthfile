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
  COPY \
    tsconfig.json \
    svelte.config.js ./
  COPY --dir \
    src \
    static \
    bookmarklets ./

format:
  FROM +deps
  COPY .prettierrc .prettierignore .
  COPY .eslintrc.cjs .
  COPY --dir src ./
  COPY --dir bookmarklets ./
  COPY svelte.config.js ./

  RUN npm run format

  SAVE ARTIFACT src AS LOCAL src
  SAVE ARTIFACT bookmarklets AS LOCAL bookmarklets
  SAVE ARTIFACT svelte.config.js AS LOCAL svelte.config.js


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
  COPY .gitignore .
  COPY .prettierrc .prettierignore .
  COPY .eslintrc.cjs .

  RUN npm run lint

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
