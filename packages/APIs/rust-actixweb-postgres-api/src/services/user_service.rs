use deadpool_postgres::Pool;
use tokio_postgres::Error;
use uuid::Uuid;

use crate::models::user::{User, CreateUser};

// Create a new user and insert into the database
pub async fn create_user(pool: Pool, user: CreateUser) -> Result<(), Error> {
    let client = pool.get().await.unwrap();

    // Password hashing (bcrypt)
    let hashed_password = bcrypt::hash(user.password, 4).unwrap();

    client
        .execute(
            "INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)",
            &[&Uuid::new_v4(), &user.username, &user.email, &hashed_password],
        )
        .await?;

    Ok(())
}

// Fetch all users from the database
pub async fn get_all_users(pool: Pool) -> Result<Vec<User>, Error> {
    let client = pool.get().await.unwrap();
    let statement = client.prepare("SELECT id, username, email, password FROM users").await?;

    let users = client
        .query(&statement, &[])
        .await?
        .iter()
        .map(|row| User {
            id: row.get(0),
            username: row.get(1),
            email: row.get(2),
            password: row.get(3),
        })
        .collect::<Vec<User>>();

    Ok(users)
}

// Fetch a single user by ID
pub async fn get_user(pool: Pool, user_id: Uuid) -> Result<User, Error> {
    let client = pool.get().await.unwrap();
    let statement = client.prepare("SELECT id, username, email, password FROM users WHERE id = $1").await?;

    let row = client.query_one(&statement, &[&user_id]).await?;

    Ok(User {
        id: row.get(0),
        username: row.get(1),
        email: row.get(2),
        password: row.get(3),
    })
}

// Update a user's details
pub async fn update_user(pool: Pool, user_id: Uuid, user: CreateUser) -> Result<(), Error> {
    let client = pool.get().await.unwrap();

    // Password hashing
    let hashed_password = bcrypt::hash(user.password, 4).unwrap();

    client
        .execute(
            "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4",
            &[&user.username, &user.email, &hashed_password, &user_id],
        )
        .await?;

    Ok(())
}

// Delete a user by ID
pub async fn delete_user(pool: Pool, user_id: Uuid) -> Result<(), Error> {
    let client = pool.get().await.unwrap();

    client
        .execute("DELETE FROM users WHERE id = $1", &[&user_id])
        .await?;

    Ok(())
}
