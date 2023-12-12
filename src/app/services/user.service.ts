import { Injectable } from '@angular/core';
import { env } from '../env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = env.url;
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post(`${this.url}/Users/login`, credentials);
  }

  login_user(log: any){
    const isLoggedIn = log && log.token;
    if(isLoggedIn){
      this._isLoggedIn.next(true);
    } else {
      this._isLoggedIn.next(false);
    }
  }

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');
  }

  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  isLogedIn(){
    const token = localStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }

  register(dto: RegisterDto){
    return this.http.post(`${this.url}/Users/register`, dto);
  }
  isAdmin(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.roleId === 1){
      return true;
    }
    return false;
  }

  isChef(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.roleId === 2){
      return true;
    }
    return false;
  }

  isRegularUser(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.roleId === 3){
      return true;
    }
    return false;
  }

  hasImage(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.image){
      return true;
    }
    return false;
  }

  getUserById(id: string){
    return this.http.get(`${this.url}/Users/get-user-by-id/${id}`);
  }

  getAllUsers(){
    return this.http.get(`${this.url}/Users/get-all-users`);
  }

  updateUser(id: string, dto: UpdateDto){
    return this.http.put(`${this.url}/Users/update-user/${id}`, dto);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.url}/Users/delete-user/${id}`);
  }

  changePassword(id: string, pass: ChangePasswordDto){
    return this.http.put(`${this.url}/Users/change-password/${id}`, pass);
  }  

  verify(email: string, token: string){
    return this.http.get(`${this.url}/Users/verify?userId=${email}&token=${token}`);
  }
  
  getPendingUsers(){
    return this.http.get(`${this.url}/Users/get-all-unapproved-users`);
  }
  approveUser(id : string){
    return this.http.put(`${this.url}/Users/approve-user/${id}`, {});
  }
  getAllChefRequests(){
    return this.http.get(`${this.url}/Users/get-all-chef-requests`);
  }
  approveChef(id : string){
    return this.http.get(`${this.url}/Users/approve-chef-request/${id}`, {});
  }
  disapproveChef(id : string){
    return this.http.get(`${this.url}/Users/disapprove-chef-request/${id}`, {});
  } 
  requestChef(id : string){
    return this.http.get(`${this.url}/Users/request-chef/${id}`, {});
  }

}
export interface RegisterDto{
  userName: String,
  firstName: String,
  lastName: String,
  roleId: Number,
  password: String
}
export interface emailDto{
  email: string;
}
export interface resetDto{
  userName: string;
  token: string;
  password: string;
}
export interface UpdateDto{
  firstName: string;
  lastName: string;
  image: string;
}
export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
