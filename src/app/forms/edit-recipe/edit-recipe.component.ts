import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateDto, UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { RecipeService, UpdateRecipeDto } from 'src/app/services/recipe.service'; 

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{
  id : Number = 0
  recipe : any = {}
  imageData =''
  image: String = ''
  error: boolean = false;
  success: boolean = false;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    instructions : new FormControl('', [Validators.required]),
    preporationTime : new FormControl('', [Validators.required]),
    image : new FormControl('', [Validators.required]),
    taste : new FormControl('', [Validators.required]),
    temperature : new FormControl('', [Validators.required]),
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private UserService : UserService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? '');
      this.RecipeService.getRecipe(this.id).subscribe(data => {
        this.recipe = data;
        console.log(this.recipe)
        this.image = this.recipe.image;
        this.form.patchValue({
          title: this.recipe.title,
          ingredients: this.recipe.ingredients,
          instructions: this.recipe.instructions,
          preporationTime: this.recipe.preporationTime,
          taste: this.recipe.taste,
          temperature: this.recipe.temperature,
      });
      })
    })
   }

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
  async updateRecipe(): Promise<void> {
    try {
      if (this.imageData) {
        const formData = new FormData();
        formData.append('image', this.imageData);
        const recipeData: UpdateRecipeDto = {
          title: this.Title?.value ?? '',
          ingredients: this.Ingredients?.value ?? '',
          instructions: this.Instructions?.value ?? '',
          preporationTime: +(this.PreporationTime?.value ?? 0),
          image: this.imageData,
          taste: this.Taste?.value === 'true',
          temperature: +(this.Temperature?.value ?? 0),
        };
        console.log(recipeData);
        await this.RecipeService.updateRecipe(this.recipe.id, recipeData).toPromise();
        this.router.navigate([`/edit-recipe/${this.recipe.id}`]);
      } else {
        const recipeData: UpdateRecipeDto = {
          title: this.Title?.value ?? '',
          ingredients: this.Ingredients?.value ?? '',
          instructions: this.Instructions?.value ?? '',
          preporationTime: +(this.PreporationTime?.value ?? 0),
          image: this.recipe.image,
          taste: this.Taste?.value === 'true',
          temperature: +(this.Temperature?.value ?? 0),
        };
        console.log(recipeData);
        await this.RecipeService.updateRecipe(this.recipe.id, recipeData).toPromise();
        this.router.navigate([`/edit-recipe/${this.recipe.id}`]);
      }
      this.success = true;
    } catch (error) {
      console.log(error);
      this.error = true;
    }
  }
  

} 
