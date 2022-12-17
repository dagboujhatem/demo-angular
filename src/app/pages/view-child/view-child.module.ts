import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child.component';
import { ChildComponent } from './components/child/child.component';
import { CompteurParentComponent } from './components/compteur-parent/compteur-parent.component';
import { CompteurChildComponent } from './components/compteur-child/compteur-child.component';


@NgModule({
  declarations: [
    ViewChildComponent,
    ChildComponent,
    CompteurParentComponent,
    CompteurChildComponent
  ],
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
