import { Component } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router'
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { FavouriteService, AddFavourite } from 'src/app/services/favourite.service';
import { Location } from '@angular/common'; 

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
  favorite: boolean = false
  userId = ''
  userWithFav : any =[]

  constructor(private router: ActivatedRoute,
      public userService : UserService,
      public recipeService : RecipeService,
      public Router : Router,
      public dialog: MatDialog,
      public favoriteService: FavouriteService,
      private location: Location) { }

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
    this.userService.getUserById(this.user.id).subscribe(data =>{
      this.userWithFav = data;
      console.log(this.userWithFav)
    })

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
  addFavorite(){
    const d: AddFavourite ={
      userId : this.user.id,
      recipeId : this.recipe.id
    }
    console.log(d)
    this.favoriteService.addFavorite(d).subscribe((response) => {
      window.location.reload();
    });
  
  }
  removeFavorite(){
    const d: AddFavourite ={
      userId : this.user.id,
      recipeId : this.recipe.id
    }
    console.log(d)
    this.favoriteService.deleteFavorite(d).subscribe((response) => {
      window.location.reload();
    });
  }
  isRecipeFavorite(): boolean {
    if (this.userWithFav && this.userWithFav.favoriteRecipes) {
      return this.userWithFav.favoriteRecipes.some((favorite: { recipeId: any; }) => favorite.recipeId === this.recipe.id);
    }
    return false;
  }
  getIngredients(): string[] {
    if (this.recipe.ingredients && typeof this.recipe.ingredients === 'string') {
      return this.recipe.ingredients.split(',');
    }
    return [];
  }


}
