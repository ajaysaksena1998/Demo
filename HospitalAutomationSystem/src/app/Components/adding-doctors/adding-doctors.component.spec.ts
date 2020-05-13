import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDoctorsComponent } from './adding-doctors.component';

describe('AddingDoctorsComponent', () => {
  let component: AddingDoctorsComponent;
  let fixture: ComponentFixture<AddingDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
