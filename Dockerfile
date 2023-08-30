FROM node:18-buster AS builder

WORKDIR /app

RUN adduser --system --group admin

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm ci --quite --production

EXPOSE 3010

CMD ["node", "index.js"]