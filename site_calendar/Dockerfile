FROM node:17.9-slim

WORKDIR /site

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV=production

ENV PORT=8080

EXPOSE 8080

RUN yarn build

CMD ["yarn", "start", "-p", "8080"]
