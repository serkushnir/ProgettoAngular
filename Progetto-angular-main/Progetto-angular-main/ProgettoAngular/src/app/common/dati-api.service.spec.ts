import { TestBed } from '@angular/core/testing';

import { DatiApiService } from './dati-api.service';

describe('DatiApiService', () => {
  let service: DatiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
