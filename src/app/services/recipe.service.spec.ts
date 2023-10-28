import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { env } from '../env';


describe('RecipeService', () => {
  let service: RecipeService;
  let httpController: HttpTestingController;
  let id: string = "b1133582-846c-4d40-91ed-1920cba8eee6";
  let url = env;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecipeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should test getAllRecipesByUser', () => {
  //   const response = [
  //     {
  //        id : "jjhnasknvknadsockjnca",
  //        title : "Recipe 1",
  //        ingredients : "jaja,2 kasike praska za pecivo",
  //        instructions : "zbutas sve",
  //        preporationTime : "20",
  //        taste : "true",
  //        temperature : "200",
  //        image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
  //        postingDate : "10/28/2023 15:45:30",
  //        chefId : "jhnasknvknadsockjnca",
  //     },
  //     {
  //       id : "jjhnasknvknadsockjnca",
  //        title : "Recipe 3",
  //        ingredients : "3 jaja,2 kasike praska za pecivo",
  //        instructions : "zbutas sve",
  //        preporationTime : "20",
  //        taste : "true",
  //        temperature : "200",
  //        image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
  //        postingDate : "10/28/2023 15:45:30",
  //        chefId : "jhnasknvknadsockjnca",
  //     }
  //   ];

  //   service.getAllRecipesByUser(id).subscribe((res) => {
  //     expect(res).toEqual(response);
  //   });

  //    const req = httpController.expectOne({
  //      method: 'GET',
  //      url: `${url}/Recipes/chef/${id}`,
  //    });

  //   req.flush(response);
  // });
});
