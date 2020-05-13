import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHereToProvideMedicinesComponent } from './click-here-to-provide-medicines.component';

describe('ClickHereToProvideMedicinesComponent', () => {
  let component: ClickHereToProvideMedicinesComponent;
  let fixture: ComponentFixture<ClickHereToProvideMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickHereToProvideMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickHereToProvideMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
