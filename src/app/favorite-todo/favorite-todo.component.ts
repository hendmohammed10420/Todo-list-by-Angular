import { Component } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Todo, User } from '../todos/todos';

@Component({
  selector: 'app-favorite-todo',
  templateUrl: './favorite-todo.component.html',
  styleUrls: ['./favorite-todo.component.css']
})
export class FavoriteTodoComponent {
  user: User[] = [];
  favorite: Todo[] = [];
  constructor(private _favorit: ToDOService) {
    this.favorite = this._favorit.getAllFavorite();
  }
}
