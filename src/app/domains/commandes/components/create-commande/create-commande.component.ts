import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.scss']
})
export class CreateCommandeComponent implements OnInit {

  commandeForm?: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.commandeForm = new FormGroup({
      total: new FormControl('', [Validators.required]),
    });
    this.formChangeEvent();
  }

  formChangeEvent(): void{
    this.commandeForm?.get('total')?.valueChanges.subscribe(value=>{
      // console.log(value);
      if(value>100){
        this.commandeForm?.addControl('card', new FormControl('', [Validators.required]));
        // modifier les validators d'un autre champs
        this.commandeForm?.get('total')?.clearValidators();
        this.commandeForm?.get('total')?.setValidators([Validators.required, Validators.max(1000)]);
      }else{
        this.commandeForm?.removeControl('card');
      }
    });
  }

  createCommande(): void {
    this.submitted = true;
    if(this.commandeForm?.invalid){
      return;
    }
    // print in console
    console.log(this.commandeForm?.value)
    // call REST API
  }

}
