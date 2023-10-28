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
});
