FROM node:16-alpine as builder

WORKDIR /react
COPY package.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
