import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  //definition Form Group
  userForm?: FormGroup;
  submitted = false;
  constructor() {}

  // {
  //   name: 'Leanne Graham',
  //   username: 'Bret',
  //   email: 'Sincere@april.biz',
  //   address: {
  //     street: 'Kulas Light',
  //     suite: 'Apt. 556',
  //     city: 'Gwenborough',
  //     zipcode: '92998-3874',
  //     geo: {
  //       lat: '-37.3159',
  //       lng: '81.1496',
  //     },
  //   }
  // },

  // Declaration Form Group & Form Cntrol (Form Group in Form Group in Form Group)
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        suite: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required]),
        geo: new FormGroup({
          lat: new FormControl('', [Validators.required]),
          lng: new FormControl('', [Validators.required]),
        }),
      }),
    });
  }

  //creation methode create user

  get address():FormGroup{
    return this.userForm?.get ('address')as FormGroup;
  }

  get geo():FormGroup{
    return this.address?.get('geo') as FormGroup;
  }

  createUser(): void {
    this.submitted = true;
    if (this.userForm?.invalid) {
      return;
    }

    console.log(this.userForm?.value);
    // Call to RESTfull API
  }
}
