FROM node:17.9

WORKDIR /site

COPY package*.json ./

RUN yarn i

COPY . .

ENV NODE_ENV=production

ENV PORT=8001

EXPOSE 8001

CMD ["npm", "run", "start"]
