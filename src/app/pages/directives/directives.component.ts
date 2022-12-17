import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  hide = false;
  isAuthentificated= false;
  tab = [
    {
      id: 0 , name: 'orange',
    },
    {
      id: 1,name: 'red',
    },
    {
      id: 2,name: 'bleu',
    },
    {
      id: 3,name: 'jaune',
    },
  ];
  peoples: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
  // *ngSwich
  items: any[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }, { name: 'Four', val: 3 }, { name: 'Five', val: 3 }];
  selectedValue1: string = 'One';
 

  constructor() {}

  ngOnInit(): void {}

  changeName(i:number){
    const rund = Math.random().toString()
    this.tab [i].name = rund

  }
  truckedByFn (i:number ,item : any){

// return item.id
return i
  }
}
