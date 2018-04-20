import { TestBed, inject } from '@angular/core/testing';

import { CervejaService } from './cerveja.service';

describe('CervejaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CervejaService]
    });
  });

  it('should be created', inject([CervejaService], (service: CervejaService) => {
    expect(service).toBeTruthy();
  }));
});
