import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { env } from '../env';

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],});
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call login', () => {
    service.login({email: " ", password: " "}).subscribe();
    const req = httpController.expectOne(`${service.url}/Users/login`);
    expect(req.request.method).toBe('POST');}
  );
  it('should call getUserById', () => {
    service.getUserById("1").subscribe();
    const req = httpController.expectOne(`${service.url}/Users/get-user-by-id/1`);
    expect(req.request.method).toBe('GET');}
  );
  it('should call deleteUser', () => {
    service.deleteUser("1").subscribe();
    const req = httpController.expectOne(`${service.url}/Users/delete-user/1`);
    expect(req.request.method).toBe('DELETE');}
  );
  it('should call getAllUsers', () => {
    service.getAllUsers().subscribe();
    const req = httpController.expectOne(`${service.url}/Users/get-all-users`);
    expect(req.request.method).toBe('GET');}
  );
  it('should call changePassword', () => {
    service.changePassword("1", {oldPassword: " ", newPassword: " ", confirmPassword: " "}).subscribe();
    const req = httpController.expectOne(`${service.url}/Users/change-password/1`);
    expect(req.request.method).toBe('PUT');}
  );
  it('should call verify', () => {
    service.verify(" ", " ").subscribe();
    const req = httpController.expectOne(`${service.url}/Users/verify?userId= &token= `);
    expect(req.request.method).toBe('GET');}
  );
  it ( 'should call getPendingUsers', () => {
    service.getPendingUsers().subscribe();
    const req = httpController.expectOne(`${service.url}/Users/get-all-unapproved-users`);
    expect(req.request.method).toBe('GET');}
  );
  it ( 'should call approveUser', () => {
    service.approveUser("1").subscribe();
    const req = httpController.expectOne(`${service.url}/Users/approve-user/1`);
    expect(req.request.method).toBe('PUT');}
  );



});
