import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsInfoComponent } from './employee-reports-info.component';

describe('EmployeeReportsInfoComponent', () => {
  let component: EmployeeReportsInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
