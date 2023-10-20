import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCommentsComponent } from './recipe-comments.component';

describe('RecipeCommentsComponent', () => {
  let component: RecipeCommentsComponent;
  let fixture: ComponentFixture<RecipeCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCommentsComponent]
    });
    fixture = TestBed.createComponent(RecipeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
