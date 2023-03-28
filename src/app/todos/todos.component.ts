import { Component, Input } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Todo } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title = 'ToDO';
  ls: Todo[] = [];
  dataInput: string = '';


  constructor(private _todoService: ToDOService) {
    this.ls = this._todoService.list;

  }


  AddTask() {

    this._todoService.AddTask(this.dataInput)

  }
}
