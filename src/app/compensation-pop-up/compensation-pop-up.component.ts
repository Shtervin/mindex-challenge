import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-compensation-pop-up',
  templateUrl: './compensation-pop-up.component.html',
  styleUrls: ['./compensation-pop-up.component.css']
})
export class CompensationPopUpComponent {
  @Output() onOkEmitter = new EventEmitter<boolean>();
  firstName: string = "";
  lastName: string = "";
  position: string = "";


  constructor(
    public dialogRef: MatDialogRef<CompensationPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.firstName = this.data.firstName;
    this.lastName = this.data.lastName;
    this.position = this.data.position;

  }

  get title() {
    return this.data.title || 'UPDATE COMPENSATION';
  }

  get message() {
    return this.data.message || 'This is the default message.';
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
