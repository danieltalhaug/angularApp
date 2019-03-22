import { TestBed, inject } from '@angular/core/testing';

import { CatFactsService } from './cat-facts.service';

describe('CatFactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatFactsService]
    });
  });

  it('should be created', inject([CatFactsService], (service: CatFactsService) => {
    expect(service).toBeTruthy();
  }));
});
