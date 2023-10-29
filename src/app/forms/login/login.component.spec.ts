import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    activatedRoute = {
      paramMap: of(convertToParamMap({ success: 'true', success2: 'false' })),
      queryParamMap: of(convertToParamMap({})),
      queryParams: of({ success: 'true', success2: 'false' }), 
    } as any;

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        UserService,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a form with 2 controls', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });
  
  it('should make the email control required', () => {
    let control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    let control = component.form.get('password');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });


  it('should login', () => {
    let credentials = {
      userName: ' ',  
      password: ' '
    };
    component.login();
    expect(component.loading).toBeTruthy();
  }
  );









  



});
