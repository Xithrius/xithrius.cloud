FROM node:12

WORKDIR /site

COPY package*.json ./

RUN npm i

COPY . .

ENV NODE_ENV=production

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "run", "start"]
