import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-reports-list-info',
  templateUrl: './employee-reports-list-info.component.html',
  styleUrls: ['./employee-reports-list-info.component.css']
})
export class EmployeeReportsListInfoComponent implements OnInit {

  @Input() employees: Employee[];

  constructor() { }

  ngOnInit(): void {

  }

}
