use actix_web::{web, HttpResponse, Responder};
use deadpool_postgres::Pool;

use crate::services::user_service;
use crate::models::user::CreateUser;

// Function to initialize all user-related routes
pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/users")
            .route("/", web::post().to(create_user))
            .route("/", web::get().to(get_all_users))
            .route("/{id}", web::get().to(get_user))
            .route("/{id}", web::put().to(update_user))
            .route("/{id}", web::delete().to(delete_user)),
    );
}

// Handler for creating a new user
async fn create_user(
    pool: web::Data<Pool>,
    user_data: web::Json<CreateUser>,
) -> impl Responder {
    match user_service::create_user(pool.get_ref().clone(), user_data.into_inner()).await {
        Ok(_) => HttpResponse::Ok().json("User created successfully"),
        Err(_) => HttpResponse::InternalServerError().json("Error creating user"),
    }
}

// Handler for fetching all users
async fn get_all_users(pool: web::Data<Pool>) -> impl Responder {
    match user_service::get_all_users(pool.get_ref().clone()).await {
        Ok(users) => HttpResponse::Ok().json(users),
        Err(_) => HttpResponse::InternalServerError().json("Error fetching users"),
    }
}

// Handler for fetching a single user by ID
async fn get_user(pool: web::Data<Pool>, user_id: web::Path<uuid::Uuid>) -> impl Responder {
    match user_service::get_user(pool.get_ref().clone(), user_id.into_inner()).await {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(_) => HttpResponse::NotFound().json("User not found"),
    }
}

// Handler for updating a user
async fn update_user(
    pool: web::Data<Pool>,
    user_id: web::Path<uuid::Uuid>,
    user_data: web::Json<CreateUser>,
) -> impl Responder {
    match user_service::update_user(pool.get_ref().clone(), user_id.into_inner(), user_data.into_inner()).await {
        Ok(_) => HttpResponse::Ok().json("User updated successfully"),
        Err(_) => HttpResponse::InternalServerError().json("Error updating user"),
    }
}

// Handler for deleting a user
async fn delete_user(pool: web::Data<Pool>, user_id: web::Path<uuid::Uuid>) -> impl Responder {
    match user_service::delete_user(pool.get_ref().clone(), user_id.into_inner()).await {
        Ok(_) => HttpResponse::Ok().json("User deleted successfully"),
        Err(_) => HttpResponse::InternalServerError().json("Error deleting user"),
    }
}
