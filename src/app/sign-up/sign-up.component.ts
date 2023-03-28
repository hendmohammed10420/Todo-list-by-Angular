import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDOService } from '../to-do.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private _user: UserDataService, private _router: Router) {

  }
  submitMyForm(form: NgForm) {
    this._user.signUpUser(form.value);
    this._router.navigate(['login'])
  }
}
