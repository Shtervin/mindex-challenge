import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog } from "@angular/material/dialog";

import { EmployeeReportsInfoComponent } from "./employee-reports-info.component";

describe("EmployeeReportsInfoComponent", () => {
  let component: EmployeeReportsInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeReportsInfoComponent],
      providers: [{ provide: MatDialog, useValue: { open: () => {} } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsInfoComponent);
    component = fixture.componentInstance;
    component.employee = {
      id: 1,
      firstName: "Brian",
      lastName: "McGee",
      position: "CEO",
      directReports: [2, 3],
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
