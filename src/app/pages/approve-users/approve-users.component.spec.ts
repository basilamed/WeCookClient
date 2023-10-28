import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUsersComponent } from './approve-users.component';
import { HttpClientModule } from '@angular/common/http';

describe('ApproveUsersComponent', () => {
  let component: ApproveUsersComponent;
  let fixture: ComponentFixture<ApproveUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveUsersComponent],
      imports : [HttpClientModule]
    });
    fixture = TestBed.createComponent(ApproveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
