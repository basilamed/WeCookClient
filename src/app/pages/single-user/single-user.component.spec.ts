import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserComponent } from './single-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
 
describe('SingleUserComponent', () => {
  let component: SingleUserComponent;
  let fixture: ComponentFixture<SingleUserComponent>;

  beforeEach(() => {
    const activatedRoute = {
      snapshot: {
        paramMap: convertToParamMap({ id: 'mockedUserId' }), 
      },
    };
    TestBed.configureTestingModule({
      declarations: [SingleUserComponent],
      imports: [ HttpClientModule, MatDialogModule],
      providers: [
        UserService,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        },
      ],
    });
    fixture = TestBed.createComponent(SingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
