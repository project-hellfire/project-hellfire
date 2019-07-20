import { TestBed } from '@angular/core/testing';

import { NewLabelService } from './new-label.service';

describe('NewLabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLabelService = TestBed.get(NewLabelService);
    expect(service).toBeTruthy();
  });
});
