import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-reports-info',
  templateUrl: './employee-reports-info.component.html',
  styleUrls: ['./employee-reports-info.component.scss']
})
export class EmployeeReportsInfoComponent implements OnInit {
  @Input() employee: Employee;
  @Output() newDeleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteReport(){
    this.newDeleteEvent.emit(this.employee.id);
  }

}
