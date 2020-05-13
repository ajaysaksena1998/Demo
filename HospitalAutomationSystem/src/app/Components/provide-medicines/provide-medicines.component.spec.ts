import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideMedicinesComponent } from './provide-medicines.component';

describe('ProvideMedicinesComponent', () => {
  let component: ProvideMedicinesComponent;
  let fixture: ComponentFixture<ProvideMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
