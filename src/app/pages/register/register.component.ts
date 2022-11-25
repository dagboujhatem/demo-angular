import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public fullName?: string = '';
  public email?: string = '';
  public password?: string = '';
  public confirmPassword?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(): void {
    // event.preventDefault();

    if(this.fullName == '' && this.email == '' && this.password == '' && this.confirmPassword == ''){
      return;
    }

    // call rest API using service
    const data = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    console.log(data)

    // reset form
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
