FROM node:alpine

WORKDIR /app

COPY . .

# Install necessary build tools and Java
RUN apk add --no-cache g++ python3 make openjdk11

# Install npm dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
