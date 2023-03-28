import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedTodoComponent } from './deleted-todo/deleted-todo.component';
import { FavoriteTodoComponent } from './favorite-todo/favorite-todo.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'Todo', component: TodosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'Todo/Favorite', component: FavoriteTodoComponent},
  {path: 'Todo/deleted', component: DeletedTodoComponent },
  { path: 'Todo/user', component: UserDetailsComponent},
  {path: '', component: SignUpComponent},
  { path: 'http', component: HttpComponent},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
