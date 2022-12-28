import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[cardJoke]',
})
export class CardJokeDirective {
  // @HostBinding('class.bg-primary')
  // private isHovring:boolean=false;

  @HostBinding('style.background')
  private background = 'green';

  constructor(private element: ElementRef, private render: Renderer2) {
    // console.log(this.element.nativeElement);
    // this.element.nativeElement.style.setProperty('color', 'red');
    // this.element.nativeElement.classList.add('class', 'abc');
  }

  @HostListener('mouseenter')
  onHover() {
    // this.element.nativeElement.style.setProperty('color', 'red');
    this.render.setStyle(this.element.nativeElement, 'color', 'red');
    // this.isHovring = true
    this.background = 'yellow';
    const textShow = this.element.nativeElement.querySelector('.card-text');
    this.render.setStyle(textShow, 'display', 'block');
    console.log(textShow);
  }

  @HostListener('mouseleave')
  onMouseout() {
    // this.element.nativeElement.style.setProperty('color', 'black');
    this.render.setStyle(this.element.nativeElement, 'color', 'black');
    // this.isHovring = false;
    this.background = 'gray';
    const textShow = this.element.nativeElement.querySelector('.card-text');
    this.render.setStyle(textShow, 'display', 'none');
  }
}
