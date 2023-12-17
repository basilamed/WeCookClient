import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  user: any = [];
  id = '';
  currentUser: any = [];
  public currentUserSubscription!: Subscription; // Promenjeno private u public
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(public userService:UserService, public router: Router,  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const userJSON = localStorage.getItem('user');

    if (userJSON) {
      this.user = JSON.parse(userJSON);
      this.userService.setCurrentUser(this.user);
      this.currentUserSubject.next(this.user);
      this.id = this.user.id;
      console.log('User from local storage:', this.user);

      this.userService.getUserById(this.id).subscribe((res: any) => {
        this.currentUser = res;
        console.log('User from getUserById:', res);
        console.log('Current user:', this.currentUser);

        this.user = this.currentUser;
        this.userService.setCurrentUser(this.user);
        this.currentUserSubject.next(this.user);

        localStorage.setItem('user', JSON.stringify(this.user));

        this.cdr.detectChanges();
      });
    }

    // Subscribe to changes in the user data
    this.currentUserSubscription = this.userService
      .getCurrentUser()
      .subscribe((user) => {
        this.user = user;
        console.log('User from subscription:', this.user);
        this.cdr.detectChanges();
      });
  }


  logout(){
    this.userService.logout();
  }
  addRecipe(){
    this.id = this.user.id
    this.router.navigate([`/add-recipe/${this.id}` ])
  }
  openInfo(id: string){
    this.router.navigate([`/editUser/${id}`])
  }
  ChangePassword(id: string){
    this.router.navigate([`/changePassword/${id}`])
  }
  postedRecipes(id : string){
    this.router.navigate([`/posted-recipes/${id}`])
  }
  favorites(id : string){
    this.router.navigate([`/my-favorites/${id}`])
  }
  requestChef(id : string){
    this.router.navigate([`/request/${id}`])
  }
  allUsers(){
    this.router.navigate([`/all-approved-users`])
  }
}
