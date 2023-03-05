import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeReportsListInfoComponent } from './employee-reports-list-info.component';


@Component({selector: 'app-employee', template: ''})
class EmployeeComponent {
  @Input('employee') employee: any;
}

describe('EmployeeReportsListInfoComponent', () => {
  let component: EmployeeReportsListInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsListInfoComponent>;

  beforeEach(async (() => {
     TestBed.configureTestingModule({
      declarations: [ EmployeeReportsListInfoComponent, EmployeeComponent ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsListInfoComponent);
    component = fixture.componentInstance;
    component.employees = [
      {
        id: 1,
        firstName: 'Brian',
        lastName: 'McGee',
        position: 'CEO',
        directReports: [2, 3]
      },
      {
        id: 2,
        firstName: 'Homer',
        lastName: 'Thompson',
        position: 'Dev Manager',
        directReports: [4]
      },
      {
        id: 3,
        firstName: 'Rock',
        lastName: 'Strongo',
        position: 'Lead Tester'
      },
      {
        id: 4,
        firstName: 'Max',
        lastName: 'Power',
        position: 'Junior Software Engineer'
      }
    ];
    fixture.detectChanges();
  });
  
  it('should create the component',  () => {
    expect(component).toBeTruthy();
  });

  it('should emit an employee id',  () => {
    spyOn(component.newDeleteEvent, "emit");
    component.handleDeletedEvent(1);
    expect(component.newDeleteEvent.emit).toHaveBeenCalledWith(1);
  });

  it('should emit an array with employee id and compensation',  () => {
    spyOn(component.updatedCompensationEmitter, "emit");
    component.handleUpdatedCompensation([1, 15000]);
    expect(component.updatedCompensationEmitter.emit).toHaveBeenCalledWith([1, 15000]);
  });

});
