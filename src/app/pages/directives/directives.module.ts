import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';


@NgModule({
  declarations: [
    DirectivesComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ]
})
export class DirectivesModule { }
