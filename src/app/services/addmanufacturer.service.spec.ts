import { TestBed } from '@angular/core/testing';

import { AddmanufacturerService } from './addmanufacturer.service';

describe('AddmanufacturerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddmanufacturerService = TestBed.get(AddmanufacturerService);
    expect(service).toBeTruthy();
  });
});
