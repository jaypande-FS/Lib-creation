import { TestBed } from '@angular/core/testing';

import { MydlibService } from './mydlib.service';

describe('MydlibService', () => {
  let service: MydlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
