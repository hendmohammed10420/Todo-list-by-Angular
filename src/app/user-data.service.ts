import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './todos/todos';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private _router: Router) {

  }

  users: User[] = [];

  setUser() {

  }
  getUser() {
    return this.users;
  }
  signUpUser(user: User) {
    let Users = localStorage.getItem('users')
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(user))
    console.log(this.users)
  }

  loginUser(user: User) {
    if (this.users.findIndex(e => e.username === user.username) !== -1) {
      const index = this.users.findIndex(e => e.username === user.username)

      this._router.navigate(['Todo'])
    }
    else {
      alert("Wrong quote or username")
    }
  }
}
