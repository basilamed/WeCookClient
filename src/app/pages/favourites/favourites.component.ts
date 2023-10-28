import { Component } from '@angular/core'; 
import { Router, ActivatedRoute }   from '@angular/router'
import { UserService } from 'src/app/services/user.service';
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
