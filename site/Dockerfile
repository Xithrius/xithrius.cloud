FROM node:12

WORKDIR /site

COPY package*.json ./

RUN npm i

COPY . .

ENV NODE_ENV=production

ENV PORT=8001

EXPOSE 8001

CMD ["npm", "run", "start"]
