# Recipe and Meal Planner Application

## Overview
The Recipe and Meal Planner Application is a full-featured web application that allows users to search for recipes, save their favorites, and create a weekly meal plan. The application also generates a shopping list based on the user's meal plan, making meal preparation easier and more organized.

## Key Features
- **User Authentication:** Secure user registration and login using JWT for token-based authentication.
- **Recipe Search:** Users can search for recipes based on ingredients, cuisine, and dietary preferences.
- **Favorites Management:** Users can save their favorite recipes for easy access.
- **Meal Planning:** Users can create and manage a weekly meal plan, linking recipes to specific days.
- **Shopping List Generation:** Automatically generate a shopping list based on the selected meal plan.

## Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL

## Project Structure
```
recipe-meal-planner-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── db
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── api
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── styles
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── database
│   ├── schema.sql
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MySQL
- npm or yarn

### Installation

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd recipe-meal-planner-app
   ```

2. **Backend Setup:**
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Set up the MySQL database using the schema provided in `database/schema.sql`.
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

### Usage
- Access the application in your web browser at `http://localhost:3000`.
- Register a new account or log in to access the features.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.