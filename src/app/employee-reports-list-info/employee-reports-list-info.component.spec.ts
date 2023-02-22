import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsListInfoComponent } from './employee-reports-list-info.component';

describe('EmployeeReportsListInfoComponent', () => {
  let component: EmployeeReportsListInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsListInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsListInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
