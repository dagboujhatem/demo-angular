import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.scss'],
})
export class NgStyleExampleComponent implements OnInit {
  monStyle = {
    'background-color': 'red',
    margin: '15px',
    color: 'white',
  };
  connecsionColor = 'orange';
  connecsionColorr = 'yellow';

  constructor() {}

  ngOnInit(): void {
    this.monStyle.color = 'black';
  }

  getConnecsionColor() {
    return 'red';
  }
  changeColor() {
    this.connecsionColorr = 'blue';
  }
}
