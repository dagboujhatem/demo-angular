import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.scss']
})
export class Register3Component implements OnInit {
  
  proisChecked: boolean = true;
  partisChecked!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.proisChecked);
    
  }
  onChange(e: any) {
    console.log(" Value is : ", e.target.value);
 }
 register (data : any){
  console.log(data);
 }

}
