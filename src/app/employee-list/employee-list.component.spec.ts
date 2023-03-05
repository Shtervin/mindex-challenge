import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, Input } from "@angular/core";

import { EmployeeListComponent } from "./employee-list.component";
import { EmployeeService } from "../employee.service";
import { Observable, of } from "rxjs";

@Component({ selector: "app-employee", template: "" })
class EmployeeComponent {
  @Input("employee") employee: any;
}

@Component({ selector: "app-mat-grid-list", template: "" })
class GridListComponent {}

@Component({ selector: "app-mat-grid-tile", template: "" })
class GridTileComponent {}

describe("EmployeeListComponent", () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  const data$ = of([
    {
      id: 1,
      firstName: "Brian",
      lastName: "McGee",
      position: "CEO",
      directReports: [2, 3],
    },
    {
      id: 2,
      firstName: "Homer",
      lastName: "Thompson",
      position: "Dev Manager",
      directReports: [4],
    },
    {
      id: 3,
      firstName: "Rock",
      lastName: "Strongo",
      position: "Lead Tester",
    },
    {
      id: 4,
      firstName: "Max",
      lastName: "Power",
      position: "Junior Software Engineer",
    },
  ]);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent,
        EmployeeComponent,
        GridListComponent,
        GridTileComponent,
      ],
      providers: [
        { provide: EmployeeService, useValue: { getAll: () => data$ } },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should create total reports", async(() => {
    expect(component.allReports.length).toBeGreaterThan(0);
    expect(component.allReports.length).toBe(4);
  }));

  it("should delete direct report if it exists", async(() => {
    expect(component.allReports[0]["directReports"].length).toBe(2);
    component.handleDeletedEvent([1, 2]);
    expect(component.allReports[0]["directReports"].length).toBe(1);
  }));

  it("should update compensation at the correct employee id", async(() => {
    component.handleUpdatedCompensation([1, 15000]);
    expect(component.employees[0]["compensation"]).toBe(15000);
  }));
});
