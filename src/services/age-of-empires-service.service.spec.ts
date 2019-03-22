import { TestBed, inject } from '@angular/core/testing';

import { AgeOfEmpiresServiceService } from './age-of-empires-service.service';

describe('AgeOfEmpiresServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeOfEmpiresServiceService]
    });
  });

  it('should be created', inject([AgeOfEmpiresServiceService], (service: AgeOfEmpiresServiceService) => {
    expect(service).toBeTruthy();
  }));
});
