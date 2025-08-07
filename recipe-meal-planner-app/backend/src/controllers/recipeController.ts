import { Request, Response } from 'express';
import { getDb } from '../db';

// Get all recipes
export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const db = getDb();
    const [rows] = await db.execute('SELECT * FROM Recipes');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single recipe by its ID
export const getRecipeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const [rows] = await db.execute('SELECT * FROM Recipes WHERE id = ?', [id]);
    const rowsArray = rows as any[];
    if (rowsArray.length === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(rowsArray[0]);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new recipe
export const createRecipe = async (req: Request, res: Response) => {
  const { name, ingredients, instructions, image_url } = req.body;
  if (!name || !ingredients || !instructions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = getDb();
    const [result] = await db.execute(
      'INSERT INTO Recipes (name, ingredients, instructions, image_url) VALUES (?, ?, ?, ?)',
      [name, ingredients, instructions, image_url]
    );
    res.status(201).json({ message: 'Recipe created successfully', data: result });
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an existing recipe
export const updateRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, ingredients, instructions, image_url } = req.body;

  try {
    const db = getDb();
    const [result] = await db.execute(
      'UPDATE Recipes SET name = ?, ingredients = ?, instructions = ?, image_url = ? WHERE id = ?',
      [name, ingredients, instructions, image_url, id]
    );
    const updateResult = result as any;
    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe updated successfully' });
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a recipe
export const deleteRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const [result] = await db.execute('DELETE FROM Recipes WHERE id = ?', [id]);
    const deleteResult = result as any;
    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
