import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../employee';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { CompensationPopUpComponent } from '../compensation-pop-up/compensation-pop-up.component';

@Component({
  selector: 'app-employee-reports-info',
  templateUrl: './employee-reports-info.component.html',
  styleUrls: ['./employee-reports-info.component.scss']
})
export class EmployeeReportsInfoComponent implements OnInit {
  @Input() employee: Employee;
  @Output() newDeleteEvent = new EventEmitter<number>();
  @Output() updatedCompensation = new EventEmitter<number[]>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteReport(){
    const dialog = this.dialog.open(DeletePopUpComponent, {
      data: {
        title: 'DELETE DIRECT REPORTS',
        message: "Permanently delete direct report ",
        employeeInfo: this.employee.firstName + " " + this.employee.lastName + "?",
        confirmation: "This action cannot be undone."
      }
    });
    dialog.componentInstance.onOkEmitter.subscribe((event) => {
      if (event === true){
        this.newDeleteEvent.emit(this.employee.id);
      }
    })
  }

  editCompensation(){
    const dialog = this.dialog.open(CompensationPopUpComponent, {
      data: {
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        position: this.employee.position,
        existingCompensation: this.employee.compensation
      }
    })
    dialog.componentInstance.onSaveEmitter.subscribe(event => {
      this.updatedCompensation.emit([this.employee.id, event])
    })
  }

}
