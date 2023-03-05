import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";

import { EmployeeComponent } from "./employee.component";
import { Reports } from "../employee";

@Component({ selector: "app-mat-card", template: "" })
class CardComponent {}

@Component({ selector: "app-mat-card-header", template: "" })
class CardHeaderComponent {}

@Component({ selector: "app-mat-card-title", template: "" })
class CardTitleComponent {}

@Component({ selector: "app-mat-card-subtitle", template: "" })
class CardSubtitleComponent {}

@Component({ selector: "app-mat-card-content", template: "" })
class CardContentComponent {}

describe("EmployeeComponent", () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeComponent,
        CardComponent,
        CardHeaderComponent,
        CardTitleComponent,
        CardSubtitleComponent,
        CardContentComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    component.employee = {
      id: 1,
      firstName: "first",
      lastName: "last",
      position: "jobTitle",
    };

    const reports: Reports = {
      totalReports: 3,
      id: 1,
      directReports: [component.employee],
    };
    component.totalReports = reports;
    fixture.detectChanges();
  });

  it("should create the component", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should emit an array of employee ids", () => {
    spyOn(component.newDeleteEvent, "emit");
    component.handleDeletedEvent(1);
    expect(component.newDeleteEvent.emit).toHaveBeenCalledWith([
      1,
      component.employee.id,
    ]);
  });

  it("should emit an array with employee id and compensation", () => {
    spyOn(component.updatedCompensationEmitter, "emit");
    component.handleUpdatedCompensation([1, 15000]);
    expect(component.updatedCompensationEmitter.emit).toHaveBeenCalledWith([
      1, 15000,
    ]);
  });
});
