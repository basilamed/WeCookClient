import { Injectable } from '@angular/core';
import { env } from '../env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  url = env.url;

  constructor(private http: HttpClient) { }

  addFavorite(dto: AddFavourite) {
    return this.http.post(`${this.url}/Favorites/add-favorite`, dto);
  }
  deleteFavorite(dto: AddFavourite){
    return this.http.delete(`${this.url}/Favorites/delete-favorite/${dto.userId}/${dto.recipeId}`)
  }
  getAllUsersFavourites(id : String) {
    return this.http.get(`${this.url}/Favorites/get-favorites/${id}`);
  }

}
export interface AddFavourite{
  userId: String,
  recipeId: Number
}
