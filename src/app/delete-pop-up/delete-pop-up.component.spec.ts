import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePopUpComponent } from './delete-pop-up.component';

describe('DeletePopUpComponent', () => {
  let component: DeletePopUpComponent;
  let fixture: ComponentFixture<DeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePopUpComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {close: () => {}} },
        { provide: MAT_DIALOG_DATA, useValue: {title: "DELETE DIRECT REPORT"} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain("DELETE DIRECT REPORT");
  });

  it('should display the OK button with the correct text', () => {
    const okButton = fixture.nativeElement.querySelector('.ok-button');
    expect(okButton).toBeTruthy();
    expect(okButton.textContent).toContain("Ok");
  });

  it('should display the Cancel button with the correct text', () => {
    const cancelButton = fixture.nativeElement.querySelector('.cancel-button');
    expect(cancelButton).toBeTruthy();
    expect(cancelButton.textContent).toContain("Cancel");
  });

  it('should call onOk on Ok button click', () => {
    spyOn(component, "onOk");
    const okButton = fixture.nativeElement.querySelector('.ok-button');
    okButton.click();
    expect(component.onOk).toHaveBeenCalled();
  });

  it('should call onCancel on Cancel button click', () => {
    spyOn(component, 'onCancel');
    const cancelButton = fixture.nativeElement.querySelector('.cancel-button');
    cancelButton.click();
    expect(component.onCancel).toHaveBeenCalled();
  });

  it('should emit confirmed event when Ok button is clicked', () => {
    spyOn(component.onOkEmitter, 'emit');
    spyOn(component.dialogRef, 'close');
    component.onOk()
    expect(component.onOkEmitter.emit).toHaveBeenCalled();
    expect(component.dialogRef.close).toHaveBeenCalled();
  })

  it('should emit event when Cancel button is clicked', () => {
    spyOn(component.onOkEmitter, 'emit');
    spyOn(component.dialogRef, 'close');
    component.onCancel()
    expect(component.onOkEmitter.emit).toHaveBeenCalled();
    expect(component.dialogRef.close).toHaveBeenCalled();
  })
});
