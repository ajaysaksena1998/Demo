import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceptionistsComponent } from './add-receptionists.component';

describe('AddReceptionistsComponent', () => {
  let component: AddReceptionistsComponent;
  let fixture: ComponentFixture<AddReceptionistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceptionistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceptionistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
