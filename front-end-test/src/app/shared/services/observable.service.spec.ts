import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ObservableService } from './observable.service';

describe('ObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[HttpClientTestingModule]}));

  it('should be created', () => {
    const service: ObservableService = TestBed.get(ObservableService);
    expect(service).toBeTruthy();
  });
});
