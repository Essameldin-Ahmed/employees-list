import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeModel } from '../shared/interfaces/employee.model';
import { EmpolyeesService } from './empolyees.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.scss']
})
export class EmpolyeesComponent implements OnInit, OnDestroy {
  employeesList: EmployeeModel[];
  tableHead: string[];
  configuration;
  subscription: Subscription;
  constructor(private employeesService: EmpolyeesService) { }

  ngOnInit() {

    this.subscription = this.employeesService.empolyeesSubject.pipe(switchMap(
      (employeesList) => {
        this.employeesList = employeesList;
        this.tableHead = Object.keys(this.employeesList[0]);
        this.configuration = {
          countPerPage: this.employeesService.pageCount,
          items: this.employeesService.originalEmployeesList
        };
        return this.employeesService.empolyeeKeys
      }
    )).subscribe(
      (empolyeeKeys) => {
        this.tableHead = empolyeeKeys;
      }
    );
    this.employeesService.getEmployees();
  }

  changePage(pageNumber) {
    this.employeesService.getPageEmployees(pageNumber);
  }

  getTotalListCount() {
    return this.employeesService.getListCount()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
