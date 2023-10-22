import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AddRecipeComponent } from './forms/add-recipe/add-recipe.component';
import { SingleRecipeComponent } from './pages/single-recipe/single-recipe.component';
import { UpdateUserComponent } from './forms/update-user/update-user.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { ApproveUsersComponent } from './pages/approve-users/approve-users.component';
import { ChangePasswordComponent } from './forms/change-password/change-password.component';
import { PostedRecipesComponent } from './pages/posted-recipes/posted-recipes.component';
import { EditRecipeComponent } from './forms/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path : "", component: WelcomeComponent},
  { path : "login", component: LoginComponent},
  { path : "register", component: RegisterComponent},
  { path : "add-recipe/:id", component: AddRecipeComponent},
  { path : "editUser/:id", component: UpdateUserComponent},
  { path : "changePassword/:id", component: ChangePasswordComponent},
  { path : "recipe/:id", component: SingleRecipeComponent},
  { path : "edit-recipe/:id", component: EditRecipeComponent},
  { path : "posted-recipes/:id", component: PostedRecipesComponent},
  { path : "my-favorites/:id", component: FavouritesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
