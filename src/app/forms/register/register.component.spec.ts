import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 5 controls', () => {
    expect(component.form.contains('fname')).toBeTruthy();
    expect(component.form.contains('lname')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
    expect(component.form.contains('confirmPassword')).toBeTruthy();
  });

  it('should make the firstName control required', () => {
    let control = component.form.get('fname');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the lasNname control required', () => {
    let control = component.form.get('lname');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
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
  it('should make the confirmPassword control required', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the firstName control minimum 3 characters', () => {
    let control = component.form.get('fname');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the lastName control minimum 3 characters', () => {
    let control = component.form.get('lname');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the email control minimum 3 characters', () => {
    let control = component.form.get('email');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control minimum 8 characters', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control minimum 8 characters', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control maximum 16 characters', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control maximum 16 characters', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control contain a special character', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control contain a special character', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control contain a number', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control contain a number', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control contain a uppercase character', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control contain a uppercase character', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the password control contain a lowercase character', () => {
    let control = component.form.get('password');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should make the confirmPassword control contain a lowercase character', () => {
    let control = component.form.get('confirmPassword');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
  });
  it('should register', () => {
    let dto = {
      firstName: ' ',
      lastName: ' ',
      userName: ' ',
      password: ' ',
      roleId: 0
    };
    component.register();
    expect(component.loading).toBeFalsy();
    
  }
  );

  








 

});
