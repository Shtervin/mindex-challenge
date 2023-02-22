import {Component, Input} from '@angular/core';

import {Employee, Reports} from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Input() totalReports: Reports;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.totalReports, this.employee);
  }


}
