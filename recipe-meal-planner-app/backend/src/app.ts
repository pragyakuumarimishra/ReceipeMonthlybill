import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import recipeRoutes from './routes/recipeRoutes';
import mealPlanRoutes from './routes/mealPlanRoutes';
import userRoutes from './routes/userRoutes';
import { connectToDatabase } from './db/index';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection and server start
connectToDatabase()
  .then(() => {
    app.use('/api/auth', authRoutes);
    app.use('/api/recipes', recipeRoutes);
    app.use('/api/mealplan', mealPlanRoutes);
    app.use('/api/user', userRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  });