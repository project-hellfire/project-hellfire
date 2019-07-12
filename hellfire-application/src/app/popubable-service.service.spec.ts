import { TestBed } from '@angular/core/testing';

import { PopubableServiceService } from './popubable-service.service';

describe('PopubableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopubableServiceService = TestBed.get(PopubableServiceService);
    expect(service).toBeTruthy();
  });
});
