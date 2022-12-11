import { TestBed } from '@angular/core/testing';

import { SharepublicacionService } from './sharepublicacion.service';

describe('SharepublicacionService', () => {
  let service: SharepublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharepublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
