FROM node:18-alpine

WORKDIR /home/front-chat/app

COPY . .

EXPOSE 3010

CMD [ "sh", "-c", "npm install" ]
