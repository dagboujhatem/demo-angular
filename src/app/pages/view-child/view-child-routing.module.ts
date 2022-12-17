import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteurParentComponent } from './components/compteur-parent/compteur-parent.component';
import { ViewChildComponent } from './view-child.component';

const routes: Routes = [
  { path: '', component: ViewChildComponent },
  { path: 'compteur', component: CompteurParentComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
