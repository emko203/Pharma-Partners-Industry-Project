import { TestBed } from '@angular/core/testing';

import { LabResultsServiceService } from './lab-results-service.service';

describe('LabResultsServiceService', () => {
  let service: LabResultsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabResultsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
