import { TestBed, inject } from '@angular/core/testing';

import { BackendCitasService } from './backend-citas.service';

describe('BackendCitasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendCitasService]
    });
  });

  it('should be created', inject([BackendCitasService], (service: BackendCitasService) => {
    expect(service).toBeTruthy();
  }));
});
