import { TestBed } from '@angular/core/testing';

import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';

describe('WeakUUIDGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeakUUIDGeneratorService = TestBed.get(WeakUUIDGeneratorService);
    expect(service).toBeTruthy();
  });
});
