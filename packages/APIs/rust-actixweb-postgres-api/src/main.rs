mod config;
mod models;
mod routes;
mod services;

use actix_web::{web, App, HttpServer};
use dotenvy::dotenv;
use std::env;


#[tokio::main]
async fn main() -> std::io::Result<()> {
    // Load environment variables from .env file
    dotenv().ok();
    
    // Initialize logger
    env_logger::init();
    
    // Read server port from environment variable
    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    
    // Create the PostgreSQL connection pool
    let pool = config::db::create_pool();

    println!("Starting server at: http://localhost:{}", port);
    
    // Start Actix web server
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone())) // Pass the pool to the app
            .configure(routes::user_routes::init)   // Initialize user routes
    })
    .bind(format!("0.0.0.0:{}", port))?
    .run()
    .await
}