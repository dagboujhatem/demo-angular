import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'ng-class', component: NgClassExampleComponent },
  { path: 'ng-style', component: NgStyleExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
