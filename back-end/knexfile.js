module.exports = {
    development: {
      client: 'postgresql', // Database client (e.g., 'postgresql', 'mysql', 'sqlite3')
      connection: {
        database: 'my_database', // Database name
        user: 'db_user',         // Database user
        password: 'db_password', // Database password
        host: 'localhost',       // Database host (optional)
        port: 5432              // Database port (optional)
      },
      migrations: {
        tableName: 'knex_migrations', // Name of the migrations table
        directory: './db/migrations'   // Directory where migration files are stored
      },
      seeds: {
        directory: './db/seeds' // Directory where seed files are stored
      }
    },
  
    // Add configurations for other environments (e.g., testing, production) here
  };