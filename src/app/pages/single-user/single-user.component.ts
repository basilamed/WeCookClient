import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  id: string = '';
  userDetails: any = {};

  constructor(private userService: UserService,
     private router: Router, 
     private route: ActivatedRoute,
      public dialog: MatDialog) {}

  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(this.id).subscribe((data: any) => {
      this.userDetails = data;
      console.log(this.userDetails);
    });
  }
  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteUser();
      }
    });
  }

  deleteUser(){
    this.userService.deleteUser(this.id).subscribe((data: any) => {
      this.router.navigate(['/all-approved-users']);
    });
  }

}
