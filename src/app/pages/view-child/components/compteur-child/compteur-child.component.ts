import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur-child',
  templateUrl: './compteur-child.component.html',
  styleUrls: ['./compteur-child.component.scss'],
})
export class CompteurChildComponent implements OnInit {
  count = 0;
  // private count2 =0
  constructor() {}

  ngOnInit(): void {}
  plus() {
    this.count++;
  }
  moins() {
    this.count--;
  }
}
