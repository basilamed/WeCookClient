import { Component } from '@angular/core'; 
import { Router, ActivatedRoute }   from '@angular/router'
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { CommentService } from 'src/app/services/comment.service';
import { FavouriteService } from 'src/app/services/favourite.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  recipes : any= []
  userId : String = ""

  constructor(private UserService:UserService, 
    public commentService : CommentService,
     public dialog: MatDialog, 
     public router : Router,
      public route : ActivatedRoute,
      public favoriteService: FavouriteService){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = (params.get('id') ?? "");
    });
    this.favoriteService.getAllUsersFavourites(this.userId).subscribe(data =>{
      this.recipes = data;
      console.log(this.recipes)
    })
  }
  openInfo(id: number) {
    this.router.navigate([`/recipe/${id}`]);
  }
}
