import { TestBed } from '@angular/core/testing';

import { SetFilterService } from './set-filter.service';

describe('SetFilterService', () => {
  let service: SetFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
