import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteTodoComponent } from './favorite-todo/favorite-todo.component';
import { DeletedTodoComponent } from './deleted-todo/deleted-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    LoginComponent,
    NavComponent,
    FavoriteTodoComponent,
    DeletedTodoComponent,
    NotFoundComponent,
    UserDetailsComponent,
    SignUpComponent,
    HttpComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
