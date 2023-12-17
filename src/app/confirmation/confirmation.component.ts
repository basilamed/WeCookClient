import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private location: Location
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
    //this.location.back();
    //refresh page after 1 second
    setTimeout(function () {
      window.location.reload();
    }, 500);
    //window.location.reload();
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
