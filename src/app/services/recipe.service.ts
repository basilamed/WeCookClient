import { Injectable } from '@angular/core';
import { env } from '../env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = env.url;

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get(`${this.url}/Recipes`);
  }
  getRecipe(id : Number) {
    return this.http.get(`${this.url}/Recipes/${id}`);
  }
  addRecipe(dto: AddRecipeDto) {
    return this.http.post(`${this.url}/Recipes`, dto);
  }
  deleteRecipe(id : Number) {
    return this.http.delete(`${this.url}/Recipes/${id}`);
  }
  updateRecipe(id:Number, dto: UpdateRecipeDto) {
    return this.http.put(`${this.url}/Recipes/${id}`, dto);
  }

}
export interface AddRecipeDto{
  title: String,
  ingredients: String,
  instructions: String,
  preporationTime: String,
  image: String,
  chefId: String,
  taste: Boolean,
  temperature: String
}
export interface UpdateRecipeDto{
  title: String,
  ingredients: String,
  instructions: String,
  preporationTime: String,
  image: String,
  taste: Boolean,
  temperature : String
}
