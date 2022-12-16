import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public fullName?: any;
  public email?: string = '';
  public password?: string = '';
  public confirmPassword?: string = '';
  public isSubmitted = false;

  constructor() {}

  ngOnInit(): void {}

  onRegister(f:any): void {
    // event.preventDefault();
    this.isSubmitted = true;
    if (f.invalid) 
    {
      return;
    }
    // call rest API using service
    const data = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
    console.log(data);
    // reset form
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.isSubmitted = false;
  }
}
