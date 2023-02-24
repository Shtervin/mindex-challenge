import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPopUpComponent } from './compensation-pop-up.component';

describe('CompensationPopUpComponent', () => {
  let component: CompensationPopUpComponent;
  let fixture: ComponentFixture<CompensationPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPopUpComponent ]
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
