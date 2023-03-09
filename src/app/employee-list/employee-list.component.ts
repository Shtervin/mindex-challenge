import { Component, OnInit } from "@angular/core";
import { catchError, map, reduce } from "rxjs/operators";

import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

import { Reports } from "../employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;
  allReports: Reports[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getAll()
      .pipe(
        reduce((emps: Employee[], e: Employee) => emps.concat(e), []),
        map((emps) => {
          this.employees = emps;
        }),
        catchError(this.handleError.bind(this))
      )
      .subscribe(() => {
        let idToPerson = {};
        for (let i = 0; i < this.employees.length; i++) {       //pre-processing data
          idToPerson[this.employees[i].id] = this.employees[i];
        }

        for (let i = 0; i < this.employees.length; i++) {       //start of the BFS to get the total number of reports (direct + indirect)
          let person = this.employees[i];
          let directReports = person.directReports || [];
          let totalReportsCount = directReports.length;
          let j = 0;
          while (j < directReports.length) {
            let reportId = directReports[j];
            if (reportId in idToPerson) {
              let report = idToPerson[reportId];
              let indirectReports = report.directReports || [];
              directReports = directReports.concat(indirectReports);
              totalReportsCount += indirectReports.length;
            }
            j++;
          }
          let directReportsInfo = [];
          if (this.employees[i].directReports !== undefined) {
            for (let k = 0; k < this.employees[i].directReports.length; k++) {
              this.employees.forEach((employee) => {
                if (employee.id === this.employees[i].directReports[k]) {
                  directReportsInfo.push(employee);
                }
              });
            }
          }
          this.allReports.push(
            new Reports(person.id, totalReportsCount, directReportsInfo)
          );
        }
      });
  }

  handleDeletedEvent(employeeId: number[]) {    //deletes the direct report of employee
    this.allReports = this.allReports.filter((report) => {
      if (report.id !== employeeId[0]) {
        return true;
      }
      report.directReports = report.directReports.filter(
        (directReport) => directReport.id !== employeeId[1]
      );

      return true;
    });
  }

  handleUpdatedCompensation(compensationArray: number[]) {  //updates the compensation to the number that was sent from employee-reports-info
    this.employees = this.employees.filter((emp) => {
      if (emp.id !== compensationArray[0]) {
        return true;
      }
      emp.compensation = compensationArray[1];

      return true;
    });
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return (this.errorMessage = e.message || "Unable to retrieve employees");
  }
}
