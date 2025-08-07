import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

class Recipe extends Model {
  public id!: number;
  public title!: string;
  public ingredients!: string;
  public instructions!: string;
  public imageUrl?: string; // Optional field for recipe image
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Recipe',
  }
);

export default Recipe;