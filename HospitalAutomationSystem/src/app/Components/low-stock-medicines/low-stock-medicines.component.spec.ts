import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockMedicinesComponent } from './low-stock-medicines.component';

describe('LowStockMedicinesComponent', () => {
  let component: LowStockMedicinesComponent;
  let fixture: ComponentFixture<LowStockMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowStockMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowStockMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
