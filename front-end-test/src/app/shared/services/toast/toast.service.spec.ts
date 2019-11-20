import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[ToastrService]}));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });
});
