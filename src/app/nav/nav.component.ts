import { Component } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Todo, User } from '../todos/todos';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user: User[] = [];
  favorite: Todo[] = [];
  constructor(private _data: UserDataService, private _favorite: ToDOService) {
    this.user = this._data.getUser();
    console.log(this.user);
    this.favorite = this._favorite.getAllFavorite();
    this._favorite.getDeletedTodo();
    this._favorite.CompletedTodo();

  }
  getAllFavorites() {
    this._favorite.getAllFavorite();

  }
  getCountFavorite() {
    return this._favorite.getcountFavorite();
  }

  getDeletedTodo() {
    this._favorite.getDeletedTodo();
  }
  getCountdeleted() {
    return this._favorite.getcountDeleted();
  }
  completedTodo() {
    return this._favorite.CompletedTodo();
  }




}
