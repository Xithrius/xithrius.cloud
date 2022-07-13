FROM node:17.9-slim

WORKDIR /site

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV=production

ENV PORT=8001

EXPOSE 8001

CMD ["yarn", "start", "-p", "8001"]
