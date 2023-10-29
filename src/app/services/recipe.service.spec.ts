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
  
  it('should test getRecipe', () => {
    const response = {
      id : "jjhnasknvknadsockjnca",
      title : "Recipe 1",
      ingredients : "jaja,2 kasike praska za pecivo",
      instructions : "zbutas sve",
      preporationTime : "20",
      taste : "true",
      temperature : "200",
      image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
      postingDate : "10/28/2023 15:45:30",
      chefId : "jhnasknvknadsockjnca",
    };

    service.getRecipe(1).subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpController.expectOne(`${url.url}/Recipes/1`);
    expect(req.request.method).toBe('GET');
  }
  );
  it('should test getAllRecipes', () => {
    const response = [
      {
        id : "jjhnasknvknadsockjnca",
        title : "Recipe 1",
        ingredients : "jaja,2 kasike praska za pecivo",
        instructions : "zbutas sve",
        preporationTime : "20",
        taste : "true",
        temperature : "200",
        image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
        postingDate : "10/28/2023 15:45:30",
        chefId : "jhnasknvknadsockjnca",
      },
      {
        id : "jjhnasknvknadsockjnca",
        title : "Recipe 1",
        ingredients : "jaja,2 kasike praska za pecivo",
        instructions : "zbutas sve",
        preporationTime : "20",
        taste : "true",
        temperature : "200",
        image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
        postingDate : "10/28/2023 15:45:30",
        chefId : "jhnasknvknadsockjnca",
      }
    ];

    service.getAllRecipes().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpController.expectOne(`${url.url}/Recipes`);
    expect(req.request.method).toBe('GET');
  }
  );
  it ( 'should test addRecipe', () => {
    const response = {
      title : "Recipe 1",
      ingredients : "jaja,2 kasike praska za pecivo",
      instructions : "zbutas sve",
      preporationTime : 20,
      taste : true,
      temperature : 200,
      image : "vdkjabevjhbekjvnlwcnkjlnwdcijlnwc",
      chefId : "jhnasknvknadsockjnca",
    };

    service.addRecipe(response).subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpController.expectOne(`${url.url}/Recipes`);
    expect(req.request.method).toBe('POST');
  }
  );
  it('should test deleteRecipe', () => {
    service.deleteRecipe(1).subscribe((res) => {
      expect(res).toEqual({});
    });

    const req = httpController.expectOne(`${url.url}/Recipes/1`);
    expect(req.request.method).toBe('DELETE');
  }
  );
});
