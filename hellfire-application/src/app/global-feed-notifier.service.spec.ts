import { TestBed } from '@angular/core/testing';

import { GlobalFeedNotifierService } from './global-feed-notifier.service';

describe('GlobalFeedNotifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalFeedNotifierService = TestBed.get(GlobalFeedNotifierService);
    expect(service).toBeTruthy();
  });
});
