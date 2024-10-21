FROM node:alpine

WORKDIR /app

COPY . .

# Install npm dependencies
RUN npm install

# Set environment variables
ENV MONGO_URL=mongodb://localhost:27017/onlinebooksales
ENV PORT=3000
ENV COOKIE_EXPIRE=3000
ENV JWT_SECRET="YourJWTSecret"

EXPOSE 3000

CMD ["npm", "run", "dev"]