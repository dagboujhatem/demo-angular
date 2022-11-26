import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesRoutingModule } from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { CreateCommandeComponent } from './components/create-commande/create-commande.component';
import { UpdateCommandeComponent } from './components/update-commande/update-commande.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommandesComponent,
    CreateCommandeComponent,
    UpdateCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    SharedModule
  ]
})
export class CommandesModule { }
