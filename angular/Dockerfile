#Stage 1

FROM node:12-alpine as node
LABEL name="frontend"
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install yarn
RUN yarn install
COPY . /app
RUN npm build --prod

#Stage 2

FROM nginx:1.20-alpine

COPY --from=node /app/dist/angular /usr/share/nginx/html
