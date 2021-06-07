FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/iapp

WORKDIR /usr/src/iapp

COPY . /usr/src/iapp

RUN npm install

EXPOSE 8081
CMD [ "npm", "start" ]