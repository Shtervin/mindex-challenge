import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent {
  @Output() onOkEmitter = new EventEmitter<boolean>();


  constructor(
    public dialogRef: MatDialogRef<DeletePopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  get title() {
    return this.data.title || 'Dialog';
  }

  get message() {
    return this.data.message || 'This is the default message.';
  }

  get employeeInfo() {
    return this.data.employeeInfo || 'Employee name here';
  }

  get confirmation() {
    return this.data.confirmation || 'This is a confirmation message'
  }
  onOk() {
    this.onOkEmitter.emit(true);
    this.dialogRef.close();
  }
  
  onCancel() {
    this.onOkEmitter.emit(false);
    this.dialogRef.close();
  }

}
