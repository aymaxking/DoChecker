import { TestBed } from '@angular/core/testing';

import { Sprint0Service } from './sprint0.service';

describe('Sprint0Service', () => {
  let service: Sprint0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sprint0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
