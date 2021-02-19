FROM node:14.15.5

COPY . /opt/app

WORKDIR /opt/app

RUN npm ci

RUN npm run db:migrate 

CMD npm run watch