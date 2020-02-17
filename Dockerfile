FROM node:10.15.3-alpine

WORKDIR /app
ADD package*.json ./app/
COPY yarn.lock /app/yarn.lock

RUN yarn install
EXPOSE 4000

# start app
CMD ["yarn", "dev"]
