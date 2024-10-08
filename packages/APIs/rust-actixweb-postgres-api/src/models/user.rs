use serde::{Deserialize, Serialize};
use uuid::Uuid;

// Struct for a User that will be sent to the client
#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    pub password: String, // In real application, store a hashed password
}

// Struct for creating a new user
#[derive(Debug, Serialize, Deserialize)]
pub struct CreateUser {
    pub username: String,
    pub email: String,
    pub password: String,
}
