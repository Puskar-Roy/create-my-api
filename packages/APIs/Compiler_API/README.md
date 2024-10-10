# Compiler_API

## Overview

**Compiler_API** is a backend application designed to run and manage code compilation across various languages. It provides a Dockerized solution to execute code using different compilers and runtimes, allowing easy integration and remote execution of compiled programs.

## Features

- Dockerized environment for running different compilers (C++, Java, Node.js, Python)
- Supports multiple languages for compilation and execution
- Lightweight and efficient solution for running code snippets securely
- Simple API for submitting code, compiling, and retrieving results

## Technologies Used

- Node.js
- Express
- Docker

## Running Locally

If you want to run this project on your local machine, make sure you have the following dependencies installed:

- **g++** (for C/C++ compilation)
- **JDK** (for Java compilation)
- **Node.js** (for JavaScript runtime)
- **Python** (for Python runtime)

### Steps to Run the Project Locally

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the required Node.js dependencies:
   ```bash
   npm install
   ```

4. Build the Docker image:
   ```bash
   docker build -t compiler-api .
   ```

5. Run the Docker container with the built image:
   ```bash
   docker run -p 3000:3000 --name compiler-api-container compiler-api
   ```

6. The API will be accessible at `http://localhost:3000`.

## API Endpoints

You can find the Postman collection in the `tests` folder to test the endpoints for code compilation. Import the collection into Postman, and you can interact with the API to compile and execute code in various languages.

### Example Endpoints:

- `POST api/v1/compiler/compile/` - Compile and run code of your language with code and language parameter in the body c,c++,java,python and js are supported language parameters.

## Dockerized Solution

The **Compiler_API** leverages Docker to create isolated environments for each compilation request, ensuring that different compilers and runtimes do not conflict. This also enhances security and provides a scalable solution for running code snippets remotely.

### Stopping and Removing the Container

To stop the running container:
```bash
docker stop compiler-api-container
```

To remove the container:
```bash
docker rm compiler-api-container
```

## Happy Coding! :>

---