import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CommentService, AddCommentDto} from 'src/app/services/comment.service';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {
  @Input() recipe: any = {};
  @Input() user: any = [];

  constructor(private router: ActivatedRoute, 
    public commentService : CommentService, 
    public dialog: MatDialog, public Router : Router) { }

  form = new FormGroup({
    rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    description: new FormControl('', [Validators.required, Validators.min(10), Validators.max(150)]),
  })

  get Rating() {
    return this.form.get('rating');
  }
  get Description() {
    return this.form.get('description');
  }

  async openConfirmationDialog(): Promise<void> {
    console.log(this.user.id)
    console.log(this.recipe.id)

    const dialogRef = this.dialog.open(ConfirmationComponent);
    try {
      const result = await dialogRef.afterClosed().toPromise();
      if (result) {
        await this.SubmitComment();
        this.Router.navigate([`/recipe/${this.recipe.id}`]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async SubmitComment(): Promise<void> {
    try {
        const d: AddCommentDto = {

          rating: +(this.Rating?.value ?? 0),
          description: this.Description?.value ?? '',
          userId: this.user.id,
          recipeId: this.recipe.id
        };
        console.log(d);
        await this.commentService.addComment(d).toPromise();
        this.Router.navigate([`/`]);
      }
      catch (error) {
      console.log(error);
    }
  }
 
}
