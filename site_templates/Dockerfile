FROM node:17.9-slim

WORKDIR /site_templates

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV=production

ENV PORT=8003

EXPOSE 8003

RUN yarn build

CMD ["yarn", "start", "-p", "8003"]
