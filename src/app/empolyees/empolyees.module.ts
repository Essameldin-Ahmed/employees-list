import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpolyeesComponent } from './empolyees.component';
import { EmpolyeesRoutingModule } from './employees-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmpolyeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmpolyeesRoutingModule
  ]
})
export class EmpolyeesModule { }
