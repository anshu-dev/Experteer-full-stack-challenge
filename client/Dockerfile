FROM node:14.2-alpine AS build

WORKDIR /frontend

COPY package*.json ./

ADD . .

RUN \
  rm -rf package-lock.json; \
  rm -rf yarn.lock; \
  npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
