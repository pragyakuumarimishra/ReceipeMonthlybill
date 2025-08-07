# Database Setup for Recipe and Meal Planner Application

This directory contains the SQL schema and documentation for setting up the MySQL database used in the Recipe and Meal Planner Application.

## Schema

The `schema.sql` file includes the necessary SQL commands to create the following tables:

- **Users**: Stores user information such as username and password.
- **Recipes**: Contains details about recipes, including title, ingredients, and instructions.
- **UserFavorites**: Links users to their favorite recipes.
- **MealPlan**: Manages meal plans by linking users to specific recipes and dates.

## Setup Instructions

1. **Create Database**: Before running the schema, create a new database in your MySQL server.

   ```sql
   CREATE DATABASE recipe_meal_planner;
   ```

2. **Run Schema**: Execute the `schema.sql` file in your MySQL client to create the necessary tables.

   ```sql
   SOURCE path/to/schema.sql;
   ```

3. **Configure Connection**: Ensure that your backend application is configured to connect to this database with the correct credentials.

## Notes

- Make sure to have MySQL installed and running on your machine.
- Adjust the SQL commands in `schema.sql` as needed to fit your specific requirements or database settings.