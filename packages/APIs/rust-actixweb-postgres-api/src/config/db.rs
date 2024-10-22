use deadpool_postgres::{Config, Pool, ManagerConfig, RecyclingMethod};
use tokio_postgres::NoTls;
use dotenvy::dotenv;

// Function to create and return a PostgreSQL connection pool
pub fn create_pool() -> Pool {
    dotenv().ok();
    // Initialize configuration
    let mut cfg = Config::new();
    
    // Fetch database URL from environment variable and set it
    let db_url = dotenvy::var("DATABASE_URL").expect("DATABASE_URL must be set");
    cfg.url = Some(db_url);

    // Pool configuration with recycling method
    cfg.manager = Some(ManagerConfig {
        recycling_method: RecyclingMethod::Fast,
    });

    // Build the pool using NoTLS for now
    cfg.create_pool(None, NoTls).expect("Failed to create pool")
}