import { TestBed } from '@angular/core/testing';

import { AdditemService } from './additem.service';

describe('AdditemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditemService = TestBed.get(AdditemService);
    expect(service).toBeTruthy();
  });
});
