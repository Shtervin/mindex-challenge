import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-reports-info',
  templateUrl: './employee-reports-info.component.html',
  styleUrls: ['./employee-reports-info.component.scss']
})
export class EmployeeReportsInfoComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
