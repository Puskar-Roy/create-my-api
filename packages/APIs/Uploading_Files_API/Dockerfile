FROM node:alpine

WORKDIR /app

COPY . .

# Install npm dependencies
RUN npm install

# Set environment variables
ENV PORT=3000

ENV RUNTIME="localhost:3000"

EXPOSE 3000

CMD ["npm", "run", "dev"]
