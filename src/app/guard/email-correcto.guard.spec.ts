import { TestBed } from '@angular/core/testing';

import { EmailCorrectoGuard } from './email-correcto.guard';

describe('EmailCorrectoGuard', () => {
  let guard: EmailCorrectoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmailCorrectoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
