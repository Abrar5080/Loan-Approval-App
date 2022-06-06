import { TestBed } from '@angular/core/testing';

import { ProdetService } from './prodet.service';

describe('ProdetService', () => {
  let service: ProdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
