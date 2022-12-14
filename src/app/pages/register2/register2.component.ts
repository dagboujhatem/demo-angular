import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss'],
})
export class Register2Component implements OnInit {
  public register2Form!: FormGroup;

  submitted = false;

  constructor() {}

  ngOnInit(): void {
    this.register2Form = new FormGroup({
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

    // listen on valueChange of account type
    this.register2Form?.get('accountType')?.valueChanges.subscribe((value) => {
      if (value === true) {
        this.register2Form?.removeControl('raisonSocial');
        this.register2Form?.removeControl('siret');
        this.register2Form?.removeControl('statut');
        this.register2Form?.removeControl('gerant');
        this.register2Form?.addControl(
          'nom',
          new FormControl('', [Validators.required])
        );
        this.register2Form?.addControl(
          'prenom',
          new FormControl('', [Validators.required])
        );
      } else {
        this.register2Form?.addControl(
          'raisonSocial',
          new FormControl('', [Validators.required])
        );
        this.register2Form?.addControl(
          'siret',
          new FormControl('', [Validators.required])
        );
        this.register2Form?.addControl(
          'statut',
          new FormControl('', [Validators.required])
        );
        this.register2Form?.addControl(
          'gerant',
          new FormControl('', [Validators.required])
        );
        this.register2Form?.removeControl('nom');
        this.register2Form?.removeControl('prenom');
      }
    });
  }

  onRegister2(): void {
    this.submitted = true;
    if (this.register2Form?.invalid) {
      return;
    }
    console.log(this.register2Form?.value);
  }
}
