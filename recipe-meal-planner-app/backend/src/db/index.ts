import mysql from 'mysql2/promise';

// Define the type for the database connection object
let db: mysql.Connection | null = null;

export async function connectToDatabase() {
  // If a connection already exists, return it
  if (db) return db;

  try {
    // Create a new connection if one doesn't exist
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'your_mysql_password', // ⚠️ Change this to your actual password
      database: 'recipe_app',
    });
    console.log('Connected to MySQL database');
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    // Propagate the error to be handled by the server startup logic
    throw error;
  }
}

/**
 * Returns the existing database connection.
 * Throws an error if the connection has not been established.
 */
export function getDb() {
  if (!db) {
    throw new Error('Database not connected! Ensure connectToDatabase() is called at startup.');
  }
  return db;
}