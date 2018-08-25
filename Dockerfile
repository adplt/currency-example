FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

RUN npm run build --production

RUN npm install pm2 -g

CMD pm2 start ./production.js --name shopee-test

EXPOSE 3000
