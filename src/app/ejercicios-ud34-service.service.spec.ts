import { TestBed } from '@angular/core/testing';

import { EjerciciosUd34ServiceService } from './ejercicios-ud34-service.service';

describe('EjerciciosUd34ServiceService', () => {
  let service: EjerciciosUd34ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjerciciosUd34ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
