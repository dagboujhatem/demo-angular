import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';
import { CardJokeDirective } from './directives/card-joke.directive';

@NgModule({
  declarations: [CustomDirectiveComponent,CardJokeDirective],
  

  imports: [CommonModule, CustomDirectiveRoutingModule],
})
export class CustomDirectiveModule {}
