import { TestBed } from '@angular/core/testing';

import { DatosBackendService } from './datos-backend.service';

describe('DatosBackendService', () => {
  let service: DatosBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
