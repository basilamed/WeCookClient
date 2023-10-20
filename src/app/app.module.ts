import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecipeComponent } from './forms/add-recipe/add-recipe.component';
import { SingleRecipeComponent } from './pages/single-recipe/single-recipe.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { ApproveUsersComponent } from './pages/approve-users/approve-users.component';
import { UpdateUserComponent } from './forms/update-user/update-user.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ChangePasswordComponent } from './forms/change-password/change-password.component';
import { NewCommentComponent } from './forms/new-comment/new-comment.component';
import { RecipeCommentsComponent } from './composite/recipe-comments/recipe-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    WelcomeComponent,
    NavigationComponent,
    AddRecipeComponent,
    SingleRecipeComponent,
    FavouritesComponent,
    ApproveUsersComponent,
    UpdateUserComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    NewCommentComponent,
    RecipeCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
