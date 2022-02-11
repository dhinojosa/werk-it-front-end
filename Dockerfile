# pull official base image
FROM node:17.4.0-alpine

# set working directory
WORKDIR /app

ENV PUBLIC_URL=https://staging.tiered-planet.net/werk-it
ENV PUBLIC_PATH=https://staging.tiered-planet.net/werk-it

COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
