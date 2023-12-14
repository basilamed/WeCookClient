import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestComponent]
      ,imports: [HttpClientModule, MatDialogModule]
      ,providers: [
        UserService,
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
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
