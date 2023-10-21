import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router'
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-posted-recipes',
  templateUrl: './posted-recipes.component.html',
  styleUrls: ['./posted-recipes.component.css']
})
export class PostedRecipesComponent {
  recipes : any= []
  userId : String = ""

  constructor(private UserService:UserService, 
    public commentService : CommentService,
     public dialog: MatDialog, 
     public router : Router,
      public route : ActivatedRoute,
      public RecipeService: RecipeService){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = (params.get('id') ?? "");
    });
    this.RecipeService.getAllRecipesByUser(this.userId).subscribe(data =>{
      this.recipes = data;
      console.log(this.recipes)
    })
  }
  openInfo(id: number) {
    this.router.navigate([`/recipe/${id}`]);
  }
  editRecipe(id: number) {
    this.router.navigate([`/edit-recipe/${id}`]);
  }
  new(){
    this.router.navigate([`/add-recipe/${this.userId}`]);
  }
  async openConfirmationDialog(id: Number): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    try {
      const result = await dialogRef.afterClosed().toPromise();
      if (result) {
        await this.DeleteComment(id);
        this.router.navigate([`/posted-recipes/${this.userId}`]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteComment(id : Number): Promise<void> {
    try {
        await this.RecipeService.deleteRecipe(id).toPromise();
        this.router.navigate([`/posted-recipes/${this.userId}`]);
      }
      catch (error) {
      console.log(error);
    }
  }

}
