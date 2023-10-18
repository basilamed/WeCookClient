import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  recipes : any= []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.RecipeService.getAllRecipes().subscribe(data =>{
      this.recipes = data;
      console.log(this.recipes)
    })
  }

}
