import { TestBed } from '@angular/core/testing';

import { ToDOService } from './to-do.service';

describe('ToDOService', () => {
  let service: ToDOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
