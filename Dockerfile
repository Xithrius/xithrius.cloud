FROM node:12

WORKDIR /site

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
