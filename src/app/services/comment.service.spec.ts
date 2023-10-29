import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CommentService', () => {
  let service: CommentService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommentService);
    httpController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getAllRecipiesComments', () => {
    service.getAllRecipiesComments(1).subscribe();
    const req = httpController.expectOne(`${service.url}/Comments/recipe/1`);
    expect(req.request.method).toBe('GET');
  });
  it('should call getAllUsersComments', () => {
    service.getAllUsersComments('1').subscribe();
    const req = httpController.expectOne(`${service.url}/Comments/user/1`);
    expect(req.request.method).toBe('GET');
  });
  it('should call addComment', () => {
    service.addComment({rating: 1, description: 'test', userId: '1', recipeId: 1}).subscribe();
    const req = httpController.expectOne(`${service.url}/Comments`);
    expect(req.request.method).toBe('POST');
  });
  it('should call deleteComment', () => {
    service.deleteComment(1).subscribe();
    const req = httpController.expectOne(`${service.url}/Comments/1`);
    expect(req.request.method).toBe('DELETE');
  });
});
