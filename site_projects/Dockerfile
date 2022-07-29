FROM node:17.9-slim

WORKDIR /site_projects

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV NODE_ENV=production

ENV PORT=8002

EXPOSE 8002

RUN yarn build

CMD ["yarn", "start", "-p", "8002"]
