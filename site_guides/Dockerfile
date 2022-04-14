FROM node:12

WORKDIR /site_guides

COPY package*.json ./

RUN npm i

COPY . .

ENV NODE_ENV=production

ENV PORT=2000

EXPOSE 2000

CMD ["npm", "run", "serve"]
