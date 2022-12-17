import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  value = 'aaa';
  @ViewChild('name') name?: ElementRef;

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.name);
    //lecture de la valeur d´un input
    const elementInput = this.name?.nativeElement as HTMLInputElement;
    console.log(elementInput.value);
    //changement de valeur grace  element.attribute = new value
    elementInput.value = 'dddddddddd';
    //changemet d´un style d´un input grace element.style.property = new style
    elementInput.style.color = 'red';
    //changement d´une classe d´un input
    elementInput.classList.add('is-valid');
  }
  ngOnInit(): void {
    console.log(this.name);
    //indifined
  }
}
