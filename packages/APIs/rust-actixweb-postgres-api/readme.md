### Rust Actix-Web + Deadpool-Postgres CRUD API - Backend

---

## Introduction

This is a basic CRUD (Create, Read, Update, Delete) API implemented using **Rust**, **Actix-Web**, and **PostgreSQL** with **Deadpool-Postgres** for database connection pooling. The API performs basic operations on user data including creating, retrieving, updating, and deleting users from a PostgreSQL database.

It is structured into different modules such as:
- **config**: For database configuration.
- **models**: For data models.
- **routes**: For defining API routes.
- **services**: For implementing the business logic.

### Tech Stack
- **Rust**: The programming language.
- **Actix-Web**: A powerful, pragmatic, and extremely fast web framework for Rust.
- **Deadpool-Postgres**: A PostgreSQL connection pool for asynchronous operations.
- **Dotenvy**: A library for reading environment variables from a `.env` file.
- **Tokio**: An asynchronous runtime for Rust.

---

## Project Structure

```
src/
├── config/
│   └── db.rs             # Database configuration (Postgres pool setup)
├── models/
│   └── user.rs           # User model (mapping DB table to struct)
├── routes/
│   └── user_routes.rs    # User API routes
├── services/
│   └── user_service.rs   # Business logic for CRUD operations
├── main.rs               # Main entry point of the API
├── Cargo.toml            # Project dependencies
```

### Modules Breakdown:

1. **config/db.rs**: 
    - Sets up the database connection pool using `deadpool-postgres`.
    
2. **models/user.rs**: 
    - Defines the `User` struct that mirrors the database table.
    - Includes request models such as `CreateUser` and `UpdateUser`.

3. **routes/user_routes.rs**:
    - Defines the routes for the user-related API endpoints, like `/users` for CRUD operations.
    
4. **services/user_service.rs**:
    - Implements the business logic for creating, retrieving, updating, and deleting users in the database.

---

## Prerequisites

To run this project, you need the following:

1. **Rust** (Install from [rustup.rs](https://rustup.rs/))
2. **PostgreSQL** (Make sure PostgreSQL is installed and running)
3. **Cargo** (Rust's package manager, installed with Rust)
4. **Dotenvy**: To manage environment variables.
   
---

## Environment Setup

1. Clone this repository:
    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```

2. Create a `.env` file in the root directory with the following content (adjust to your DB credentials):
    ```
    DATABASE_URL=postgres://username:password@localhost/database_name
    PORT=8080
    ```

3. Install the required dependencies:
    ```bash
    cargo build
    ```

4. Set up your PostgreSQL database. You can use the following SQL command to create a table for storing users:
    ```sql
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(255)
    );
    ```

---

## Running the Application

To start the server, use the following command:

```bash
cargo run
```

Once the server is running, you will see the message:
```
Starting server on port: 8080
```

The API will be accessible at `http://localhost:8080`.

---

## API Endpoints

The following are the available routes you can use to test the API in **Postman** or any other REST client:

### 1. **Create a User**
   - **Method**: `POST`
   - **URL**: `http://localhost:8080/users`
   - **Body** (JSON):
     ```json
     {
       "username": "john_doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Description**: Creates a new user in the database.

### 2. **Get All Users**
   - **Method**: `GET`
   - **URL**: `http://localhost:8080/users`
   - **Description**: Retrieves all users from the database.

### 3. **Get a User by ID**
   - **Method**: `GET`
   - **URL**: `http://localhost:8080/users/{id}`
   - **Example**: `http://localhost:8080/users/1`
   - **Description**: Retrieves a user by their ID.

### 4. **Update a User by ID**
   - **Method**: `PUT`
   - **URL**: `http://localhost:8080/users/{id}`
   - **Body** (JSON):
     ```json
     {
       "username": "jane_doe",
       "email": "jane@example.com",
       "password": "newpassword123"
     }
     ```
   - **Description**: Updates an existing user's information.

### 5. **Delete a User by ID**
   - **Method**: `DELETE`
   - **URL**: `http://localhost:8080/users/{id}`
   - **Example**: `http://localhost:8080/users/1`
   - **Description**: Deletes a user by their ID.

---

## Testing with Postman

1. **Start the server**: 
    Ensure the server is running by executing `cargo run`.

2. **Testing the API**:
   - Open Postman.
   - Use the API routes defined above to send requests to the server.
   
3. **Create a User**:
   - Choose `POST` method in Postman.
   - Paste the URL `http://localhost:8080/users`.
   - In the **Body** section, choose **raw** and set it to `JSON`.
   - Provide the JSON data as described in the Create User section.
   - Click **Send** to see the response.

4. **Get All Users**:
   - Choose `GET` method.
   - Paste the URL `http://localhost:8080/users`.
   - Click **Send** to retrieve all users.

5. **Get, Update, and Delete a User**:
   - Use the respective `GET`, `PUT`, and `DELETE` methods for these operations.

---

## Troubleshooting

- If you encounter database connection issues, double-check your `.env` configuration for the `DATABASE_URL`.
- Ensure that your PostgreSQL service is running and accessible.

---

## Conclusion

This project demonstrates a basic CRUD API built with Rust, Actix-Web, and PostgreSQL. It follows a modular structure for better scalability and maintainability, and the use of environment variables keeps sensitive data secure.

Feel free to modify the code and extend it as per your requirements!

---
## Made by

This project was made by **[Harshit Shukla](https://harshitshukla.me)**. Feel free to connect with me:

- GitHub: [https://github.com/HarshitShukla-dev](https://github.com/HarshitShukla-dev)
- LinkedIn: [https://www.linkedin.com/in/harshitshuklaa/](https://www.linkedin.com/in/harshitshuklaa/)
- Twitter: [https://twitter.com/harshitshukldev](https://twitter.com/harshitshukldev)

## License

This project is licensed under the MIT License.