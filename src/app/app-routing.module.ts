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



const routes: Routes = [
  { path : "", component: WelcomeComponent},
  { path : "login", component: LoginComponent},
  { path : "register", component: RegisterComponent},
  { path : "add-recipe/:id", component: AddRecipeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
