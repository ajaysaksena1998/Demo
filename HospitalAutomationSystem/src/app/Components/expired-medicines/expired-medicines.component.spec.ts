import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredMedicinesComponent } from './expired-medicines.component';

describe('ExpiredMedicinesComponent', () => {
  let component: ExpiredMedicinesComponent;
  let fixture: ComponentFixture<ExpiredMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
