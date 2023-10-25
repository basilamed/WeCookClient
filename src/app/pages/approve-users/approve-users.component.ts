import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-approve-users',
  templateUrl: './approve-users.component.html',
  styleUrls: ['./approve-users.component.css']
})
export class ApproveUsersComponent {
  users: any[] = []
  displayedColumns: string[] = ['ime', 'prezime', 'email', 'uloga', 'dugme1', 'dugme2'];
  constructor(private userSerivce: UserService) { }

  ngOnInit(): void {
    this.userSerivce.getPendingUsers().subscribe((response: any) => {
      this.users = response;
      console.log(this.users);
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

}
