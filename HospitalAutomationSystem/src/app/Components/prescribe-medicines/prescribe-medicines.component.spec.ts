import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeMedicinesComponent } from './prescribe-medicines.component';

describe('PrescribeMedicinesComponent', () => {
  let component: PrescribeMedicinesComponent;
  let fixture: ComponentFixture<PrescribeMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribeMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
