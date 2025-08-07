# Recipe and Meal Planner Application - Backend

## Overview
The Recipe and Meal Planner Application is a full-featured web application that allows users to search for recipes, save their favorites, and create a weekly meal plan. The backend is built using Node.js and Express, providing a RESTful API for the frontend to interact with.

## Features
- User authentication (registration and login)
- Recipe management (search, save, and retrieve recipes)
- Meal plan management (create and retrieve meal plans)
- User favorites management

## Technologies Used
- Node.js
- Express
- MySQL
- TypeScript
- JWT for authentication

## Project Structure
```
backend
├── src
│   ├── controllers        # Contains controller files for handling requests
│   ├── models             # Contains model files for database entities
│   ├── routes             # Contains route files for API endpoints
│   ├── middleware         # Contains middleware for authentication
│   ├── db                 # Contains database connection setup
│   └── app.ts             # Entry point of the application
├── package.json           # NPM package configuration
└── tsconfig.json          # TypeScript configuration
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd recipe-meal-planner-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the MySQL database:
   - Create a new database and run the SQL schema from `database/schema.sql`.

4. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add your database connection details and JWT secret.

5. Start the server:
   ```
   npm run start
   ```

## API Endpoints
- **Authentication**
  - `POST /api/register` - Register a new user
  - `POST /api/login` - Log in an existing user

- **Recipes**
  - `GET /api/recipes` - Retrieve all recipes
  - `POST /api/recipes` - Save a new recipe

- **Meal Plans**
  - `GET /api/mealplan` - Retrieve meal plans for a user
  - `POST /api/mealplan` - Create a new meal plan

- **User Favorites**
  - `GET /api/user/favorites` - Retrieve user's favorite recipes
  - `POST /api/user/favorites` - Save a recipe as a favorite

## Contribution
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.