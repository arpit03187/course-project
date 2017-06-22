import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService{
  
  recipeSelected = new EventEmitter<Recipe>();
  
  private  recipes : Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEgPrbvAo4H7rCREUg8eupmEjHZzZuOJ7NE_mc-vQPGqLhRjp'),
  new Recipe('Another Recipe', 'This is simply a test', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEgPrbvAo4H7rCREUg8eupmEjHZzZuOJ7NE_mc-vQPGqLhRjp')
  ];

  getRecipes(){
      return this.recipes.slice();
  }
  
}