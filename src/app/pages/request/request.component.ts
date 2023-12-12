import { Component } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router'
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  user: any = [];
  success: boolean = false;
  userId = ''

  constructor(public userService : UserService,
    public Router : Router,
    public router: ActivatedRoute,
    public dialog: MatDialog,
    private location: Location) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.userId = (params.get('id') ?? "");
    });
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
      console.log(this.user)
    })
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.requestChef();
      }
    });
  }

  requestChef(){
    this.userService.requestChef(this.user.id).subscribe(data => {
      //this.Router.navigate(['/'])
    },
    err => {
      console.log(err)
    })
  }

}
