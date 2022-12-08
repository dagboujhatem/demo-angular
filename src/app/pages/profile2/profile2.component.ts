import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss'],
})
export class Profile2Component implements OnInit {
  registrationForm?: FormGroup ;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      skill: this.fb.array([]),
    });
  }

  get userName() {
    return this.registrationForm?.get('userName');
  }
  get email() {
    return this.registrationForm?.get('email');
  }
  get skill() : FormArray {
    return this.registrationForm?.get('skill') as FormArray;
  }
  addSkill() {
    this.skill.push(this.fb.control(''));
  }

}
