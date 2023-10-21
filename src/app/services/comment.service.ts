import { Injectable } from '@angular/core';
import { env } from '../env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = env.url;

  constructor(private http: HttpClient) { }

  getAllRecipiesComments(id : Number) {
    return this.http.get(`${this.url}/Comments/recipe/${id}`);
  }
  getAllUsersComments(id : String) {
    return this.http.get(`${this.url}/Comments/user/${id}`);
  }
  addComment(dto: AddCommentDto) {
    return this.http.post(`${this.url}/Comments`, dto);
  }
  deleteComment(id : Number){
    return this.http.delete(`${this.url}/Comments/${id}`)

  }
}
export interface AddCommentDto{
  rating: Number,
  description: String,
  userId: String,
  recipeId: Number
}
