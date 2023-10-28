import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    const mockActivatedRoute = {
      paramMap: of(),
      queryParams: of(),
    };

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [HttpClientModule, MatPaginatorModule, FormsModule, MatProgressSpinnerModule, BrowserAnimationsModule],
      providers: [
        RecipeService,
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute, 
        },
      ],
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
