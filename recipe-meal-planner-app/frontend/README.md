// This file should only handle database connection logic.

import mysql from 'mysql2/promise';

let db: mysql.Connection | null = null;

export async function connectToDatabase() {
  if (db) return db;
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'your_mysql_password', // Change as needed
      database: 'recipe_app',
    });
    console.log('Connected to MySQL database');
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

export function getDb() {
  if (!db) throw new Error('Database not connected!');
  return db;
}

// Remove all Express-related code from this file.# Recipe and Meal Planner Application - Frontend

This is the frontend part of the Recipe and Meal Planner Application, built using React and TypeScript. The application allows users to search for recipes, save their favorites, and create a weekly meal plan. Additionally, it generates a shopping list based on the user's meal plan.

## Features

- User authentication (login and registration)
- Search and view recipes
- Save favorite recipes
- Create and manage weekly meal plans
- Generate shopping lists from meal plans

## Tech Stack

- **Frontend:** React, TypeScript, HTML, CSS
- **State Management:** React Context API
- **API Interaction:** Axios or Fetch API for making requests to the backend

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd recipe-meal-planner-app/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
The build artifacts will be stored in the `build` directory.

## Folder Structure

- `src/`: Contains all the source code for the frontend application.
  - `components/`: Reusable React components.
  - `pages/`: Different pages of the application.
  - `context/`: Context providers for state management.
  - `api/`: Functions for API calls to the backend.
  - `styles/`: CSS styles for the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.