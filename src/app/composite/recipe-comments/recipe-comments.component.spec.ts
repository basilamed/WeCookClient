import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCommentsComponent } from './recipe-comments.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('RecipeCommentsComponent', () => {
  let component: RecipeCommentsComponent;
  let fixture: ComponentFixture<RecipeCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCommentsComponent],
      imports: [HttpClientModule, MatDialogModule], 
    });

    fixture = TestBed.createComponent(RecipeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
