import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    
   ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',5),
  ];

  constructor(){}

  getIngredients() {
      return this.ingredients.slice();
  }

  onIngredientsAdded(ingredient : Ingredient)
  {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}