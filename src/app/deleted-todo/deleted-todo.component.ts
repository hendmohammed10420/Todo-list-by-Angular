import { Component } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Todo } from '../todos/todos';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.css']
})
export class DeletedTodoComponent {
  deletedTodo: Todo[] = [];
  constructor(private _deletedTodo: ToDOService) {
    this.deletedTodo = this._deletedTodo.getDeletedTodo();
  }

}
