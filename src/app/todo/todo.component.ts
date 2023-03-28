import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDOService } from '../to-do.service';
import { Todo } from '../todos/todos';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo = {
    id: 0,
    todo: "",
    completed: false,
    userId: 0,
    favorite: false
  };

  title = 'ToDO';

  list: Todo[] = [];

  constructor(private _todo: ToDOService, private _router: Router) {

  }


  DeleteItem() {
    this._todo.DeleteItem(this.todo.id)
    this._router.navigate(['Todo'])
    document.querySelector(".modal-backdrop")?.remove()
  }

  Done() {
    this._todo.Done(this.todo);
  }
  AddToFavorite() {
    this._todo.AddToFAvorite(this.todo.todo);

  }

}
