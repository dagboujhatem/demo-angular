import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';

@NgModule({
  declarations: [CustomDirectiveComponent],
  imports: [CommonModule, CustomDirectiveRoutingModule],
})
export class CustomDirectiveModule {}
