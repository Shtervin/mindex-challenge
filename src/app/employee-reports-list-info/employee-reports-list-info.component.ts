import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-reports-list-info",
  templateUrl: "./employee-reports-list-info.component.html",
  styleUrls: ["./employee-reports-list-info.component.css"],
})
export class EmployeeReportsListInfoComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() newDeleteEvent = new EventEmitter<number>();
  @Output() updatedCompensationEmitter = new EventEmitter<number[]>();
  constructor() {}

  ngOnInit(): void {}

  handleDeletedEvent(employeeId: number) {
    this.newDeleteEvent.emit(employeeId);   //sends deleted employee data to the upper/parent component
  }

  handleUpdatedCompensation(compensationArray: number[]) {
    this.updatedCompensationEmitter.emit(compensationArray);    //sends compensation data to the upper/parent component
  }
}
