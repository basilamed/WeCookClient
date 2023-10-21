import { Component } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router'
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent {
  recipe: any = {}
  id: number = 0;
  user: any = [];
  success: boolean = false;

  constructor(private router: ActivatedRoute,
      public userService : UserService,
      public recipeService : RecipeService,
      public Router : Router,
      public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.success = params['success'] === 'true';
    });
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.recipeService.getRecipe(this.id).subscribe(data => {
        this.recipe = data;
        console.log(this.recipe)
      },
        err => {
          console.log(err)
          })
      
    })

    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      this.user = JSON.parse(userJSON);
    }
  }
  openConfirmationDialog(id: Number): void {
    const dialogRef = this.dialog.open(ConfirmationComponent);

    dialogRef.afterClosed().toPromise().then(result => {
        if (result) {
            this.DeleteComment(id);
            this.Router.navigate([`/`]);
        }
    }).catch(error => {
        console.log(error);
    });
}

DeleteComment(id: Number): void {
    try {
        this.recipeService.deleteRecipe(id).toPromise();
        this.Router.navigate([`/`]);
    } catch (error) {
        console.log(error);
    }
}
editRecipe(id: number) {
  this.Router.navigate([`/edit-recipe/${id}`]);
}


}
