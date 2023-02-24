import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../employee';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';

@Component({
  selector: 'app-employee-reports-info',
  templateUrl: './employee-reports-info.component.html',
  styleUrls: ['./employee-reports-info.component.scss']
})
export class EmployeeReportsInfoComponent implements OnInit {
  @Input() employee: Employee;
  @Output() newDeleteEvent = new EventEmitter<number>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteReport(){
    const dialog = this.dialog.open(DeletePopUpComponent, {
      data: {
        title: 'DELETE DIRECT REPORTS',
        message: "Permanently delete direct report " + this.employee.firstName + " " + this.employee.lastName
      }
    });
    dialog.componentInstance.onOkEmitter.subscribe((event) => {
      if (event === true){
        this.newDeleteEvent.emit(this.employee.id);
      }
    })
  }

}
