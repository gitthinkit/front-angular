import { TestBed } from '@angular/core/testing';

import { ConventionService } from './convention.service';

describe('ConventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConventionService = TestBed.get(ConventionService);
    expect(service).toBeTruthy();
  });
});
