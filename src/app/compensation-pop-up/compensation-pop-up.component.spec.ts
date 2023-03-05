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
});
