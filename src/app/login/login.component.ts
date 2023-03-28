import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { User } from '../todos/todos';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup


  constructor(private _user: UserDataService, private _router: Router) {

    this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern(''),]),
      qoute: new FormControl(null, Validators.required)
    })


  }


  submit() {
    this._user.loginUser(this.myForm.value)
  }

  setUser() {

  }
}
