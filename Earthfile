FROM node:14-alpine
WORKDIR /app

RUN npm i -g pnpm

deps:
  COPY package.json ./
  COPY pnpm-lock.yaml ./

  RUN pnpm install

  SAVE ARTIFACT package.json AS LOCAL ./package.json
  SAVE ARTIFACT pnpm-lock.yaml AS LOCAL ./pnpm-lock.yaml

env:
  RUN printf 'VITE_BUILD_DATE=%s\n' "$(date)" > .env
  SAVE ARTIFACT .env

source:
  FROM +deps
  COPY \
    tsconfig.json \
    tailwind.config.cjs \
    svelte.config.js \
    postcss.config.cjs ./
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

  RUN pnpm format

  SAVE ARTIFACT src AS LOCAL src
  SAVE ARTIFACT bookmarklets AS LOCAL bookmarklets
  SAVE ARTIFACT svelte.config.js AS LOCAL svelte.config.js


dev:
  FROM +source
  COPY +env/.env .
  EXPOSE 3000
  EXPOSE 24678
  VOLUME /app/src
  VOLUME /app/static
  VOLUME /app/bookmarklets
  CMD pnpm dev -- --host
  SAVE IMAGE my-app-dev:latest

lint:
  FROM +source
  COPY .gitignore .
  COPY .prettierrc .prettierignore .
  COPY .eslintrc.cjs .

  RUN pnpm lint

build:
  FROM +source
  COPY +env/.env .

  ARG BASE_URL

  RUN pnpm build

  # If the site is published to GitHub Pages, we need to prevent it from interpreting
  # it as a Jekyll site, otherwise the generated `_app` directory will be considered private.
  # We want `_app` to be public because that's where SvelteKit drops the generated assets.
  RUN touch build/.nojekyll

  SAVE ARTIFACT build AS LOCAL ./build

docker:
  FROM httpd:2.4

  ARG BASE_URL

  COPY +build/build /usr/local/apache2/htdocs/$BASE_URL
  SAVE IMAGE my-app:latest

all:
  BUILD +lint
  BUILD +build
  BUILD +docker
