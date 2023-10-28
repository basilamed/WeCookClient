import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedRecipesComponent } from './posted-recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipeService } from 'src/app/services/recipe.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('PostedRecipesComponent', () => {
  let component: PostedRecipesComponent;
  let fixture: ComponentFixture<PostedRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostedRecipesComponent], 
      imports : [HttpClientModule, MatDialogModule],
      providers: [
        RecipeService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: () => of({}), 
              get: (param: string) => {
               if (param === 'id') {
                  return 'mockedUserId';
                }
                return 'someDefaultValue'; 
              },
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(PostedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
