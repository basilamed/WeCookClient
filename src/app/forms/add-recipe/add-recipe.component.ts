import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService, AddRecipeDto } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  userId : String = ""
  imageData =''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private UserService : UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = (params.get('id') ?? "");
    });}

    form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      instructions : new FormControl('', [Validators.required]),
      preporationTime : new FormControl('', [Validators.required]),
      image : new FormControl('', [Validators.required]),
      taste : new FormControl('', [Validators.required]),
      temperature : new FormControl('', [Validators.required]),
    })

    get Title() {
      return this.form.get('title');
    }

    get Ingredients() {
      return this.form.get('ingredients');
    }

    get Instructions() {
      return this.form.get('instructions');
    }
  
    get PreporationTime() {
      return this.form.get('preporationTime');
    }
  
    get Image() {
      return this.form.get('image');
    }
  
    get Taste() {
      return this.form.get('taste');
    }

    get Temperature() {
      return this.form.get('temperature');
    }

    onImageSelected(event: any) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    dataURItoBlob(dataURI: string): Blob {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    }
    submitRecipe() {
      const formData = new FormData();
      formData.append('image', this.imageData);

      const recipeDto: AddRecipeDto = {
        title: this.Title?.value || '', 
        ingredients: this.Ingredients?.value || '', 
        instructions: this.Instructions?.value || '', 
        preporationTime: this.PreporationTime?.value || '', 
        image: this.imageData || '', 
        chefId: this.userId, 
        taste: this.Taste?.value === 'true',
        temperature : this.Temperature?.value || ''
      };
  
      this.RecipeService.addRecipe(recipeDto).subscribe(
        (response) => {
          console.log('Recipe added successfully');
          this.router.navigate([`/`]);
        },
        (error) => {
          console.error('Error adding recipe:', error);
        }
      );
    }


}
