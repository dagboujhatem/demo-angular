import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pro-register',
  templateUrl: './pro-register.component.html',
  styleUrls: ['./pro-register.component.scss']
})
export class ProRegisterComponent implements OnInit {
  public proregisterForm!: FormGroup;

  submitted = false;

  constructor() {}

  ngOnInit(): void {
    this.proregisterForm = new FormGroup({
      accountType: new FormControl(true),
      raison_social: new FormControl('', [Validators.required]),
      siret: new FormControl('', [Validators.required]),
      statut: new FormControl('', [Validators.required]),
      gerant: new FormControl('', [Validators.required]),
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
