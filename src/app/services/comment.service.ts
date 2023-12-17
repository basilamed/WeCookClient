import { Injectable } from '@angular/core';
import { env, envMicro } from '../env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = env.url;
  urlMicro = envMicro.url;

  constructor(private http: HttpClient) { }

  getAllRecipiesComments(id : Number) {
    return this.http.get(`${this.urlMicro}/Comments/get-all-comments-by-recipe/${id}`);
  }
  getAllUsersComments(id : String) {
    return this.http.get(`${this.url}/Comments/user/${id}`);
  }
  addComment(dto: AddCommentDto) {
    return this.http.post(`${this.urlMicro}/Comments/create-comment`, dto);
  }
  deleteComment(id : Number){
    return this.http.delete(`${this.urlMicro}/Comments/delete-comment/${id}`)
  }
}
export interface AddCommentDto{
  rating: Number,
  description: String,
  userId: String,
  recipeId: Number
}
