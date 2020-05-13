import { TestBed } from '@angular/core/testing';

import { AddStockHolderService } from './add-stock-holder.service';

describe('AddStockHolderService', () => {
  let service: AddStockHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStockHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
