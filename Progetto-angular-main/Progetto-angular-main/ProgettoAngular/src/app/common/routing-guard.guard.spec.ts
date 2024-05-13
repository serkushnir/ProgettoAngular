import { TestBed } from '@angular/core/testing';

import { RoutingGuardGuard } from './routing-guard.guard';

describe('RoutingGuardGuard', () => {
  let guard: RoutingGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutingGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
