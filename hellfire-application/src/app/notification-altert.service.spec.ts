import { TestBed } from '@angular/core/testing';

import { NotificationAltertService } from './notification-altert.service';

describe('NotificationAltertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationAltertService = TestBed.get(NotificationAltertService);
    expect(service).toBeTruthy();
  });
});
