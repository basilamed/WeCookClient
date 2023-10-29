import { TestBed } from '@angular/core/testing';

import { FavouriteService } from './favourite.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FavouriteService', () => {
  let service: FavouriteService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    service = TestBed.inject(FavouriteService);
    httpController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getAllUsersFavourites', () => {
    service.getAllUsersFavourites("1").subscribe();
    const req = httpController.expectOne(`${service.url}/Favorites/get-favorites/1`);
    expect(req.request.method).toBe('GET');
  }
  );
  it('should call addFavorite', () => {
    service.addFavorite({userId: "1", recipeId: 1}).subscribe();
    const req = httpController.expectOne(`${service.url}/Favorites/add-favorite`);
    expect(req.request.method).toBe('POST');
  }
  );
  it('should call deleteFavorite', () => {
    service.deleteFavorite({userId: "1", recipeId: 1}).subscribe();
    const req = httpController.expectOne(`${service.url}/Favorites/delete-favorite/1/1`);
    expect(req.request.method).toBe('DELETE');
  }
  );

});
