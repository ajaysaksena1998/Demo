import { TestBed } from '@angular/core/testing';

import { AddReceptionistsService } from './add-receptionists.service';

describe('AddReceptionistsService', () => {
  let service: AddReceptionistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddReceptionistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
