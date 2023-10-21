import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router'
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.css']
})
export class RecipeCommentsComponent {
  @Input() recipe: any = {};
  @Input() user: any = [];

  constructor(private UserService:UserService,
    public commentService : CommentService,
    public dialog: MatDialog,
    public Router : Router){}

  async openConfirmationDialog(id: Number): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    try {
      const result = await dialogRef.afterClosed().toPromise();
      if (result) {
        await this.DeleteComment(id);
        this.Router.navigate([`/recipe/${this.recipe.id}`]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteComment(id : Number): Promise<void> {
    try {
        await this.commentService.deleteComment(id).toPromise();
        this.Router.navigate([`/recipe/${this.recipe.id}`]);
      }
      catch (error) {
      console.log(error);
    }
  }

}
