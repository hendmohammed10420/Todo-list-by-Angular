import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Todo } from '../todos/todos';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  dataInput: string = '';
  title = 'ToDO';
  ls: Todo[] = [];
  constructor(private _httpToDo: HttpService) {
    this._httpToDo.getAllTodos().subscribe((res: any) => {
      this.ls = res.todos;
    })

  }
}
