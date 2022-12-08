import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  register3Form?: FormGroup;

  submitted = false;

  constructor( private FormBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.register3Form = this.FormBuilder.group({
      name: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]], 
      
      
    });
  }
  onRegister3(): void {
    this.submitted = true;
    if (this.register3Form?.invalid) {
      return;
    }
    console.log(this.register3Form?.value);
  }

}
