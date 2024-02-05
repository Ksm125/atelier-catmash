FROM node:19.9.0-alpine AS packages

RUN apk update && apk upgrade && apk add --no-cache git python3 make gcc g++

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json

# Dev step
FROM packages AS npm-dev
RUN npm install
COPY . .

# Prod step
# Not needed for this example