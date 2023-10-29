import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUserComponent } from './update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserComponent],
      imports: [MatIconModule, HttpClientModule, ReactiveFormsModule, MatDialogModule],
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
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'should have a form with 3 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('surname')).toBeTruthy();
    expect(component.form.contains('image')).toBeTruthy();
  }
  );
  it('should updateUser', () => { 
    let userService = TestBed.inject(UserService);
    let spy = spyOn(userService, 'updateUser').and.callThrough();
    component.updateUser();
    expect(spy).toHaveBeenCalled();
  }
  );
});
