import { TestBed } from '@angular/core/testing';

import { AuthorbookdetService } from './authorbookdet.service';

describe('AuthorbookdetService', () => {
  let service: AuthorbookdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorbookdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
