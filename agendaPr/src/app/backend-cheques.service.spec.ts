import { TestBed, inject } from '@angular/core/testing';

import { BackendChequesService } from './backend-cheques.service';

describe('BackendChequesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendChequesService]
    });
  });

  it('should be created', inject([BackendChequesService], (service: BackendChequesService) => {
    expect(service).toBeTruthy();
  }));
});
