import { TestBed } from '@angular/core/testing';

import { AdviceSlipService } from './git-hub-searches.service';

describe('AdviceSlipService', () => {
  let service: AdviceSlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceSlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
