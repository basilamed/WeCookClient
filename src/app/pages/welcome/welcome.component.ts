import { Component } from '@angular/core';
import { RecipeService, RecipeQuery } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  recipes : any= []
  filters!: RecipeQuery;
  currentPage: number = 1;
  pageSize: number = 2; 
  totalItems!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecipeService: RecipeService
  ) {this.filters = {
    temperature: 0,
    timeToCook:0,
    sortBy: '',
    isSortAscending: true,
    dateOfPosting: undefined,
    page: 1,
    pageSize: 2
  };}

  ngOnInit(): void {
    // this.RecipeService.getAllRecipes().subscribe(data =>{
    //   this.recipes = data;
    //   console.log(this.recipes)
    // })
    this.filters.pageSize = 2;
    this.loadDonations();
  }
  openInfo(id: number) {
    this.router.navigate([`/recipe/${id}`]);
  }
  loadDonations() {
    this.filters.page = this.currentPage; 
    this.filters.pageSize = this.pageSize;

    this.RecipeService.getFilteredDonations(this.filters).subscribe((res: any) => {
      this.recipes = res.items;
      this.totalItems = res.totalItems;
    }, err => {
      console.log(err);
    });
  }
  onOrderByChange() {
    this.filters.sortBy = 'DonationAmount';
    this.loadDonations();
  }
  apply() {
    if (this.filters.dateOfPosting) {
      const periodOfDate = new Date(this.filters.dateOfPosting);
      this.filters.dateOfPosting = `${periodOfDate.getMonth() + 1}-${periodOfDate.getDate()}-${periodOfDate.getFullYear()}`;
      
    }
  
    this.loadDonations();
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.filters.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.loadDonations();
  }


}
