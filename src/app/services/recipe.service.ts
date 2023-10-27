import { Injectable } from '@angular/core';
import { env } from '../env';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = env.url;

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get(`${this.url}/Recipes`);
  }
  getAllRecipesByUser(id:String) {
    return this.http.get(`${this.url}/Recipes/chef/${id}`);
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
  getFilteredDonations(filters: RecipeQuery) {
    let params = new HttpParams();
  
    if (filters.sortBy) {
      params = params.append('SortBy', filters.sortBy);
    }

    if (filters.isSortAscending != null) {
      params = params.append('IsSortAscending', filters.isSortAscending.toString());
    }

    if (filters.dateOfPosting) {
      const date = new Date(filters.dateOfPosting);
      const offset = date.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
      const isoDate = new Date(date.getTime() - offset).toISOString();
      params = params.append('DateOfPosting', isoDate);
      console.log(isoDate);
    }
    if (filters.temperature) {
      params = params.append('Temperature', filters.temperature.toString());
    }
    if (filters.timeToCook) {
      params = params.append('TimeToCook', filters.timeToCook.toString());
    }
    if (filters.ingredients) {
      params = params.append('Ingredients', filters.ingredients.toString());
    }
    if (filters.page) {
      params = params.append('Page', filters.page.toString());
    }

    if (filters.pageSize) {
      params = params.append('PageSize', filters.pageSize.toString());
    }
    console.log(`${this.url}/Recipes`, { params: params });
    return this.http.get(`${this.url}/Recipes`, { params: params });

}}
export interface AddRecipeDto{
  title: String,
  ingredients: String,
  instructions: String,
  preporationTime: Number,
  image: String,
  chefId: String,
  taste: Boolean,
  temperature: Number
}
export interface UpdateRecipeDto{
  title: String,
  ingredients: String,
  instructions: String,
  preporationTime: Number,
  image: String,
  taste: Boolean,
  temperature : Number
}
export interface RecipeQuery{
 sortBy?  : string,
 isSortAscending? : boolean,
 page : number,
 pageSize : number,
 dateOfPosting? : string
 timeToCook? : number,
 temperature? : number
 ingredients? :string
}