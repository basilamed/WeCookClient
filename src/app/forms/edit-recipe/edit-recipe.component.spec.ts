import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeComponent } from './edit-recipe.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditRecipeComponent', () => {
  let component: EditRecipeComponent;
  let fixture: ComponentFixture<EditRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecipeComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        RecipeService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: () => of({}), 
              get: (param: string) => {
               if (param === 'id') {
                  return 'mockedRecipeId';
                }
                return 'someDefaultValue'; 
              },
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(EditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'should have a form with 7 controls', () => {
    expect(component.form.contains('title')).toBeTruthy();
    expect(component.form.contains('ingredients')).toBeTruthy();
    expect(component.form.contains('instructions')).toBeTruthy();
    expect(component.form.contains('preporationTime')).toBeTruthy();
    expect(component.form.contains('image')).toBeTruthy();
    expect(component.form.contains('taste')).toBeTruthy();
    expect(component.form.contains('temperature')).toBeTruthy();
  }
  );
  it('should updateRecipe', () => { 
    let recipeService = TestBed.inject(RecipeService);
    let spy = spyOn(recipeService, 'updateRecipe').and.callThrough();
    component.updateRecipe();
    expect(spy).toHaveBeenCalled();
  }
  );
  
  
});
