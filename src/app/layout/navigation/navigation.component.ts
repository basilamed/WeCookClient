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
  id = 0;
  public currentUserSubscription!: Subscription; // Promenjeno private u public
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(public userService:UserService, public router: Router,  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      this.user = JSON.parse(userJSON);
      this.userService.setCurrentUser(this.user);
      this.currentUserSubject.next(this.user);
    }

    this.currentUserSubscription = this.userService
    .getCurrentUser()
    .subscribe((user) => {
      this.user = user;
      this.cdr.detectChanges();
    });

  this.currentUserSubscription = this.userService
    .getCurrentUser()
    .subscribe((user) => {
      this.user = user;
      this.currentUserSubject.next(user);
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

}
