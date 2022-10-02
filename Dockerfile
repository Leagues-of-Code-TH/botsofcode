FROM node:16-alpine AS base

WORKDIR /opt/app
COPY package.json /opt/app

RUN npm install

FROM base AS build

COPY . /opt/app
RUN sh ./scripts/build.sh

FROM base as production

COPY . .
CMD sh ./scripts/start.sh