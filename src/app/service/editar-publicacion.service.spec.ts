import { TestBed } from '@angular/core/testing';

import { EditarPublicacionService } from './editar-publicacion.service';

describe('EditarPublicacionService', () => {
  let service: EditarPublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarPublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
