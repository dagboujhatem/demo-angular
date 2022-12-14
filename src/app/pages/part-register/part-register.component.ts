import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-part-register',
  templateUrl: './part-register.component.html',
  styleUrls: ['./part-register.component.scss']
})
export class PartRegisterComponent implements OnInit {

  public partregisterForm!: FormGroup;

  submitted = false;

  constructor() {}

  ngOnInit(): void {
    this.partregisterForm = new FormGroup({
      accountType: new FormControl(true),
      name: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmationpassword: new FormControl('', [Validators.required]),
      commentaire: new FormControl('', [Validators.required]),
    });

    
  }

  onRegister2(): void {
    // this.submitted = true;
    // if (this.partregisterForm?.invalid) {
    //   return;
    // }
    // console.log(this.partregisterForm?.value);
  }

}
