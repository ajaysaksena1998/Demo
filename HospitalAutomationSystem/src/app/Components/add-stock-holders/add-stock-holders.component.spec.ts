import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockHoldersComponent } from './add-stock-holders.component';

describe('AddStockHoldersComponent', () => {
  let component: AddStockHoldersComponent;
  let fixture: ComponentFixture<AddStockHoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockHoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
