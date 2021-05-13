FROM node:14.2-alpine AS build

WORKDIR /server 

COPY package*.json ./

ADD . .

RUN \
  rm -rf package-lock.json; \
  rm -rf yarn.lock; \
  npm install

COPY . .

EXPOSE 9000

CMD ["node", "app.js"]
