import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminePatientsComponent } from './examine-patients.component';

describe('ExaminePatientsComponent', () => {
  let component: ExaminePatientsComponent;
  let fixture: ComponentFixture<ExaminePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
