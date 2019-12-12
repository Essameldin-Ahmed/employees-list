import { Injectable } from '@angular/core';
import { EmployeeModel } from '../shared/interfaces/employee.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MainService } from '../core/main.service';
import { PAGE_COUNT } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeesService {
  private _originalEmployeesList: EmployeeModel[];
  empolyeesSubject: Subject<EmployeeModel[]> = new Subject();
  empolyeeKeys: Subject<string[]> = new Subject();
  pageCount = PAGE_COUNT;

  constructor(private http: HttpClient, private mainService: MainService) { }

  set originalEmployeesList(employees: EmployeeModel[]) {
    this._originalEmployeesList = employees;
    this.getPageEmployees()
  };

  get originalEmployeesList() {
    return this._originalEmployeesList
  }

  getEmployees() {
    if (this.originalEmployeesList && this.originalEmployeesList.length > 0) {
      this.empolyeesSubject.next(this.originalEmployeesList)
    } else {
      this.fetchEmployees()
    }
  }

  private fetchEmployees() {
    this.mainService.startLoading();
    this.http.get<EmployeeModel[]>(`${environment.baseURI}employees`).subscribe(
      (employees) => {
        this.originalEmployeesList = employees;
        this.empolyeeKeys.next(Object.keys(employees[0]));
        this.mainService.stopLoading();

      },
      (error) => {
        console.log(error);
        this.mainService.stopLoading();
      }
    )
  }


  getPageEmployees(pageNumber = 1) {
    if (!this.originalEmployeesList && pageNumber >= 1 && pageNumber <= (this.getListCount() / this.pageCount)) {
      return null
    }
    let startIndex = (pageNumber - 1) * this.pageCount
    const employeesList = [... this.originalEmployeesList]
    this.empolyeesSubject.next(employeesList.slice(startIndex, startIndex + this.pageCount))
  }

  getListCount() {
    let count = this.originalEmployeesList.length
    return count
  }
}
