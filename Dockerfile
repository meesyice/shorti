FROM node:alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=5000

EXPOSE 5000


CMD ["yarn", "start"]
