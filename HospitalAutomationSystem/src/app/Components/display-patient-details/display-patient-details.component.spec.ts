import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatientDetailsComponent } from './display-patient-details.component';

describe('DisplayPatientDetailsComponent', () => {
  let component: DisplayPatientDetailsComponent;
  let fixture: ComponentFixture<DisplayPatientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPatientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
