import { TestBed } from '@angular/core/testing';

import { EmpolyeesService } from './empolyees.service';

describe('EmpolyeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpolyeesService = TestBed.get(EmpolyeesService);
    expect(service).toBeTruthy();
  });
});
