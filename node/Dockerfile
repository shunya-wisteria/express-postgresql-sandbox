FROM node

ENV NODE_ENV=development

WORKDIR /app

RUN apt-get update && \
    apt-get install git &&\
    apt-get install -y nodejs &&\
    npm install -g npm &&\
    npm install -g express-generator

ENV HOST 0.0.0.0
EXPOSE 3000