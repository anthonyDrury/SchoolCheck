import { TestBed, inject } from '@angular/core/testing';

import { SchoolDetailGuardService } from './school-detail-guard.service';

describe('SchoolDetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolDetailGuardService]
    });
  });

  it('should be created', inject([SchoolDetailGuardService], (service: SchoolDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
