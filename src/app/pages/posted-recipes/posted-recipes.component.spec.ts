import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedRecipesComponent } from './posted-recipes.component';

describe('PostedRecipesComponent', () => {
  let component: PostedRecipesComponent;
  let fixture: ComponentFixture<PostedRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostedRecipesComponent]
    });
    fixture = TestBed.createComponent(PostedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
