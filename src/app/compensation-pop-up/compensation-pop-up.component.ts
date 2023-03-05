import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-compensation-pop-up',
  templateUrl: './compensation-pop-up.component.html',
  styleUrls: ['./compensation-pop-up.component.css']
})
export class CompensationPopUpComponent {
  @Output() onSaveEmitter = new EventEmitter<number>();
  firstName: string = "";
  lastName: string = "";
  position: string = "";
  compensation: number;

  constructor(
    public dialogRef: MatDialogRef<CompensationPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  get firstNameData () {
    return this.data.firstName || 'first name'
  }

  get lastNameData () {
    return this.data.lastName || 'last name'
  }

  get positionData () {
    return this.data.position || 'position name'
  }

  get title() {
    return this.data.title || 'UPDATE COMPENSATION';
  }

  get message() {
    return this.data.message || 'This is the default message.';
  }

  get existingCompensation() {
    return this.data.existingCompensation !== undefined ? "$" + this.data.existingCompensation : "$0";
  }

  onSave() {
    this.onSaveEmitter.emit(this.compensation);
    this.dialogRef.close();
  }
  
  onCancel() {
    this.dialogRef.close();
  }

}
