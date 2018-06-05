import { TestBed, inject } from '@angular/core/testing';

import { SchoolGuardService } from './school-guard.service';

describe('SchoolGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolGuardService]
    });
  });

  it('should be created', inject([SchoolGuardService], (service: SchoolGuardService) => {
    expect(service).toBeTruthy();
  }));
});
