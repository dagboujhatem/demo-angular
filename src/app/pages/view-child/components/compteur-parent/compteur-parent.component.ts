import { Component, OnInit, ViewChild } from '@angular/core';
import { CompteurChildComponent } from '../compteur-child/compteur-child.component';

@Component({
  selector: 'app-compteur-parent',
  templateUrl: './compteur-parent.component.html',
  styleUrls: ['./compteur-parent.component.scss'],
})
export class CompteurParentComponent implements OnInit {

 @ViewChild(CompteurChildComponent,{static:true}) child? : CompteurChildComponent
  constructor() {}

  ngOnInit(): void {}
  onChangeplus() {
    this.child?.plus()
  }
  onChangemoins() {
    this.child?.moins()
  }
}
