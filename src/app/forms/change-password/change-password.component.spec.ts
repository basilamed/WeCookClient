import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordComponent } from './change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [HttpClientModule, ReactiveFormsModule, MatDialogModule],
      providers: [
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
        MatDialog
      ],
    });
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
