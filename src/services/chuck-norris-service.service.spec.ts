import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisServiceService } from './chuck-norris-service.service';

describe('ChuckNorrisServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisServiceService]
    });
  });

  it('should be created', inject([ChuckNorrisServiceService], (service: ChuckNorrisServiceService) => {
    expect(service).toBeTruthy();
  }));
});
