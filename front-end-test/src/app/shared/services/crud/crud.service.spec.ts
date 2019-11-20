import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared.module';

describe('CrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[HttpClientTestingModule,SharedModule]}));

  it('should be created', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });
});
