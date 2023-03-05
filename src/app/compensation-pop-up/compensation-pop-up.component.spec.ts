import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CompensationPopUpComponent } from './compensation-pop-up.component';

describe('CompensationPopUpComponent', () => {
  let component: CompensationPopUpComponent;
  let fixture: ComponentFixture<CompensationPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPopUpComponent ],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {close: () => {}} },
        { provide: MAT_DIALOG_DATA, useValue: {title: "UPDATE COMPENSATION"} },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain("UPDATE COMPENSATION");
  });

  it('should display the Save button with the correct text', () => {
    const saveButton = fixture.nativeElement.querySelector('.save-button');
    expect(saveButton).toBeTruthy();
    expect(saveButton.textContent).toContain("Save");
  });

  it('should display the Cancel button with the correct text', () => {
    const cancelButton = fixture.nativeElement.querySelector('.cancel-button');
    expect(cancelButton).toBeTruthy();
    expect(cancelButton.textContent).toContain("Cancel");
  });

  it('should call onSave on Save button click', () => {
    spyOn(component, "onSave");
    const saveButton = fixture.nativeElement.querySelector('.save-button');
    saveButton.click();
    expect(component.onSave).toHaveBeenCalled();
  });

  it('should call onCancel on Cancel button click', () => {
    spyOn(component, 'onCancel');
    const cancelButton = fixture.nativeElement.querySelector('.cancel-button');
    cancelButton.click();
    expect(component.onCancel).toHaveBeenCalled();
  });

  it('should emit confirmed event when Save button is clicked', () => {
    spyOn(component.onSaveEmitter, 'emit');
    spyOn(component.dialogRef, 'close');
    component.onSave()
    expect(component.onSaveEmitter.emit).toHaveBeenCalled();
    expect(component.dialogRef.close).toHaveBeenCalled();
  })

  it('should emit event when Cancel button is clicked', () => {
    spyOn(component.onSaveEmitter, 'emit');
    spyOn(component.dialogRef, 'close');
    component.onCancel()
    expect(component.dialogRef.close).toHaveBeenCalled();
  })
});
