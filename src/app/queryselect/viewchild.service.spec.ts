import { TestBed, inject } from '@angular/core/testing';

import { ViewchildService } from './viewchild.service';

describe('ViewchildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewchildService]
    });
  });

  it('should be created', inject([ViewchildService], (service: ViewchildService) => {
    expect(service).toBeTruthy();
  }));
});
