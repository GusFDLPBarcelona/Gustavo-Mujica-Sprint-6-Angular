import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { detalleGuardGuard } from './detalle-guard.guard';

describe('detalleGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => detalleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
