import { TestBed, inject } from '@angular/core/testing';

import { ObjectMapperService } from './object-mapper.service';

describe('ObjectMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectMapperService]
    });
  });

  it('should be created', inject([ObjectMapperService], (service: ObjectMapperService) => {
    expect(service).toBeTruthy();
  }));
});
