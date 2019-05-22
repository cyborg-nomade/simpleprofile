import { Component } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  showAddress = true;
  person = {
    name: 'John Dee',
    age: 34,
    addres: {
      street: '400 Walnut St',
      city: 'Lynn',
      state: 'MA'
    },
    avatar:
      'https://zcoin.io/wp-content/uploads/2017/01/blank-avatar-300x300.png',
    friends: [
      { name: 'Bob', age: 34 },
      { name: 'Shelly', age: 36 },
      { name: 'Jack', age: 32 },
      { name: 'Steve', age: 40 }
    ]
  };

  constructor() {
    this.title = 'User Profile';
  }
}
