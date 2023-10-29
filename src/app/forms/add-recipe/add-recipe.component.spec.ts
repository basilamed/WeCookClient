import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


describe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [
        RecipeService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: () => of({}), 
              get: (param: string) => {
               if (param === 'id') {
                  return 'mockedChefId';
                }
                return 'someDefaultValue'; 
              },
            },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have a form with 7 controls', () => {
    expect(component.form.contains('title')).toBeTruthy();
    expect(component.form.contains('ingredients')).toBeTruthy();
    expect(component.form.contains('instructions')).toBeTruthy();
    expect(component.form.contains('preporationTime')).toBeTruthy();
    expect(component.form.contains('image')).toBeTruthy();
    expect(component.form.contains('taste')).toBeTruthy();
    expect(component.form.contains('temperature')).toBeTruthy();
  }
  );
  it('should submitRecipe', () => { 
    let recipeService = TestBed.inject(RecipeService);
    let spy = spyOn(recipeService, 'addRecipe').and.callThrough();
    component.submitRecipe();
    expect(spy).toHaveBeenCalled();
  }
  );

});
