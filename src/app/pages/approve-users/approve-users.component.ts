import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-approve-users',
  templateUrl: './approve-users.component.html',
  styleUrls: ['./approve-users.component.css']
})
export class ApproveUsersComponent {
  users: any[] = []
  regularUsers: any[] = []
  displayedColumns: string[] = ['ime', 'prezime', 'email', 'dugme1', 'dugme2'];
  constructor(private userSerivce: UserService) { }

  ngOnInit(): void {
    this.userSerivce.getPendingUsers().subscribe((response: any) => {
      this.users = response;
      console.log(this.users);
    })
    this.userSerivce.getAllChefRequests().subscribe((response: any) => {
      this.regularUsers = response;
      console.log(this.regularUsers);
    })
  }
  delete(id: string){
    this.userSerivce.deleteUser(id).subscribe(data => {
      this.ngOnInit();
    })
  }

  update(id: string){
    this.userSerivce.approveUser(id).subscribe(data => {
      this.ngOnInit();
    })
  }

  approveChef(id: string){
    this.userSerivce.approveChef(id).subscribe(data => {
      this.ngOnInit();
    })
  }

  disapproveChef(id: string){ 
    this.userSerivce.disapproveChef(id).subscribe(data => {
      this.ngOnInit();
    })
  }

}
