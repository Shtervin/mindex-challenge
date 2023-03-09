import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Employee, Reports } from "../employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Input() totalReports: Reports;
  @Output() newDeleteEvent = new EventEmitter<number[]>();
  @Output() updatedCompensationEmitter = new EventEmitter<number[]>();
  constructor() {}

  ngOnInit(): void {}

  handleDeletedEvent(employeeId: number) {
    this.newDeleteEvent.emit([this.employee.id, employeeId]); //sends data to the parent component employee-list 
  }

  handleUpdatedCompensation(compensationArray: number[]) {
    this.updatedCompensationEmitter.emit(compensationArray);  //sends data to the parent component employee-list 
  }
}
