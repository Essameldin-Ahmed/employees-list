import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpolyeesComponent } from './empolyees.component';

const routes: Routes = [
  {path: '', component: EmpolyeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpolyeesRoutingModule { }
