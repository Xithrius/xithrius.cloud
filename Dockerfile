FROM node:12

WORKDIR /site

COPY package*.json ./

RUN npm i

COPY . .

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
