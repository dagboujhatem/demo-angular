import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes.component';
import { CreateCommandeComponent } from './components/create-commande/create-commande.component';
import { UpdateCommandeComponent } from './components/update-commande/update-commande.component';

const routes: Routes = [
  { path: '', component: CommandesComponent },
  { path: 'create', component: CreateCommandeComponent },
  { path: 'update/:id', component: UpdateCommandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
