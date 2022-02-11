# pull official base image
FROM node:17.4.0-alpine as build

# set working directory
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
