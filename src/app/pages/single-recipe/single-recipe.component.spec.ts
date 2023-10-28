import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleRecipeComponent } from './single-recipe.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { RecipeCommentsComponent } from 'src/app/composite/recipe-comments/recipe-comments.component';

describe('SingleRecipeComponent', () => {
  let component: SingleRecipeComponent;
  let fixture: ComponentFixture<SingleRecipeComponent>;

  beforeEach(() => {
    const activatedRoute = {
      paramMap: of(convertToParamMap({ id: '1' })), 
      queryParams: of({ success: 'true' }), 
    };

    TestBed.configureTestingModule({
      declarations: [SingleRecipeComponent, RecipeCommentsComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        RecipeService,
        UserService, 
        FavouriteService, 
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
        Location, 
      ],
    });

    fixture = TestBed.createComponent(SingleRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

